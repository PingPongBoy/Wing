using Wing;

var builder = WebApplication.CreateBuilder(args);

builder.Host.AddWing(builder => builder.AddConsul());

builder.Services.AddControllers();

builder.Services.AddWing()
                 .AddWingUI()
                 .AddPersistence(FreeSql.DataType.SqlServer)
                 .AddAPM();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

// ��������������Դ����
app.UseCors(options =>
{
    options.AllowAnyHeader()
    .AllowAnyMethod()
    .SetIsOriginAllowed(x => true)
    .AllowCredentials();
});

app.MapControllers();

app.Run();
