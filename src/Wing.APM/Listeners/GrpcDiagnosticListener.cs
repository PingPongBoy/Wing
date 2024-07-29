﻿using System.Collections.Concurrent;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Wing.APM.Persistence;
using Wing.APM.Persistence;

namespace Wing.APM.Listeners
{
    public class GrpcDiagnosticListener : IDiagnosticListener
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ILogger<GrpcDiagnosticListener> _logger;

        public string Name => "Grpc.Net.Client";

        public GrpcDiagnosticListener(IHttpContextAccessor httpContextAccessor,
                                      ILogger<GrpcDiagnosticListener> logger)
        {
            _httpContextAccessor = httpContextAccessor;
            _logger = logger;
        }

        public void OnCompleted()
        {
        }

        public void OnError(Exception error)
        {
        }

        public void OnNext(KeyValuePair<string, object> value)
        {
            try
            {
                switch (value.Key)
                {
                    case "Grpc.Net.Client.GrpcOut.Start":
                        Start(value.Value);
                        break;
                    case "Grpc.Net.Client.GrpcOut.Stop":
                        Stop(value.Value);
                        break;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Wing.APM-grpc监听异常");
            }
        }

        private void Start(object value)
        {
            var request = ListenerTracer.GetProperty<HttpRequestMessage>(value, "Request");
            if (request == null || request.Headers.Contains(ApmTools.TraceId))
            {
                return;
            }

            var service = App.CurrentService;
            TracerDto tracerDto;
            var detailId = Guid.NewGuid().ToString();
            var context = _httpContextAccessor.HttpContext;
            if (context == null)
            {
                tracerDto = new TracerDto
                {
                    HttpTracer = new HttpTracer
                    {
                        Id = detailId,
                        ServiceName = service.Name,
                        ServiceUrl = App.CurrentServiceUrl,
                        RequestType = ApmTools.Grpc,
                        RequestMethod = request.Method.ToString(),
                        RequestTime = DateTime.Now,
                        RequestUrl = request.RequestUri.ToString(),
                        RequestValue = ListenerTracer.GetRequestValue(request)
                                                .ConfigureAwait(false)
                                                .GetAwaiter()
                                                .GetResult()
                    }
                };
                ListenerTracer.Data.TryAdd(detailId, tracerDto);
                request.Headers.Add(ApmTools.TraceId, tracerDto.HttpTracer.Id);
                request.Properties.Add(ApmTools.TraceId, tracerDto.HttpTracer.Id);
                return;
            }

            if (context.Items == null || !context.Items.Any())
            {
                return;
            }

            tracerDto = ListenerTracer.Data[context.Items[ApmTools.TraceId].ToString()];
            tracerDto.HttpTracerDetails ??= new ConcurrentDictionary<string, HttpTracerDetail>();
            tracerDto.HttpTracerDetails.TryAdd(detailId, new HttpTracerDetail
            {
                Id = detailId,
                TraceId = tracerDto.Tracer.Id,
                RequestType = ApmTools.Grpc,
                RequestMethod = request.Method.ToString(),
                RequestTime = DateTime.Now,
                RequestUrl = request.RequestUri.ToString()
            });
            request.Headers.Add(ApmTools.TraceId, tracerDto.Tracer.Id);
            request.Properties.Add(ApmTools.TraceDetailId, detailId);
            request.Properties.Add(ApmTools.TraceId, tracerDto.Tracer.Id);
        }

        private void Stop(object value)
        {
            var request = ListenerTracer.GetProperty<HttpRequestMessage>(value, "Request");
            if (request == null || !request.Properties.ContainsKey(ApmTools.TraceId))
            {
                return;
            }

            var response = ListenerTracer.GetProperty<HttpResponseMessage>(value, "Response");
            TracerDto tracerDto;
            var traceId = request.Properties[ApmTools.TraceId].ToString();
            int? statusCode = null;
            if (response != null)
            {
                statusCode = (int)response.StatusCode;
            }

            if (request.Properties.ContainsKey(ApmTools.TraceDetailId))
            {
                tracerDto = ListenerTracer.Data[traceId];
                var traceDetail = tracerDto.HttpTracerDetails[request.Properties[ApmTools.TraceDetailId].ToString()];
                traceDetail.ResponseTime = DateTime.Now;
                traceDetail.StatusCode = statusCode;
                traceDetail.UsedMillSeconds = ApmTools.UsedMillSeconds(traceDetail.RequestTime, traceDetail.ResponseTime);
                return;
            }

            tracerDto = ListenerTracer.Data[traceId];
            tracerDto.HttpTracer.ResponseTime = DateTime.Now;
            tracerDto.HttpTracer.StatusCode = statusCode;
            tracerDto.HttpTracer.UsedMillSeconds = ApmTools.UsedMillSeconds(tracerDto.HttpTracer.RequestTime, tracerDto.HttpTracer.ResponseTime);
            tracerDto.IsStop = true;
        }
    }
}
