(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc506b80"],{d6ec:function(e,t,a){},ea62:function(e,t,a){"use strict";var i=a("d6ec"),r=a.n(i);r.a},efaa:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("div",[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入服务名称"},on:{change:e.search},model:{value:e.pageModel.data,callback:function(t){e.$set(e.pageModel,"data",t)},expression:"pageModel.data"}}),a("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return t.preventDefault(),e.search(t)}}},[e._v("查询")])],1)]),a("div",{staticClass:"table-container"},[a("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"",height:"100%",size:"medium",align:"center","highlight-hover-row":"","highlight-current-row":"","show-overflow":"","auto-resize":"","keep-source":"",stripe:"","edit-config":{trigger:"click",mode:"row",showStatus:!0},loading:e.loading,data:e.services.items,"mouse-config":{selected:!0}}},[a("vxe-column",{attrs:{field:"name",title:"服务名称",width:"200",sortable:""}}),a("vxe-column",{attrs:{field:"total",title:"服务节点总数",sortable:""}}),a("vxe-column",{attrs:{field:"healthyTotal",title:"健康节点总数",sortable:""}}),a("vxe-column",{attrs:{field:"healthyLv",title:"健康率(%)",sortable:""}}),a("vxe-column",{attrs:{field:"criticalTotal",title:"死亡节点总数",sortable:""}}),a("vxe-column",{attrs:{field:"criticalLv",title:"死亡率(%)",sortable:""}}),a("vxe-column",{attrs:{field:"warningTotal",title:"警告节点总数",sortable:""}}),a("vxe-column",{attrs:{field:"warningLv",title:"警告率(%)",sortable:""}}),a("vxe-column",{attrs:{field:"maintenanceTotal",title:"维护节点总数",sortable:""}}),a("vxe-column",{attrs:{field:"maintenanceLv",title:"维护率(%)",sortable:""}}),a("vxe-column",{attrs:{title:"操作",width:"150",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.toDetail(i)}}},[e._v("查看明细")])]}}])})],1)],1),a("template",{slot:"footer"},[a("el-pagination",{attrs:{"current-page":e.pageModel.pageSize,"page-size":e.pageModel.pageIndex,"page-sizes":[15,25,35,45],layout:"total, sizes, prev, pager, next, jumper",total:e.services.totalCount},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],2)},r=[],n=(a("b0c0"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),l={name:"service-list",data:function(){return{loading:!1,services:[],pageModel:{pageSize:15,pageIndex:1,data:""}}},created:function(){this.search()},methods:{toDetail:function(e){var t=this;this.$router.push({path:"/service/detail"});var a=setTimeout((function(){t.Bus.emit("serviceNameToDetail",e.name),clearTimeout(a)}))},search:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.SERVICE(e.pageModel);case 3:e.services=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},sizeChange:function(e){this.pageModel.pageSize=e,this.search()},currentChange:function(e){this.pageModel.pageIndex=e,this.search()}}},o=l,s=(a("ea62"),a("2877")),c=Object(s["a"])(o,i,r,!1,null,"78173868",null);t["default"]=c.exports}}]);