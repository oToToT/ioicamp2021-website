(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{247:function(e,t,o){},249:function(e,t,o){"use strict";var n=o(247);o.n(n).a},250:function(e,t,o){"use strict";o.r(t);var n=o(0).a.extend({}),r=(o(249),o(8)),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"d4e4a3c2",null);t.default=component.exports},262:function(e,t,o){},276:function(e,t,o){"use strict";var n=o(262);o.n(n).a},295:function(e,t,o){"use strict";o.r(t);o(61),o(20),o(16),o(6),o(41),o(13);var n=o(2),r=o(34);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=o(0).a.extend({head:{title:"修改資料"},middleware:"auth",data:function(){return{userInfo:l({email:this.$auth.user.email},this.$auth.user.applyForm),popout:{msg:"",status:""}}},methods:{scrollToTop:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(scrollTo(0,e-e/5),requestAnimationFrame(this.scrollToTop))},updateInfo:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.popout.msg="儲存中...",e.popout.status="info",t.prev=2,t.next=5,e.$axios.$put("/api/users/apply-form",e.userInfo);case 5:return t.sent,e.popout.msg="成功紀錄了。",e.popout.status="success",e.scrollToTop(),t.next=11,e.$auth.fetchUser();case 11:t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),e.popout.msg="我們伺服器怪怪的，請跟我們聯絡 TAT",e.popout.status="error",e.scrollToTop();case 18:case"end":return t.stop()}}),t,null,[[2,13]])})))()}}}),f=(o(276),o(8)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("form-section",[""!==e.popout.msg?o("div",{staticClass:"message",class:e.popout.status,attrs:{id:"msg-popout"}},[e._v(e._s(e.popout.msg))]):e._e(),o("h1",[o("font-awesome-icon",{attrs:{icon:"chevron-right"}}),e._v(" 修改資料")],1),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signin-form"},on:{submit:function(t){return t.preventDefault(),e.updateInfo(t)}}},[o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:'["far", "envelope"]'}}),e._v(" 信箱")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.email,expression:"userInfo['email']"}],attrs:{type:"email",placeholder:"nobugnolife@gmail.com",disabled:""},domProps:{value:e.userInfo.email},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"email",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:["far","user"]}}),e._v(" 姓名")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.name,expression:"userInfo['name']"}],attrs:{type:"text",placeholder:"電人王"},domProps:{value:e.userInfo.name},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"name",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"venus-mars"}}),e._v(" 性別")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.gender,expression:"userInfo['gender']"}],attrs:{type:"text",placeholder:"男 / 女"},domProps:{value:e.userInfo.gender},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"gender",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"school"}}),e._v(" 學校")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.school,expression:"userInfo['school']"}],attrs:{type:"text",placeholder:"國立臺灣大學"},domProps:{value:e.userInfo.school},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"school",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"graduation-cap"}}),e._v(" 年級")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.grade,expression:"userInfo['grade']"}],attrs:{type:"text",placeholder:"高中三年級"},domProps:{value:e.userInfo.grade},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"grade",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"hourglass-half"}}),e._v(" 學程式的時間")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo["code-time"],expression:"userInfo['code-time']"}],attrs:{type:"text",placeholder:"5 年以上"},domProps:{value:e.userInfo["code-time"]},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"code-time",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"history"}}),e._v(" 接觸競賽的時間")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo["cp-time"],expression:"userInfo['cp-time']"}],attrs:{type:"text",placeholder:"1 年左右"},domProps:{value:e.userInfo["cp-time"]},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"cp-time",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"trophy"}}),e._v(" 最自豪的獎項")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.prize,expression:"userInfo['prize']"}],attrs:{type:"text",placeholder:"IOI 滿分金、IMO 滿分金"},domProps:{value:e.userInfo.prize},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"prize",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"list-ul"}}),e._v(" OJ IDs")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.oj,expression:"userInfo['oj']"}],attrs:{type:"text",placeholder:"Topcoder, Codeforces, Atcoder..."},domProps:{value:e.userInfo.oj},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"oj",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"align-left"}}),e._v(" 報名動機")],1),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.motivation,expression:"userInfo['motivation']"}],attrs:{placeholder:"我想學會寫程式跟大家一起PK"},domProps:{value:e.userInfo.motivation},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"motivation",t.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"book"}}),e._v(" 備註")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.comment,expression:"userInfo['comment']"}],attrs:{type:"text",placeholder:"我要睡電腦教室"},domProps:{value:e.userInfo.comment},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"comment",t.target.value)}}})]),o("div",{staticClass:"right"},[o("button",{staticClass:"submit",attrs:{id:"signin-btn"}},[e._v("儲存")])])])])])],1)}),[],!1,null,"005c4d79",null);t.default=component.exports;installComponents(component,{FormSection:o(250).default})}}]);