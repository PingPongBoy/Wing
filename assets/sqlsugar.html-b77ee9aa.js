import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as r,a as n,b as s,d as c,w as a,e as d}from"./app-a2a10768.js";const k="/wing/assets/5.3-fc3825d8.png",v={},g=n("h3",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),b=n("p",null,[s("支持对ORM框架"),n("code",null,"SqlSugar"),s("生成并执行的SQL语句进行跟踪与分析，以方便开发人员优化程序性能。")],-1),h=n("h3",{id:"安装依赖包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装依赖包","aria-hidden":"true"},"#"),s(" 安装依赖包")],-1),m=n("code",null,"5.3",-1),f={href:"https://gitee.com/linguicheng/wing-demo/tree/master/5.3",target:"_blank",rel:"noopener noreferrer"},S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("dotnet "),n("span",{class:"token function"},"add"),s(` package Wing.Consul

dotnet `),n("span",{class:"token function"},"add"),s(` package Wing.APM.SqlSugar

dotnet `),n("span",{class:"token function"},"add"),s(" package Wing.SqlServer"),n("span",{class:"token punctuation"},"("),s("可选Wing.MySql/Wing.Oracle/Wing.PostgreSQL"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`Install-Package Wing.Consul

Install-Package Wing.APM.SqlSugar

Install-Package Wing.SqlServer`),n("span",{class:"token punctuation"},"("),s("可选Wing.MySql/Wing.Oracle/Wing.PostgreSQL"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h3",{id:"program代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#program代码","aria-hidden":"true"},"#"),s(" Program代码")],-1),A=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},"IHostBuilder"),s(),n("span",{class:"token function"},"CreateHostBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
            Host`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateDefaultBuilder"),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ConfigureWebHostDefaults"),n("span",{class:"token punctuation"},"("),s("webBuilder "),n("span",{class:"token operator"},"=>"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    webBuilder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"UseStartup"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("Startup"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWing"),n("span",{class:"token punctuation"},"("),s("builder "),n("span",{class:"token operator"},"=>"),s(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConsul"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},"Wing"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" builder "),n("span",{class:"token operator"},"="),s(" WebApplication"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateBuilder"),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Host"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWing"),n("span",{class:"token punctuation"},"("),s("builder "),n("span",{class:"token operator"},"=>"),s(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConsul"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Add services to the container."),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddControllers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWing"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddPersistence"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddAPM"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddSqlSugar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"AddScoped"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("ISqlSugarClient"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"=>"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"SqlSugarClient"),s(" sqlSugar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"SqlSugarClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"ConnectionConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            DbType `),n("span",{class:"token operator"},"="),s(" DbType"),n("span",{class:"token punctuation"},"."),s("SqlServer"),n("span",{class:"token punctuation"},","),s(`
            ConnectionString `),n("span",{class:"token operator"},"="),s(" Configuration"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"ConnectionStrings:Wing.Demo"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            IsAutoCloseConnection `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        db `),n("span",{class:"token operator"},"=>"),s("db"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWingAPM"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" sqlSugar"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" app "),n("span",{class:"token operator"},"="),s(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Configure the HTTP request pipeline."),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseHttpsRedirection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseAuthorization"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"MapControllers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Run"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=d(`<h3 id="startup代码" tabindex="-1"><a class="header-anchor" href="#startup代码" aria-hidden="true">#</a> Startup代码</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code> <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">AddWing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">AddPersistence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">AddAPM</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span><span class="token function">AddSqlSugar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISqlSugarClient<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>s <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">SqlSugarClient</span> sqlSugar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlSugarClient</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConnectionConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            DbType <span class="token operator">=</span> DbType<span class="token punctuation">.</span>SqlServer<span class="token punctuation">,</span>
            ConnectionString <span class="token operator">=</span> Configuration<span class="token punctuation">[</span><span class="token string">&quot;ConnectionStrings:Wing.Demo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            IsAutoCloseConnection <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        db <span class="token operator">=&gt;</span>db<span class="token punctuation">.</span><span class="token function">AddWingAPM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sqlSugar<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看运行结果" tabindex="-1"><a class="header-anchor" href="#查看运行结果" aria-hidden="true">#</a> 查看运行结果</h3>`,3),y=n("code",null,"5.3",-1),W={href:"http://localhost:5310/weatherforecast",target:"_blank",rel:"noopener noreferrer"},x=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function P(T,I){const o=l("ExternalLinkIcon"),i=l("CodeTabs");return u(),r("div",null,[g,b,h,n("p",null,[s("示例"),m,s("("),n("a",f,[s("点击查看完整示例代码"),c(o)]),s(")")]),c(i,{id:"12",data:[{id:".NET CLI"},{id:"Package Manager"}]},{title0:a(({value:t,isActive:e})=>[s(".NET CLI")]),title1:a(({value:t,isActive:e})=>[s("Package Manager")]),tab0:a(({value:t,isActive:e})=>[S]),tab1:a(({value:t,isActive:e})=>[_]),_:1},8,["data"]),C,c(i,{id:"23",data:[{id:".NET Core 3.1"},{id:".NET 6.0"}]},{title0:a(({value:t,isActive:e})=>[s(".NET Core 3.1")]),title1:a(({value:t,isActive:e})=>[s(".NET 6.0")]),tab0:a(({value:t,isActive:e})=>[A]),tab1:a(({value:t,isActive:e})=>[q]),_:1},8,["data"]),w,n("ul",null,[n("li",null,[s("运行示例"),y,s("，浏览器访问 "),n("a",W,[s("http://localhost:5310/weatherforecast"),c(o)]),s(" ，可以看到该http请求追踪信息和SQL的相关信息，如下图：")])]),x])}const N=p(v,[["render",P],["__file","sqlsugar.html.vue"]]);export{N as default};