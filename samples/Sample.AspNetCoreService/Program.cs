using FreeSql;
using Sample.AspNetCoreService;
using System.Security.Claims;
using Wing;

var builder = WebApplication.CreateBuilder(args);

builder.Host.AddWing(builder => builder.AddConsul());

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddSwaggerGen(e =>
{
    e.SwaggerDoc("v1",
        new Microsoft.OpenApi.Models.OpenApiInfo()
        {
            Title = "Sample.AspNetCoreService API",//�ĵ�����
            Version = "v1"//�ĵ��汾
        }
        );
    e.IncludeXmlComments(System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Sample.AspNetCoreService.xml"));
});
var fsql = new FreeSqlBuilder()
                              .UseConnectionString(DataType.SqlServer, builder.Configuration["ConnectionStrings:Sample.Wing"])
                              .UseAutoSyncStructure(true) // �Զ�ͬ��ʵ��ṹ�����ݿ⣬FreeSql����ɨ����򼯣�ֻ��CRUDʱ�Ż����ɱ�
                              .Build<SampleWingDbFlag>();
builder.Services.AddSingleton(typeof(IFreeSql<SampleWingDbFlag>), serviceProvider => fsql);
builder.Services.AddSingleton<ITracerService, TracerService>();
builder.Services.AddWing().AddPersistence(DataType.SqlServer).AddJwt(context =>
{
    var user = context.User.Claims.Where(c => c.Type == ClaimTypes.Name).FirstOrDefault().Value;
    return user == "byron";
}).AddAPM(x => x.AddFreeSql().Build(fsql));

var app = builder.Build();
app.UseCors(options =>
{
    options.AllowAnyHeader();
    options.AllowAnyMethod();
    options.AllowAnyOrigin();
});
app.UseSwagger()
               .UseSwaggerUI(c =>
               {
                   c.SwaggerEndpoint($"/swagger/v1/swagger.json", "Sample.AspNetCoreService");
               });
// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
