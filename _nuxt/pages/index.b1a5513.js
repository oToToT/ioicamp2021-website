(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{248:function(t,e,n){},251:function(t,e,n){"use strict";var c=n(248);n.n(c).a},252:function(t,e,n){"use strict";n.r(e);var c=n(0).a.extend({props:{document:{type:Object,default:{title:""}},date:{type:Boolean,default:!1}}}),r=(n(251),n(8)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-block"},[n("div",{staticClass:"section-header"},[n("h2",[n("font-awesome-icon",{staticClass:"title-icon",attrs:{icon:"terminal"}}),t._v(t._s(t.document.title))],1),t.date?n("label",[t._v(t._s(new Date(t.document.createdAt).toLocaleString("zh-TW")))]):t._e()]),n("nuxt-content",{attrs:{document:t.document}})],1)}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){},266:function(t,e,n){},279:function(t,e,n){"use strict";var c=n(265);n.n(c).a},280:function(t,e,n){"use strict";var c=n(266);n.n(c).a},285:function(t,e,n){"use strict";n.r(e);var c=n(0).a.extend({data:function(){return{nextStep:{link:"/signin/",text:"立即報名"}}}}),r=(n(280),n(8)),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[this._m(0),e("div",{staticClass:"inner"},[this._m(1),e("step-button",{staticStyle:{"font-size":"1.2em"},attrs:{href:this.nextStep.link}},[this._v(this._s(this.nextStep.text))])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inner"},[e("img",{staticClass:"maximg",attrs:{src:"/dbodkck4.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titles"},[e("h1",[this._v("No Bug "),e("wbr"),this._v("No Life")]),e("h2",[this._v("2021 程式解題競賽集訓營")]),e("h3",[this._v("「連便當工人都是國手的實力派營隊」")])])}],!1,null,"08ffe955",null);e.default=component.exports;installComponents(component,{StepButton:n(160).default})},299:function(t,e,n){"use strict";n.r(e);n(13);var c=n(2),r=n(0).a.extend({head:{title:"最新消息"},data:function(){return{articles:[]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("news").sortBy("prio","desc").sortBy("createdAt","desc").fetch();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),o=(n(279),n(8)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"banner"},[e("banner")],1),this._l(this.articles,(function(article){return e("nuxt-section-block",{key:article.id,attrs:{id:article.id,document:article,date:!0}})})),e("div",{staticClass:"cutter"})],2)}),[],!1,null,"6235956f",null);e.default=component.exports;installComponents(component,{Banner:n(285).default,NuxtSectionBlock:n(252).default})}}]);