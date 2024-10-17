using FreeSql;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Wing.Configuration.ServiceBuilder;
using Wing.Filters;
using Wing.ServiceCenter.Service;

namespace Wing
{
    public static class WingBuilderExtensions
    {
        public static IWingServiceBuilder AddServiceCenter(this IWingServiceBuilder wingBuilder, DataType dataType, string connectionString = "")
        {
            wingBuilder.Services.AddControllers(options =>
            {
                options.Filters.Add(typeof(ApiExceptionFilter));
                options.Filters.Add(typeof(ApiResultFilter));
            });

            // 禁用默认行为
            wingBuilder.Services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;
            });

            wingBuilder.AddPersistence(dataType, connectionString);
            wingBuilder.Services.AddSingleton<RegisterService>();
            wingBuilder.Services.AddSingleton<ConfigService>();
            return wingBuilder;
        }
    }
}
