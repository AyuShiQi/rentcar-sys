"use strict";(self["webpackChunkrentcar_front"]=self["webpackChunkrentcar_front"]||[]).push([[520],{3520:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-view"},[e("div",{staticClass:"profile-view_info-part"},[e("h2",[t._v("用户名："+t._s(t.$store.state.userName))]),e("h2",[t._v("权限："+t._s(t.$store.state.permission))])]),t.$store.state.isAdmin?t._e():e("div",{staticClass:"profile-view_order-part"},[e("h2",[t._v("当前订单")]),e("table",{staticClass:"order-table"},[e("tr",[t._l(t.header,(function(s){return e("th",{key:s},[t._v(t._s(s))])})),e("th",[t._v("操作")])],2),t._l(t.infos,(function(s,n){return e("tr",{key:n},[t._l(s,(function(s,n){return e("td",{key:s+n},[t._v(t._s(s))])})),e("td",[e("a",{staticClass:"link-option",attrs:{href:"javascript:;"},on:{click:function(e){return t.pay(s.vehicleId,s.rents)}}},[t._v("支付")])])],2)}))],2)]),t.$store.state.isAdmin?e("div",{staticClass:"profile-view_sum-part"},[e("h2",[t._v("总订单数："+t._s(t.allCount)+"单")]),e("h2",[t._v("待支付订单数："+t._s(t.noPayCount)+"单")]),e("h2",[t._v("已完成订单数："+t._s(t.payedCount)+"单")]),e("h2",[t._v("总成交额："+t._s(t.allRent)+"元")])]):t._e()])},r=[],a=s(833),o={name:"ProfleView",data(){return{header:["车牌号","待支付金额"],infos:[["asidjwn",300]],allCount:0,noPayCount:0,payedCount:0,allRent:0}},methods:{pay(t,e){(0,a.wJ)(this.$store.state.userName,t,e).then((t=>{alert("支付成功"),this.getOrder()})).catch((t=>{console.log(t)}))},getOrder(){(0,a.co)(this.$store.state.userName).then((t=>{this.infos=t.infos})).catch((t=>{console.log(t)}))},getOrderInfos(){(0,a.MS)().then((t=>{this.allCount=t.allCount,this.noPayCount=t.noPayCount,this.payedCount=t.payedCount,this.allRent=t.allRent})).catch((t=>{console.log(t)}))}},mounted(){this.$store.state.isAdmin?this.getOrderInfos():this.getOrder()}},i=o,l=s(1001),u=(0,l.Z)(i,n,r,!1,null,null,null),h=u.exports}}]);
//# sourceMappingURL=520.62953485.js.map