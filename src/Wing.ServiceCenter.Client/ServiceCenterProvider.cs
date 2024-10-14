using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wing.ServiceProvider;
using Wing.ServiceProvider.Config;

namespace Wing.ServiceCenter.Client
{
    public class ServiceCenterProvider : IDiscoveryServiceProvider
    {
        private readonly Provider _config;

        private ulong LastVersion { get; set; }

        public ServiceCenterProvider(Provider config)
        {
            _config = config;
        }

        public Task<bool> Delete(string key, CancellationToken ct = default)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Deregister(string serviceId)
        {
            throw new NotImplementedException();
        }

        public Task<ServiceProvider.Service> Detail(string serviceId)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> Get()
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> Get(HealthStatus healthStatus)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> Get(string serviceName)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> Get(string serviceName, HealthStatus healthStatus)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> GetGrpcServices(string serviceName)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> GetGrpcServices(string serviceName, HealthStatus healthStatus)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> GetHttpServices(string serviceName)
        {
            throw new NotImplementedException();
        }

        public Task<List<ServiceProvider.Service>> GetHttpServices(string serviceName, HealthStatus healthStatus)
        {
            throw new NotImplementedException();
        }

        public Task<Dictionary<string, string>> GetKVData(string key, CancellationToken ct = default)
        {
            throw new NotImplementedException();
        }

        public Task GetKVData(Action<Dictionary<string, string>> setData, CancellationToken ct = default)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Put(string key, byte[] value, CancellationToken ct = default)
        {
            throw new NotImplementedException();
        }

        public Task Register()
        {
            throw new NotImplementedException();
        }
    }
}
