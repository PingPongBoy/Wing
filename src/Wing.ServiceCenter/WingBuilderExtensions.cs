using FreeSql;
using Microsoft.Extensions.DependencyInjection;
using Wing.Configuration.ServiceBuilder;
using Wing.ServiceCenter.Service;

namespace Wing
{
    public static class WingBuilderExtensions
    {
        public static IWingServiceBuilder AddServiceCenter(this IWingServiceBuilder wingBuilder, DataType dataType, string connectionString = "")
        {
            wingBuilder.AddPersistence(dataType, connectionString);
            wingBuilder.Services.AddSingleton<RegisterService>();
            wingBuilder.Services.AddSingleton<ConfigService>();
            return wingBuilder;
        }
    }
}
