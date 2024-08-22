﻿using Wing.ServiceProvider.Config;

namespace Wing.ServiceProvider.Dto
{
    public class ServiceDetailDto
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Scheme { get; set; }

        public string Host { get; set; }

        public int Port { get; set; }

        public string Address { get; set; }

        public int Weight { get; set; }

        public LoadBalancerOptions LoadBalancer { get; set; }

        public ServiceOptions ServiceType { get; set; }

        public HealthStatus Status { get; set; }

        public string Developer { get; set; }

        public string ConfigKey { get; set; }
    }
}
