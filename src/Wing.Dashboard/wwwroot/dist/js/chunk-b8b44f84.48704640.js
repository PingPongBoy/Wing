(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8b44f84"],{"45c0":function(e,t,a){"use strict";var r=a("bc6a"),s=a.n(r);s.a},5905:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("div",[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入服务名称"},on:{change:e.search},model:{value:e.pageModel.data.serviceName,callback:function(t){e.$set(e.pageModel.data,"serviceName",t)},expression:"pageModel.data.serviceName"}}),a("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return t.preventDefault(),e.search(t)}}},[e._v("查询")])],1)]),a("div",{staticClass:"table-container"},[a("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"",height:"100%",size:"medium",align:"center","highlight-hover-row":"","highlight-current-row":"","show-overflow":"","auto-resize":"","keep-source":"",stripe:"","edit-config":{trigger:"click",mode:"row",showStatus:!0},loading:e.loading,data:e.services.items,"mouse-config":{selected:!0}}},[a("vxe-column",{attrs:{field:"serviceName",title:"服务名称",width:"200",sortable:""}}),a("vxe-column",{attrs:{field:"requestUrl",title:"请求地址",sortable:""}}),a("vxe-column",{attrs:{field:"downstreamUrl",title:"下游地址",sortable:""}}),a("vxe-column",{attrs:{field:"gateWayServerIp",title:"网关服务器IP",sortable:""}}),a("vxe-column",{attrs:{field:"clientIp",title:"客户端请求IP",sortable:""}}),a("vxe-column",{attrs:{field:"serviceAddress",title:"服务地址",sortable:""}}),a("vxe-column",{attrs:{field:"requestTime",title:"请求时间",sortable:""}}),a("vxe-column",{attrs:{field:"responseTime",title:"响应时间",sortable:""}}),a("vxe-column",{attrs:{field:"requestMethod",title:"请求方式",sortable:""}}),a("vxe-column",{attrs:{field:"requestValue",title:"请求内容",sortable:""}}),a("vxe-column",{attrs:{field:"responseValue",title:"响应内容",sortable:""}}),a("vxe-column",{attrs:{field:"statusCode",title:"状态码",sortable:""}}),a("vxe-column",{attrs:{field:"policy",title:"网关策略",sortable:""}}),a("vxe-column",{attrs:{field:"authKey",title:"简单令牌",sortable:""}}),a("vxe-column",{attrs:{field:"token",title:"Jwt令牌",sortable:""}})],1)],1),a("template",{slot:"footer"},[a("el-pagination",{attrs:{"current-page":e.pageModel.pageSize,"page-size":e.pageModel.pageIndex,"page-sizes":[15,25,35,45],layout:"total, sizes, prev, pager, next, jumper",total:e.services.totalCount},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],2)},s=[],l=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),i={name:"gateWayLog",data:function(){return{loading:!1,services:[],pageModel:{pageSize:15,pageIndex:1,data:{serviceName:"",downstreamUrl:""}}}},created:function(){this.search()},methods:{search:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.LOG_LIST(e.pageModel);case 3:e.services=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},sizeChange:function(e){this.pageModel.pageSize=e,this.search()},currentChange:function(e){this.pageModel.pageIndex=e,this.search()}}},n=i,o=(a("45c0"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,"66b050a4",null);t["default"]=c.exports},bc6a:function(e,t,a){}}]);