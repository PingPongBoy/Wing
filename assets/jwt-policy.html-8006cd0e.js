import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as r,a as n,b as s,d as a,w as t,e as d}from"./app-9cadba0a.js";const k="/Wing/assets/3.7-1-1cd51dd5.png",v="/Wing/assets/3.7-2-1ec84632.png",m={},b=n("h3",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),h=n("p",null,[n("code",null,"网关"),s("支持"),n("code",null,"JWT授权"),s("是为了让系统功能权限控制放在网关统一处理，这样下游服务可以不用管权限认证和授权。")],-1),g=n("h3",{id:"创建一个支持jwt授权的网关",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建一个支持jwt授权的网关","aria-hidden":"true"},"#"),s(" 创建一个支持JWT授权的网关")],-1),_=n("li",null,[n("p",null,"提前准备：安装并启动Consul")],-1),f={href:"https://gitee.com/linguicheng/wing-demo/tree/master/3.7",target:"_blank",rel:"noopener noreferrer"},q=n("h3",{id:"安装依赖包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装依赖包","aria-hidden":"true"},"#"),s(" 安装依赖包")],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("dotnet "),n("span",{class:"token function"},"add"),s(` package Wing.Consul

dotnet `),n("span",{class:"token function"},"add"),s(` package Wing.Gateway
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`Install-Package Wing.Consul

Install-Package Wing.Gateway
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=d(`<h3 id="program代码" tabindex="-1"><a class="header-anchor" href="#program代码" aria-hidden="true">#</a> Program代码</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Claims</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Wing</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

builder<span class="token punctuation">.</span>Host<span class="token punctuation">.</span><span class="token function">AddWing</span><span class="token punctuation">(</span>builder <span class="token operator">=&gt;</span> builder<span class="token punctuation">.</span><span class="token function">AddConsul</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddAuthentication</span><span class="token punctuation">(</span><span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddJwtBearer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddWing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">AddGateWay</span><span class="token punctuation">(</span><span class="token punctuation">(</span>downstreams<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">//此处添加业务授权逻辑，也可以将payload解析的内容通过请求头转发到下游服务context.Request.Headers.Append()</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> account <span class="token operator">=</span> context<span class="token punctuation">.</span>User<span class="token punctuation">.</span>Claims<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Type <span class="token operator">==</span> ClaimTypes<span class="token punctuation">.</span>NameIdentifier<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
                    context<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Headers<span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span><span class="token string">&quot;user-account&quot;</span><span class="token punctuation">,</span> account<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例" aria-hidden="true">#</a> 配置示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Gateway&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义路由</span>
    <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 上游配置</span>
        <span class="token property">&quot;Upstream&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 请求Url</span>
          <span class="token property">&quot;Url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jwt&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 请求方式</span>
          <span class="token property">&quot;Method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 下游配置</span>
        <span class="token property">&quot;Downstreams&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 服务名称</span>
            <span class="token property">&quot;ServiceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Wing.Demo_3.2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WeatherForecast/JwtAuthPolicy&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 请求方式</span>
            <span class="token property">&quot;Method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否启用JWT认证</span>
        <span class="token property">&quot;UseJWTAuth&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 固定Key认证</span>
        <span class="token property">&quot;AuthKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 请求日志</span>
    <span class="token property">&quot;Log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;IsEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UseEventBus&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取token" tabindex="-1"><a class="header-anchor" href="#获取token" aria-hidden="true">#</a> 获取token</h3><p>执行创建JWT token的dotnet命令，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet user-jwts create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="查看运行结果" tabindex="-1"><a class="header-anchor" href="#查看运行结果" aria-hidden="true">#</a> 查看运行结果</h3>',9),A={href:"https://gitee.com/linguicheng/wing-demo/tree/master/3.2",target:"_blank",rel:"noopener noreferrer"},W={href:"https://gitee.com/linguicheng/wing-demo/tree/master/3.7",target:"_blank",rel:"noopener noreferrer"},C={href:"http://localhost:3710/jwt",target:"_blank",rel:"noopener noreferrer"},T=n("figure",null,[n("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function j(I,B){const e=c("ExternalLinkIcon"),i=c("CodeTabs");return u(),r("div",null,[b,h,g,n("ul",null,[_,n("li",null,[n("p",null,[s("打开 Visual Studio 2022 并创建Web Api项目("),n("a",f,[s("点击查看完整示例代码3.7"),a(e)]),s(")")])])]),q,a(i,{id:"24",data:[{id:".NET CLI"},{id:"Package Manager"}]},{title0:t(({value:o,isActive:p})=>[s(".NET CLI")]),title1:t(({value:o,isActive:p})=>[s("Package Manager")]),tab0:t(({value:o,isActive:p})=>[y]),tab1:t(({value:o,isActive:p})=>[w]),_:1},8,["data"]),x,n("p",null,[s("分别启动API服务示例3.2("),n("a",A,[s("点击查看完整示例代码3.2"),a(e)]),s(")、网关示例3.7("),n("a",W,[s("点击查看完整示例代码3.7"),a(e)]),s(")，访问"),n("a",C,[s("http://localhost:3710/jwt"),a(e)]),s(" ，返回结果如下图：")]),T])}const S=l(m,[["render",j],["__file","jwt-policy.html.vue"]]);export{S as default};
