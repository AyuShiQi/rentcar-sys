"use strict";(self["webpackChunkrentcar_front"]=self["webpackChunkrentcar_front"]||[]).push([[818],{818:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=function(){var e=this,t=e._self._c;return e.$store.state.isLogin?e.$store.state.isAdmin?t("AdminHome"):t("UserHome"):t("div",[e._v("请登录！")])},s=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"admin-home"},[t("ChooseBox",[t("button",{staticClass:"choose-btn red-border-btn",on:{click:e.openCard}},[e._v("添加")]),t("QueryBox",{ref:"queryBox",attrs:{changeHeaderInfo:e.getHeaderInfo,changeInfos:e.getInfos}})],1),t("TableContent",{attrs:{header:e.headerInfo,info:e.infos,deleteCar:e.myDeleteCar,updateCar:e.myUpdateCar,rentCar:null}}),t("InfoCard",{attrs:{active:e.active,changeInfo:e.addCar,disactive:e.disactive}},[t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"idAdd"}},[e._v("车牌号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addVehicleId,expression:"addVehicleId"}],staticClass:"change-input",attrs:{type:"text",id:"idAdd"},domProps:{value:e.addVehicleId},on:{input:function(t){t.target.composing||(e.addVehicleId=t.target.value)}}})]),t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"typeAdd"}},[e._v("类型")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.addType,expression:"addType"}],staticClass:"change-input",attrs:{type:"text",id:"typeAdd"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.addType=t.target.multiple?a:a[0]}}},e._l(e.types,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})),0)]),t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"brandAdd"}},[e._v("品牌")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addBrand,expression:"addBrand"}],staticClass:"change-input",attrs:{type:"text",id:"brandAdd"},domProps:{value:e.addBrand},on:{input:function(t){t.target.composing||(e.addBrand=t.target.value)}}})]),t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"modelAdd"}},[e._v("型号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addModel,expression:"addModel"}],staticClass:"change-input",attrs:{type:"text",id:"modelAdd"},domProps:{value:e.addModel},on:{input:function(t){t.target.composing||(e.addModel=t.target.value)}}})]),t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"rentAdd"}},[e._v("日租金")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.addPerRent,expression:"addPerRent",modifiers:{number:!0}}],staticClass:"change-input",attrs:{type:"text",id:"rentAdd"},domProps:{value:e.addPerRent},on:{input:function(t){t.target.composing||(e.addPerRent=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])],1)},o=[],d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"choose-box"},[e._t("default")],2)},r=[],l={name:"ChooseBox"},c=l,h=a(1001),u=(0,h.Z)(c,d,r,!1,null,null,null),v=u.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"query-content"},[t("select",{ref:"typeSelected",staticClass:"select-box blue-btn",attrs:{name:"type",id:"carType"},on:{change:e.typeSelect}},[t("option",{attrs:{disabled:"",hidden:"",selected:""}},[e._v("车辆类型")]),e._l(e.types,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])}))],2),t("select",{directives:[{name:"show",rawName:"v-show",value:e.brandOk,expression:"brandOk"}],ref:"brandSelected",staticClass:"select-box blue-btn",attrs:{name:"brand",id:"brand"},on:{change:e.brandSelect}},[t("option",{attrs:{disabled:"",hidden:"",selected:""}},[e._v("品牌")]),e._l(e.brands,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])}))],2),t("select",{directives:[{name:"show",rawName:"v-show",value:e.modelOk,expression:"modelOk"}],ref:"modelSelected",staticClass:"select-box blue-btn",attrs:{name:"model",id:"model"},on:{change:e.modelSelect}},[t("option",{attrs:{disabled:"",hidden:"",selected:""}},[e._v("型号")]),e._l(e.models,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])}))],2),t("input",{ref:"vehicleInput",staticClass:"blue-btn query-input",attrs:{type:"text",id:"queryInput"}}),t("button",{staticClass:"red-btn id-select-btn",on:{click:e.vehicleIdSelect}},[e._v("车牌号查询")])])},f=[],g=a(833),m={name:"QueryBox",props:["changeHeaderInfo","changeInfos"],data(){return{brandOk:!1,modelOk:!1,types:["轿车","客车","货车"],brands:[],models:[],type:"",brand:"",model:"",vehicleID:""}},methods:{defaultQuery(){const e={};""!=this.vehicleID&&(e.vehicleID=this.vehicleID),""!=this.type&&(e.type=this.type),""!=this.model&&(e.model=this.model),""!=this.brand&&(e.brand=this.brand),console.log(e),(0,g.oX)(e).then((e=>{console.log(e.infos),this.changeInfos(e.infos)})).catch((e=>{console.log(e)}))},typeSelect(e){this.type=e.target.value,this.defaultBrand(),this.defaultModel(),(0,g.ts)(this.type).then((e=>{this.brands=e.brands,this.changeInfos(e.infos),this.brandOk=!0})).catch((e=>{console.log(e)}))},brandSelect(e){this.brand=e.target.value,this.defaultModel(),(0,g.CU)(this.type,this.brand).then((e=>{this.models=e.models,this.changeInfos(e.infos),this.modelOk=!0})).catch((e=>{console.log(e)}))},modelSelect(e){console.log(e.target.value),this.model=e.target.value,(0,g.RA)(this.type,this.brand,this.model).then((e=>{this.changeInfos(e.infos)})).catch((e=>{console.log(e)}))},vehicleIdSelect(){""!==this.$refs.vehicleInput.value&&(this.vehicleID=this.$refs.vehicleInput.value,(0,g.mN)(this.vehicleID).then((e=>{this.changeInfos(e.infos),this.brandOk=this.modelOk=!1,this.defaultType(),this.vehicleID=""})).catch((e=>{console.log(e)})))},defaultType(){this.type="";let e=this.$refs.typeSelected.options;for(let t=0;t<e.length;t++)e[t].selected=!1;e[0].selected=!0},defaultBrand(){this.brand="",this.brands=[];let e=this.$refs.brandSelected.options;for(let t=0;t<e.length;t++)e[t].selected=!1;e[0].selected=!0},defaultModel(){this.model="",this.models=[];let e=this.$refs.modelSelected.options;for(let t=0;t<e.length;t++)e[t].selected=!1;e[0].selected=!0}}},C=m,b=(0,h.Z)(C,p,f,!1,null,null,null),y=b.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-content"},[t("table",{staticClass:"car-table"},[t("tr",[e._l(e.header,(function(a){return t("th",{key:a},[e._v(e._s(a))])})),t("th",[e._v("操作")])],2),e._l(e.info,(function(a){return t("tr",{key:a.vehicleId},[e._l(a,(function(a,n){return t("td",{key:a+n},[e._v(e._s(a))])})),t("td",[e.$store.state.isAdmin?t("a",{staticClass:"link-option",attrs:{href:"javascript:;"},on:{click:function(t){return e.updateCars(a)}}},[e._v("修改")]):e._e(),e.$store.state.isAdmin?t("a",{staticClass:"link-option",attrs:{href:"javascript:;"},on:{click:function(t){return e.deleteCars(a.vehicleId)}}},[e._v("删除")]):e._e(),e.$store.state.isAdmin?e._e():t("a",{staticClass:"link-option",attrs:{href:"javascript:;"},on:{click:function(t){return e.rentCars(a.vehicleId)}}},[e._v("租用")])])],2)}))],2),t("InfoCard",{attrs:{active:e.active,changeInfo:e.changeInfos,disactive:e.disactive}},[t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"brandChange"}},[e._v("品牌")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeBrand,expression:"changeBrand"}],staticClass:"change-input",attrs:{type:"text",id:"brandChange"},domProps:{value:e.changeBrand},on:{input:function(t){t.target.composing||(e.changeBrand=t.target.value)}}})]),t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"modelChange"}},[e._v("型号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeModel,expression:"changeModel"}],staticClass:"change-input",attrs:{type:"text",id:"modelChange"},domProps:{value:e.changeModel},on:{input:function(t){t.target.composing||(e.changeModel=t.target.value)}}})]),t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"rentChange"}},[e._v("日租金")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.changePerRent,expression:"changePerRent",modifiers:{number:!0}}],staticClass:"change-input",attrs:{type:"text",id:"rentChange"},domProps:{value:e.changePerRent},on:{input:function(t){t.target.composing||(e.changePerRent=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])],1)},I=[],x=function(){var e=this,t=e._self._c;return e.active?t("div",{staticClass:"info-card-content"},[t("div",{staticClass:"info-card"},[t("div",{staticClass:"info-card_header",on:{click:e.dis}},[t("span",{staticClass:"x-button"},[e._v("关闭")])]),e._t("default"),t("div",{staticClass:"ok-button-content"},[t("button",{staticClass:"red-border-btn ok-button",on:{click:e.changeInfos}},[e._v("确认")])])],2)]):e._e()},k=[],B={name:"InfoCard",props:["changeInfo","active","disactive"],methods:{changeInfos(){this.changeInfo(),this.dis()},dis(){this.disactive()}}},P=B,R=(0,h.Z)(P,x,k,!1,null,null,null),A=R.exports,w={name:"TableContent",components:{InfoCard:A},props:["header","info","updateCar","deleteCar","rentCar"],data(){return{active:!1,changeBrand:"",changeModel:"",changeType:"",changePerRent:0}},methods:{rentCars(e){this.rentCar(e)},deleteCars(e){this.deleteCar(e)},updateCars(e){console.log(e),this.active=!0,this.changeBrand=e.brand,this.changeModel=e.model,this.changePerRent=e.perRent,this.changevehicleID=e.vehicleId,this.changeType=e.type},changeInfos(){this.updateCar(this.changevehicleID,this.changeType,this.changeBrand,this.changeModel,parseInt(this.changePerRent)),this.changeBrand="",this.changeModel="",this.changePerRent=0},disactive(){this.active=!1}}},M=w,T=(0,h.Z)(M,_,I,!1,null,null,null),$=T.exports,H={name:"AdminHome",components:{ChooseBox:v,QueryBox:y,TableContent:$,InfoCard:A},data(){return{headerInfo:["车牌号","类型","品牌","型号","日租金"],types:["轿车","货车","客车"],infos:[],active:!1,addVehicleId:"",addType:"",addBrand:"",addModel:"",addPerRent:999}},methods:{getHeaderInfo(e){this.headerInfo=e},getInfos(e){this.infos=e},disactive(){this.active=!1},openCard(){this.active=!0},addCar(){console.log(this.addType),(0,g.y0)(this.addVehicleId,this.addType,this.addBrand,this.addModel,this.addPerRent).then((e=>{alert("添加成功"),this.$refs.queryBox.defaultQuery(),this.active=!1})).catch((e=>{console.log(e),alert("添加失败,该车牌号或已存在！")})),this.addVehicleId="",this.addType="",this.addBrand="",this.addModel="",this.addPerRent=999},myDeleteCar(e){(0,g.tD)(e).then((e=>{alert("删除成功"),this.$refs.queryBox.defaultQuery()})).catch((e=>{alert("删除失败")}))},myUpdateCar(e,t,a,n,s){(0,g.Bo)(e,t,a,n,s).then((e=>{alert("修改成功"),this.active=!1,this.$refs.queryBox.defaultQuery()})).catch((e=>{console.log(e),alert("修改失败")}))},disactive(){this.active=!1}},mounted(){}},S=H,N=(0,h.Z)(S,i,o,!1,null,null,null),D=N.exports,O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-home"},[t("ChooseBox",[t("QueryBox",{ref:"queryBox",attrs:{changeHeaderInfo:e.getHeaderInfo,changeInfos:e.getInfos}})],1),t("TableContent",{attrs:{header:e.headerInfo,info:e.infos,rentCar:e.openCard,deleteCar:null,updateCar:null}}),t("RentCard",{attrs:{active:e.active,changeInfo:e.rentCar,disactive:e.disactive}},[t("div",{staticClass:"change-input-content"},[t("label",{staticClass:"change-title",attrs:{for:"carRent"}},[e._v("请输入租借天数")])]),t("div",{staticClass:"change-input-content"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.days,expression:"days",modifiers:{number:!0}}],staticClass:"change-input",attrs:{type:"text",id:"carRent"},domProps:{value:e.days},on:{blur:[e.check,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.days=e._n(t.target.value))}}})])])],1)},Q=[],U=function(){var e=this,t=e._self._c;return e.active?t("div",{staticClass:"rent-card-content"},[t("div",{staticClass:"rent-card"},[t("div",{staticClass:"rent-card_header",on:{click:e.dis}},[t("span",{staticClass:"x-button"},[e._v("关闭")])]),e._t("default"),t("div",{staticClass:"ok-button-content"},[t("button",{staticClass:"red-border-btn ok-button",on:{click:e.changeInfos}},[e._v("确认")])])],2)]):e._e()},q=[],V={name:"RentCard",props:["changeInfo","active","disactive"],methods:{changeInfos(){this.changeInfo()},dis(){this.disactive()}}},Z=V,j=(0,h.Z)(Z,U,q,!1,null,null,null),L=j.exports,X={name:"UserHome",components:{ChooseBox:v,QueryBox:y,TableContent:$,RentCard:L},data(){return{headerInfo:["车牌号","类型","品牌","型号","日租金"],infos:[],active:!1,vehicleId:"",days:0}},methods:{getHeaderInfo(e){this.headerInfo=e},getInfos(e){this.infos=e},disactive(){this.active=!1},openCard(e){this.active=!0,this.vehicleId=e},rentCar(){this.days<=0?alert("租用天数非法！请重新输入！"):this.days>730?alert("租车天数不可超过2年，请重新输入！"):(0,g.Yh)(this.vehicleId,this.days).then((e=>{alert("你需要支付的费用为:"+e.rent+",已加入订单，待支付"),this.active=!1})).catch((e=>{console.log(e),alert("租借失败")}))},check(){(!this.days instanceof Number||this.days<0)&&(this.days=0)}},mounted(){}},Y=X,z=(0,h.Z)(Y,O,Q,!1,null,null,null),E=z.exports,F={name:"HomeView",components:{AdminHome:D,UserHome:E}},G=F,J=(0,h.Z)(G,n,s,!1,null,null,null),K=J.exports}}]);
//# sourceMappingURL=818.62e7b218.js.map