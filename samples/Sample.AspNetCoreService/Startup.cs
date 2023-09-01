using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Linq;
using System.Security.Claims;
using FreeSql;
using Wing;

namespace Sample.AspNetCoreService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddHttpClient();
            var fsql = new FreeSqlBuilder()
                              .UseConnectionString(DataType.SqlServer, Configuration["ConnectionStrings:Sample.Wing"])
                              .UseAutoSyncStructure(true) // �Զ�ͬ��ʵ��ṹ�����ݿ⣬FreeSql����ɨ����򼯣�ֻ��CRUDʱ�Ż����ɱ���
                              .Build<SampleWingDbFlag>();
            services.AddSingleton(typeof(IFreeSql<SampleWingDbFlag>), serviceProvider => fsql);
            services.AddSingleton<ITracerService, TracerService>();
            services.AddWing().AddPersistence().AddEventBus().AddJwt(context =>
            {
                var user = context.User.Claims.Where(c => c.Type == ClaimTypes.Name).FirstOrDefault().Value;
                return user == "byron";
            }).AddAPM(x=>x.AddFreeSql().Build(fsql));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}