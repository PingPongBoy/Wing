(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2250de"],{e382:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",[r("template",{slot:"header"},[r("div",[r("el-input",{staticClass:"search",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入姓名"},on:{change:e.search},model:{value:e.pageModel.data.userName,callback:function(t){e.$set(e.pageModel.data,"userName",t)},expression:"pageModel.data.userName"}}),r("el-input",{staticClass:"search",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入账号"},on:{change:e.search},model:{value:e.pageModel.data.userAccount,callback:function(t){e.$set(e.pageModel.data,"userAccount",t)},expression:"pageModel.data.userAccount"}}),r("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return t.preventDefault(),e.search(t)}}},[e._v("查询")]),r("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")])],1)]),r("div",{staticClass:"table-container"},[r("vxe-table",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{border:"",resizable:"",height:"100%",size:"medium",align:"center","highlight-hover-row":"","highlight-current-row":"","show-overflow":"","auto-resize":"","keep-source":"",stripe:"","edit-config":{trigger:"click",mode:"row",showStatus:!0},loading:e.loading,data:e.list.items,"mouse-config":{selected:!0}}},[r("vxe-column",{attrs:{field:"userAccount",title:"账号",sortable:""}}),r("vxe-column",{attrs:{field:"userName",title:"姓名",sortable:""}}),r("vxe-column",{attrs:{field:"creationTime",title:"创建时间",formatter:["formatDate","yyyy-MM-dd HH:mm:ss"],sortable:""}}),r("vxe-column",{attrs:{field:"createdName",title:"创建人",sortable:""}}),r("vxe-column",{attrs:{field:"enabled",title:"是否可用",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-switch",{attrs:{"active-value":"Y","inactive-value":"N"},model:{value:a.enabled,callback:function(t){e.$set(a,"enabled",t)},expression:"row.enabled"}})]}}])}),r("vxe-column",{attrs:{field:"phone",title:"联系方式",sortable:""}}),r("vxe-column",{attrs:{field:"remark",title:"备注",sortable:""}}),r("vxe-column",{attrs:{title:"操作",width:"300",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return t.preventDefault(),e.edit(a)}}},[e._v("编辑")]),r("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"success",size:"small"},on:{click:function(t){return t.preventDefault(),e.unlock(a)}}},[e._v("解锁")]),r("el-popconfirm",{attrs:{title:"确定要重置密码吗？"},on:{onConfirm:function(t){return e.reset(a)}}},[r("el-button",{staticStyle:{"margin-right":"10px"},attrs:{slot:"reference",size:"small",type:"warning"},slot:"reference"},[e._v("重置")])],1),r("el-popconfirm",{attrs:{title:"确定要删除吗？"},on:{onConfirm:function(t){return e.remove(a)}}},[r("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1),r("template",{slot:"footer"},[r("el-pagination",{attrs:{"current-page":e.pageModel.pageIndex,"page-size":e.pageModel.pageSize,"page-sizes":[15,25,35,45],layout:"total, sizes, prev, pager, next, jumper",total:e.list.totalCount},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1),r("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{"close-on-click-modal":!1,title:e.editTitle,width:"60%",visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t},open:e.handleEditDialogOpen}},[r("el-form",{ref:"editForm",attrs:{"label-width":"120px",model:e.editForm,rules:e.validRules,"show-message":!0}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"账号",prop:"userAccount"}},[r("el-input",{model:{value:e.editForm.userAccount,callback:function(t){e.$set(e.editForm,"userAccount",t)},expression:"editForm.userAccount"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[r("el-input",{model:{value:e.editForm.userName,callback:function(t){e.$set(e.editForm,"userName",t)},expression:"editForm.userName"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"部门",prop:"dept"}},[r("el-input",{model:{value:e.editForm.dept,callback:function(t){e.$set(e.editForm,"dept",t)},expression:"editForm.dept"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"岗位",prop:"station"}},[r("el-input",{model:{value:e.editForm.station,callback:function(t){e.$set(e.editForm,"station",t)},expression:"editForm.station"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[r("el-input",{model:{value:e.editForm.phone,callback:function(t){e.$set(e.editForm,"phone",t)},expression:"editForm.phone"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否可用",prop:"enabled"}},[r("el-switch",{attrs:{"active-value":"Y","inactive-value":"N"},model:{value:e.editForm.enabled,callback:function(t){e.$set(e.editForm,"enabled",t)},expression:"editForm.enabled"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{model:{value:e.editForm.remark,callback:function(t){e.$set(e.editForm,"remark",t)},expression:"editForm.remark"}})],1)],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.saveLoading},on:{click:e.save}},[e._v("保存")])],1)],1)],2)},n=[],i=(r("b0c0"),r("d3b7"),r("ac1f"),r("841c"),r("96cf"),r("1da1")),s={name:"user",data:function(){return{loading:!1,list:[],pageModel:{pageSize:15,pageIndex:1,data:{userName:"",userAccount:""}},validRules:{userAccount:[{required:!0,message:"账号必填",trigger:"blur"}],userName:[{required:!0,message:"姓名必填",trigger:"blur"}]},saveLoading:!1,editVisible:!1,editForm:{enabled:"Y"},editTitle:""}},created:function(){this.search()},methods:{toDetail:function(e){var t=this;this.$router.push({path:"/service/detail"});var r=setTimeout((function(){t.Bus.emit("serviceNameToDetail",e.name),clearTimeout(r)}))},search:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.SYS_USER_LIST(e.pageModel);case 3:e.list=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},sizeChange:function(e){this.pageModel.pageSize=e,this.search()},currentChange:function(e){this.pageModel.pageIndex=e,this.search()},add:function(){this.editTitle="新增",this.editForm={enabled:"Y"},this.editVisible=!0},edit:function(e){this.editTitle="编辑",this.editForm=Object.assign({},e),this.editVisible=!0},unlock:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$api.SYS_USER_UNLOCKED(e.id);case 2:a=r.sent,a>0?t.$message({type:"success",message:"解锁成功！"}):t.$message.error("解锁失败，请稍后重试！");case 4:case"end":return r.stop()}}),r)})))()},remove:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$api.SYS_USER_DELETE(e.id);case 2:return a=r.sent,a>0?t.$message({type:"success",message:"删除成功！"}):t.$message.error("删除失败，请稍后重试！"),r.next=6,t.search();case 6:case"end":return r.stop()}}),r)})))()},reset:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$api.SYS_USER_RESET_PASSWORD(e.id);case 2:a=r.sent,a>0?t.$message({type:"success",message:"密码重置成功！"}):t.$message.error("密码重置失败，请稍后重试！");case 4:case"end":return r.stop()}}),r)})))()},handleEditDialogOpen:function(){var e=this;this.$nextTick((function(){e.$refs.editForm&&e.$refs.editForm.clearValidate()}))},save:function(){var e=this;this.$refs.editForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:if(e.saveLoading=!0,a=0,"新增"!==e.editTitle){t.next=10;break}return t.next=7,e.$api.SYS_USER_ADD(e.editForm).finally((function(t){e.saveLoading=!1}));case 7:a=t.sent,t.next=14;break;case 10:return t.next=12,e.$api.SYS_USER_UPDATE(e.editForm).finally((function(t){e.saveLoading=!1}));case 12:a=t.sent,e.editVisible=!1;case 14:if(!(a>0)){t.next=18;break}return e.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3}),t.next=18,e.search();case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},o=s,l=r("2877"),c=Object(l["a"])(o,a,n,!1,null,"1915721d",null);t["default"]=c.exports}}]);