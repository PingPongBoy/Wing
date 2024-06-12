using Microsoft.AspNetCore.Builder;
using Wing;
using Wing.ServiceProvider;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Host.AddWing(builder => builder.AddConsul());
builder.Services.AddAuthorization();
builder.Services.AddAuthentication("Bearer").AddJwtBearer();
builder.Services.AddWing()
                .AddPersistence()
.AddGateWay((downstreams, context) =>
{
    //�˴����ҵ����Ȩ�߼���Ҳ���Խ�payload����������ͨ������ͷת�������η���context.Request.Headers.Add()
    return Task.FromResult(true);
}, new WebSocketOptions
{
    KeepAliveInterval = TimeSpan.FromMinutes(2)
}, app =>
{
    var services = App.DiscoveryService.Get(HealthStatus.Healthy).GetAwaiter().GetResult();
    app.UseSwagger()
               .UseSwaggerUI(c =>
               {
                   services.ForEach(s => c.SwaggerEndpoint($"{s.ServiceAddress}/swagger/v1/swagger.json", s.Name));
               });
    //app.UseCors(options =>
    //{
    //    options.AllowAnyHeader()
    //    .AllowAnyMethod()
    //    .SetIsOriginAllowed(x => true)
    //    .AllowCredentials();
    //});

});
//.AddEventBus();

var app = builder.Build();

app.Run();


