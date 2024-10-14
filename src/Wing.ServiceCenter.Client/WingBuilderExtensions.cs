﻿using Microsoft.Extensions.DependencyInjection;
using Wing.Configuration.ServiceBuilder;
using Wing.ServiceCenter.Client;
using Wing.ServiceCenter.Client.Service;
using Wing.ServiceProvider;

namespace Wing
{
    public static class WingBuilderExtensions
    {
        public static IWingServiceBuilder AddServiceCenter(this IWingServiceBuilder wingBuilder)
        {
            wingBuilder.Services.AddSingleton<RegisterService>();
            wingBuilder.Services.AddSingleton<ConfigService>();
            wingBuilder.Services.AddSingleton<IServiceViewProvider, ServiceViewProvider>(x =>
            {
                var serviceViewProvider = new ServiceViewProvider(x.GetRequiredService<RegisterService>());
                App.ServiceViewProvider = serviceViewProvider;
                return serviceViewProvider;
            });
            wingBuilder.Services.AddSingleton<IConfigViewProvider, ConfigViewProvider>(x =>
            {
                var configViewProvider = new ConfigViewProvider(x.GetRequiredService<ConfigService>());
                App.ConfigViewProvider = configViewProvider;
                return configViewProvider;
            });
            return wingBuilder;
        }
    }
}
