﻿using System.Collections.Concurrent;
using System.Net;
using Microsoft.AspNetCore.Http.Extensions;
using Wing.Converter;
using Wing.Exceptions;
using Wing.Persistence.Gateway;
using Wing.Persistence.GateWay;

namespace Wing.Gateway.Middleware
{
    public class RoutePolicyMiddleware
    {
        private readonly ServiceRequestDelegate _next;
        private readonly ILogProvider _logProvider;
        private readonly IJson _json;

        public RoutePolicyMiddleware(ServiceRequestDelegate next,
            ILogProvider logProvider,
            IJson json)
        {
            _next = next;
            _logProvider = logProvider;
            _json = json;
        }

        public async Task InvokeAsync(ServiceContext serviceContext)
        {
            if (serviceContext.Route == null || serviceContext.IsWebSocket)
            {
                await _next(serviceContext);
                return;
            }

            var context = serviceContext.HttpContext;
            var request = context.Request;
            if (!string.IsNullOrWhiteSpace(serviceContext.Route.Upstream.Method) && !request.Method.Equals(serviceContext.Route.Upstream.Method, StringComparison.OrdinalIgnoreCase))
            {
                context.Response.StatusCode = (int)HttpStatusCode.MethodNotAllowed;
                return;
            }

            if (serviceContext.DownstreamServices.Count == 1)
            {
                try
                {
                    await InvokeDownstreamService(serviceContext, serviceContext.DownstreamServices.First());
                }
                catch (ServiceNotFoundException ex)
                {
                    serviceContext.StatusCode = (int)HttpStatusCode.NotFound;
                    serviceContext.Exception = $"{ex.Message} {ex.StackTrace}";
                }
                catch (Exception ex)
                {
                    serviceContext.StatusCode = (int)HttpStatusCode.BadGateway;
                    serviceContext.Exception = $"{ex.Message} {ex.StackTrace}";
                }
                finally
                {
                    await _logProvider.Add(serviceContext);
                    await context.Response.Response(serviceContext);
                }

                return;
            }

            var result = "{";
            LogAddDto logDto = new()
            {
                Log = new()
                {
                    Id = Guid.NewGuid().ToString(),
                    ClientIp = Tools.RemoteIp,
                    RequestTime = serviceContext.RequestTime,
                    RequestMethod = request.Method,
                    RequestUrl = request.GetDisplayUrl(),
                    GateWayServerIp = App.CurrentServiceUrl
                },
                LogDetails = new ConcurrentBag<LogDetail>()
            };

            await Parallel.ForEachAsync(serviceContext.DownstreamServices, async (downstreamService, ct) =>
             {
                 var logDetail = new LogDetail
                 {
                     Id = Guid.NewGuid().ToString(),
                     Policy = downstreamService.Policy == null ? string.Empty : _json.Serialize(downstreamService.Policy),
                     Key = downstreamService.Downstream.Key,
                     LogId = logDto.Log.Id,
                     RequestMethod = downstreamService.Downstream.Method,
                     RequestTime = DateTime.Now,
                     RequestUrl = downstreamService.Downstream.Url,
                     ServiceName = downstreamService.Downstream.ServiceName
                 };
                 try
                 {
                     var serviceContextCopy = new ServiceContext(serviceContext.HttpContext);
                     await InvokeDownstreamService(serviceContextCopy, downstreamService);
                     serviceContext.RequestValue = serviceContextCopy.RequestValue;
                     serviceContext.ContentType = serviceContextCopy.ContentType;
                     if (serviceContext.ResponseHeaders == null)
                     {
                         serviceContext.ResponseHeaders = new Dictionary<string, Microsoft.Extensions.Primitives.StringValues>();
                     }

                     foreach (var header in serviceContextCopy.ResponseHeaders)
                     {
                         if (!serviceContext.ResponseHeaders.Any(x => x.Key == header.Key))
                         {
                             serviceContext.ResponseHeaders.Add(header.Key, header.Value);
                         }
                     }

                     logDetail.StatusCode = serviceContextCopy.StatusCode;
                     logDetail.ResponseTime = DateTime.Now;
                     logDetail.ResponseValue = serviceContextCopy.ResponseValue;
                     logDetail.UsedMillSeconds = Convert.ToInt64((logDetail.ResponseTime - logDetail.RequestTime).TotalMilliseconds);
                     logDetail.ServiceAddress = serviceContextCopy.ServiceAddress;
                     var content = "\"" + logDetail.Key + "\":" + serviceContextCopy.ResponseValue + ",";
                     result += content;
                 }
                 catch (ServiceNotFoundException ex)
                 {
                     logDetail.StatusCode = (int)HttpStatusCode.NotFound;
                     logDetail.Exception = $"{ex.Message} {ex.StackTrace}";
                 }
                 catch (Exception ex)
                 {
                     logDetail.StatusCode = (int)HttpStatusCode.BadGateway;
                     logDetail.Exception = $"{ex.Message} {ex.StackTrace}";
                 }
                 finally
                 {
                     logDto.LogDetails.Add(logDetail);
                 }
             });

            result = result.TrimEnd(',');
            result += "}";
            logDto.Log.ResponseValue = result;
            logDto.Log.ResponseTime = DateTime.Now;
            logDto.Log.UsedMillSeconds = Convert.ToInt64((logDto.Log.ResponseTime - logDto.Log.RequestTime).TotalMilliseconds);
            logDto.Log.StatusCode = (int)HttpStatusCode.OK;
            logDto.Log.RequestValue = serviceContext.RequestValue;

            await _logProvider.Add(logDto, context);
            serviceContext.StatusCode = (int)HttpStatusCode.OK;
            serviceContext.ResponseValue = result;
            await context.Response.Response(serviceContext);
        }

        private async Task<ServiceContext> InvokeDownstreamService(ServiceContext serviceContext, DownstreamService downstreamService)
        {
            serviceContext.ServiceName = downstreamService.Downstream.ServiceName;
            serviceContext.DownstreamPath = downstreamService.Downstream.Url;
            serviceContext.Method = downstreamService.Downstream.Method;
            serviceContext.Policy = downstreamService.Policy;
            if (serviceContext.Policy != null &&
                  ((serviceContext.Policy.Breaker != null && serviceContext.Policy.Breaker.IsEnabled)
                  || (serviceContext.Policy.RateLimit != null && serviceContext.Policy.RateLimit.IsEnabled)
                  || (serviceContext.Policy.BulkHead != null && serviceContext.Policy.BulkHead.IsEnabled)
                  || (serviceContext.Policy.Retry != null && serviceContext.Policy.Retry.IsEnabled)
                  || (serviceContext.Policy.TimeOut != null && serviceContext.Policy.TimeOut.IsEnabled)))
            {
                await DataProvider.InvokeWithPolicy(serviceContext);
            }
            else
            {
                await DataProvider.InvokeWithNoPolicy(serviceContext);
            }

            return serviceContext;
        }
    }
}
