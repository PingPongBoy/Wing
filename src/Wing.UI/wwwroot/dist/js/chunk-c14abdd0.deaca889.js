(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c14abdd0"],{"56c9":function(e,t,a){},"9c76":function(e,t,a){"use strict";var i=a("56c9"),r=a.n(i);r.a},b11a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("div",[a("el-input",{staticClass:"search",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入服务名称"},on:{change:e.search},model:{value:e.pageModel.data.serviceName,callback:function(t){e.$set(e.pageModel.data,"serviceName",t)},expression:"pageModel.data.serviceName"}}),a("el-input",{staticClass:"search",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入请求地址"},on:{change:e.search},model:{value:e.pageModel.data.requestUrl,callback:function(t){e.$set(e.pageModel.data,"requestUrl",t)},expression:"pageModel.data.requestUrl"}}),a("el-date-picker",{staticClass:"search",attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"请求时间","end-placeholder":"请求时间"},on:{change:e.search},model:{value:e.requestTime,callback:function(t){e.requestTime=t},expression:"requestTime"}}),a("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return t.preventDefault(),e.search(t)}}},[e._v("查询 ")])],1)]),a("div",{staticClass:"table-container"},[a("vxe-table",{ref:"httpTable",staticClass:"mytable-scrollbar",attrs:{border:"",resizable:"",height:"100%",size:"medium",align:"center","highlight-hover-row":"","highlight-current-row":"","show-overflow":"","auto-resize":"","keep-source":"",stripe:"","edit-config":{trigger:"click",mode:"row",showStatus:!0},loading:e.loading,data:e.result.items,"mouse-config":{selected:!0}}},[a("vxe-column",{attrs:{field:"serviceName",title:"服务名称",fixed:"left",width:"200",sortable:""}}),a("vxe-column",{attrs:{field:"requestUrl",title:"请求地址",fixed:"left",align:"left",width:"400",sortable:""}}),a("vxe-column",{attrs:{field:"downstreamUrl",title:"下游地址",width:"150",sortable:""}}),a("vxe-column",{attrs:{field:"gateWayServerIp",title:"网关服务器IP",width:"150",sortable:""}}),a("vxe-column",{attrs:{field:"clientIp",title:"客户端请求IP",width:"150",sortable:""}}),a("vxe-column",{attrs:{field:"serviceAddress",title:"服务地址",width:"200",sortable:""}}),a("vxe-column",{attrs:{field:"requestTime",title:"请求时间",width:"200",formatter:["formatDate","yyyy-MM-dd HH:mm:ss"],sortable:""}}),a("vxe-column",{attrs:{field:"responseTime",title:"响应时间",width:"200",formatter:["formatDate","yyyy-MM-dd HH:mm:ss"],sortable:""}}),a("vxe-column",{attrs:{field:"usedMillSeconds",title:"请求耗时(毫秒)",width:"150",sortable:""}}),a("vxe-column",{attrs:{field:"requestMethod",title:"请求方式",width:"120",sortable:""}}),a("vxe-column",{attrs:{field:"requestValue",title:"请求内容",width:"300"}}),a("vxe-column",{attrs:{field:"responseValue",title:"响应内容",width:"300"}}),a("vxe-column",{attrs:{field:"statusCode",title:"状态码",width:"100",sortable:""}}),a("vxe-column",{attrs:{field:"policy",title:"网关策略",width:"300"}}),a("vxe-column",{attrs:{field:"authKey",title:"简单令牌",width:"300"}}),a("vxe-column",{attrs:{field:"token",title:"JWT令牌",width:"300"}}),a("vxe-column",{attrs:{field:"exception",title:"异常说明",width:"300"}})],1)],1),a("template",{slot:"footer"},[a("el-pagination",{attrs:{"current-page":e.pageModel.pageIndex,"page-size":e.pageModel.pageSize,"page-sizes":[15,25,35,45],layout:"total, sizes, prev, pager, next, jumper",total:e.result.totalCount},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],2)},r=[],l=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),s={name:"gateway",data:function(){return{loading:!1,result:[],requestTime:"",pageModel:{pageSize:15,pageIndex:1,data:{serviceName:"",requestUrl:"",requestTime:[]}},pickerOptions:{shortcuts:[{text:"最近一小时",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-36e5),e.$emit("pick",[a,t])}},{text:"最近一天",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-864e5),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}}]}}},created:function(){this.search()},methods:{search:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.requestTime?e.pageModel.data.requestTime=e.requestTime:e.pageModel.data.requestTime=[],t.next=4,e.$api.GATEWAY_LIST(e.pageModel);case 4:e.result=t.sent,e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},sizeChange:function(e){this.pageModel.pageSize=e,this.search()},currentChange:function(e){this.pageModel.pageIndex=e,this.search()}}},n=s,o=(a("9c76"),a("2877")),c=Object(o["a"])(n,i,r,!1,null,"50963705",null);t["default"]=c.exports}}]);