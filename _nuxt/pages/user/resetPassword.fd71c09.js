(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{247:function(t,e,o){},249:function(t,e,o){"use strict";var r=o(247);o.n(r).a},250:function(t,e,o){"use strict";o.r(e);var r=o(0).a.extend({}),n=(o(249),o(8)),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"6f152aa2",null);e.default=component.exports},264:function(t,e,o){},278:function(t,e,o){"use strict";var r=o(264);o.n(r).a},297:function(t,e,o){"use strict";o.r(e);o(13);var r=o(2),n=o(0).a.extend({head:{title:"變更密碼"},data:function(){return{token:"",checkPassword:"",password:"",popout:{msg:"",status:""}}},mounted:function(){this.$route.query&&this.$route.query.token?this.token=this.$route.query.token:this.$router.back()},computed:{samePassword:function(){return this.password===this.checkPassword}},methods:{scrollToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(scrollTo(0,t-t/5),requestAnimationFrame(this.scrollToTop))},changePassword:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.samePassword){e.next=5;break}return t.popout.msg="請確認密碼是否相同呦~",t.popout.status="error",t.scrollToTop(),e.abrupt("return");case 5:return t.popout.msg="變更中...",t.popout.status="info",t.scrollToTop(),e.prev=8,e.next=11,t.$axios.post("/api/password-reset",{"new-password":t.password,token:t.token});case 11:e.sent,t.popout.msg="成功變更!",t.popout.status="success",e.next=20;break;case 16:e.prev=16,e.t0=e.catch(8),t.popout.status="error",e.t0.response&&e.t0.response.data?"Token expired"===e.t0.response.data.error?t.popout.msg="太晚打開信箱囉，請重新申請忘記密碼":t.popout.msg="不知道發生什麼事了，可以聯絡我們嗎?":t.popout.msg="好像壞掉了，請跟我們聯絡 Q_Q";case 20:case"end":return e.stop()}}),e,null,[[8,16]])})))()}}}),c=(o(278),o(8)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form-section",[""!==t.popout.msg?o("div",{staticClass:"message",class:t.popout.status,attrs:{id:"msg-popout"}},[t._v(t._s(t.popout.msg))]):t._e(),o("h1",[o("font-awesome-icon",{attrs:{icon:"chevron-right"}}),t._v(" 變更密碼")],1),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signin-form"},on:{submit:function(e){return e.preventDefault(),t.changePassword(e)}}},[o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"unlock"}}),t._v(" 新密碼")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"new password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("label",{staticClass:"input",class:{error:!t.samePassword}},[o("span",[o("font-awesome-icon",{attrs:{icon:"unlock-alt"}}),t._v(" 確認新密碼")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.checkPassword,expression:"checkPassword"}],attrs:{type:"password",placeholder:"new password"},domProps:{value:t.checkPassword},on:{input:function(e){e.target.composing||(t.checkPassword=e.target.value)}}})]),o("div",{staticClass:"right"},[o("button",{staticClass:"submit",attrs:{id:"signin-btn",type:"submit"}},[t._v("變更")])])])])])],1)}),[],!1,null,"11dcaef8",null);e.default=component.exports;installComponents(component,{FormSection:o(250).default})}}]);