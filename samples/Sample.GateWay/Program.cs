using Wing;

var builder = WebApplication.CreateBuilder(args);

builder.Host.AddWing(builder => builder.AddConsul());
builder.Services.AddAuthorization();
builder.Services.AddAuthentication("Bearer").AddJwtBearer();
builder.Services.AddWing()                
                .AddGateWay((downstreams,context) =>
                {
                    //�˴����ҵ����Ȩ�߼���Ҳ���Խ�payload����������ͨ������ͷת�������η���context.Request.Headers.Add()
                    return Task.FromResult(true);
                }, new WebSocketOptions
                {
                    KeepAliveInterval = TimeSpan.FromMinutes(2)
                });
//.AddEventBus();    

var app = builder.Build();
app.Run();


