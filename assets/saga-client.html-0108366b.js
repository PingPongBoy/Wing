import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as k,d as p,w as a,a as n,b as s,e as c}from"./app-4074b9f4.js";const d="/wing/assets/4.2-1-b062974a.png",m={},v=n("h3",{id:"安装依赖包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装依赖包","aria-hidden":"true"},"#"),s(" 安装依赖包")],-1),b=n("ul",null,[n("li",null,"提前准备：安装并启动Consul、RabbitMQ、数据库支持(SqlServer、Oracle、MySql、PostgreSql)")],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("dotnet "),n("span",{class:"token function"},"add"),s(` package Wing.Saga.Client

dotnet `),n("span",{class:"token function"},"add"),s(` package Wing.RabbitMQ

dotnet `),n("span",{class:"token function"},"add"),s(` package Wing.Consul
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`Install-Package Wing.Saga.Client

Install-Package Wing.RabbitMQ

Install-Package Wing.Consul
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=c(`<h3 id="事务单元模型" tabindex="-1"><a class="header-anchor" href="#事务单元模型" aria-hidden="true">#</a> 事务单元模型</h3><p>数据传输实体，需要继承基类事务单元模型<code>Wing.Saga.Client.UnitModel</code>，并标记为可序列化。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Serializable</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleUnitModel</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">UnitModel</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> HelloName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Serializable</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnitModel</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 事务名称，必填</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">// 描述</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Description <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务单元" tabindex="-1"><a class="header-anchor" href="#事务单元" aria-hidden="true">#</a> 事务单元</h3><p>子事务由一个个事务单元构成，子事务需要继承基类事务单元<code>Wing.Saga.Client. SagaUnit&lt;&gt;</code>，<code>Commit</code>：事务成功执行提交方法，<code>Cancel</code>：事务执行失败补偿方法。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleSagaUnit1</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">SagaUnit<span class="token punctuation">&lt;</span>SampleUnitModel<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>SagaResult<span class="token punctuation">&gt;</span></span> <span class="token function">Cancel</span><span class="token punctuation">(</span><span class="token class-name">SampleUnitModel</span> model<span class="token punctuation">,</span> <span class="token class-name">SagaResult</span> previousResult<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SagaResult</span> <span class="token punctuation">{</span> Success <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>SagaResult<span class="token punctuation">&gt;</span></span> <span class="token function">Commit</span><span class="token punctuation">(</span><span class="token class-name">SampleUnitModel</span> model<span class="token punctuation">,</span> <span class="token class-name">SagaResult</span> previousResult<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Task<span class="token punctuation">.</span><span class="token function">FromResult</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SagaResult</span> <span class="token punctuation">{</span> Success <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SagaResult</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 事务执行结果</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> Success <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">// 消息提示</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Msg <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
   
    <span class="token comment">// 返回数据</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">dynamic</span></span> Data <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整事务" tabindex="-1"><a class="header-anchor" href="#完整事务" aria-hidden="true">#</a> 完整事务</h3><p><code>Start</code>：开始事务，给定事务名称，定义事务执行策略</p><p><code>Then</code>：执行子事务，定义子事务名称和传参</p><p><code>End</code>：事务结束</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Saga<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token string">&quot;Saga分布式事务样例&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SagaOptions</span> <span class="token punctuation">{</span> TranPolicy <span class="token operator">=</span> TranPolicy<span class="token punctuation">.</span>Backward <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Then</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleSagaUnit1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleUnitModel</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;事务单元1&quot;</span><span class="token punctuation">,</span> HelloName <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Then</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleSagaUnit2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleUnitModel</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;事务单元2&quot;</span><span class="token punctuation">,</span> HelloName <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Then</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleSagaUnit3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleUnitModel</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;事务单元3&quot;</span><span class="token punctuation">,</span> HelloName <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">End</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token interpolation-string"><span class="token string">$&quot;Hello </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">name</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SagaOptions</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 事务执行策略</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name">TranPolicy</span> TranPolicy <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 熔断条件（重试指定次数失败后，则不再重试）</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BreakerCount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 自定义策略条件（向前恢复指定次数，失败则向后恢复）</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> CustomCount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 事务描述</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Description <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">TranPolicy</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">int</span></span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 向前恢复</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Forward <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 向后恢复</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Backward <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 先前再后(向前恢复指定次数，如果失败，则向后恢复)</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Custom <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="program代码" tabindex="-1"><a class="header-anchor" href="#program代码" aria-hidden="true">#</a> Program代码</h3>`,12),w=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},"IHostBuilder"),s(),n("span",{class:"token function"},"CreateHostBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
            Host`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateDefaultBuilder"),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ConfigureWebHostDefaults"),n("span",{class:"token punctuation"},"("),s("webBuilder "),n("span",{class:"token operator"},"=>"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    webBuilder`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"UseStartup"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("Startup"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWing"),n("span",{class:"token punctuation"},"("),s("builder "),n("span",{class:"token operator"},"=>"),s(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConsul"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},"Wing"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" builder "),n("span",{class:"token operator"},"="),s(" WebApplication"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateBuilder"),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Host"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWing"),n("span",{class:"token punctuation"},"("),s("builder "),n("span",{class:"token operator"},"=>"),s(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConsul"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Add services to the container."),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddControllers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

builder`),n("span",{class:"token punctuation"},"."),s("Services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddWing"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddSaga"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddEventBus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddJwt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" app "),n("span",{class:"token operator"},"="),s(" builder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Configure the HTTP request pipeline."),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseHttpsRedirection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseAuthorization"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"MapControllers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Run"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=c(`<h3 id="startup代码" tabindex="-1"><a class="header-anchor" href="#startup代码" aria-hidden="true">#</a> Startup代码</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">AddWing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddEventBus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddJwt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务重试" tabindex="-1"><a class="header-anchor" href="#事务重试" aria-hidden="true">#</a> 事务重试</h3><p>此接口由事务协调器定时调用触发，定时回滚失败的事务或者重试向前执行事务。</p>`,4),_=n("code",null,"4.2-1",-1),C={href:"https://gitee.com/linguicheng/wing-demo/tree/master/4.2-1",target:"_blank",rel:"noopener noreferrer"},R=c(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Wing/Saga/[controller]/[action]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authorize</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TranRetryController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ITranRetryService</span> _tranRetryService<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token function">TranRetryController</span><span class="token punctuation">(</span><span class="token class-name">ITranRetryService</span> tranRetryService<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _tranRetryService <span class="token operator">=</span> tranRetryService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>ResponseData<span class="token punctuation">&gt;</span></span> <span class="token function">Commit</span><span class="token punctuation">(</span><span class="token class-name">RetryData</span> retryData<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span>  _tranRetryService<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span>retryData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>ResponseData<span class="token punctuation">&gt;</span></span> <span class="token function">Cancel</span><span class="token punctuation">(</span><span class="token class-name">RetryData</span> retryData<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _tranRetryService<span class="token punctuation">.</span><span class="token function">Cancel</span><span class="token punctuation">(</span>retryData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=n("code",null,"4.2-2",-1),A={href:"https://gitee.com/linguicheng/wing-demo/tree/master/4.2-2",target:"_blank",rel:"noopener noreferrer"},x=c(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authorize</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTranRetryService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">TranRetryGrpcService</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">MyTranRetryService</span><span class="token punctuation">(</span><span class="token class-name">ITranRetryService</span> tranRetryService<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>tranRetryService<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看运行结果" tabindex="-1"><a class="header-anchor" href="#查看运行结果" aria-hidden="true">#</a> 查看运行结果</h3>`,2),M=n("code",null,"4.3",-1),U=n("code",null,"4.2-1",-1),N={href:"http://localhost:4211/weatherforecast",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"Saga-Wing.Demo_4.2.1",-1),q=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function B(D,E){const l=i("CodeTabs"),o=i("ExternalLinkIcon");return r(),k("div",null,[v,b,p(l,{id:"10",data:[{id:".NET CLI"},{id:"Package Manager"}]},{title0:a(({value:t,isActive:e})=>[s(".NET CLI")]),title1:a(({value:t,isActive:e})=>[s("Package Manager")]),tab0:a(({value:t,isActive:e})=>[g]),tab1:a(({value:t,isActive:e})=>[y]),_:1},8,["data"]),h,p(l,{id:"48",data:[{id:".NET Core 3.1"},{id:".NET 6.0"}]},{title0:a(({value:t,isActive:e})=>[s(".NET Core 3.1")]),title1:a(({value:t,isActive:e})=>[s(".NET 6.0")]),tab0:a(({value:t,isActive:e})=>[w]),tab1:a(({value:t,isActive:e})=>[f]),_:1},8,["data"]),S,n("p",null,[s("http接口，示例"),_,s("("),n("a",C,[s("点击查看完整示例代码"),p(o)]),s(")")]),R,n("p",null,[s("grpc接口，示例"),T,s("("),n("a",A,[s("点击查看完整示例代码"),p(o)]),s(")")]),x,n("p",null,[s("运行示例"),M,s("、"),U,s("，浏览器访问 "),n("a",N,[s("http://localhost:4211/weatherforecast"),p(o)]),s(" ，可以看到执行的事务"),W,s("，如下图：")]),q])}const I=u(m,[["render",B],["__file","saga-client.html.vue"]]);export{I as default};
