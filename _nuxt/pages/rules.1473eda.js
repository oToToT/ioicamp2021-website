(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{237:function(t,n,o){var content=o(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("adab124c",content,!0,{sourceMap:!1})},242:function(t,n,o){"use strict";var e=o(237);o.n(e).a},243:function(t,n,o){(n=o(31)(!1)).push([t.i,'@font-face{font-family:"Huninn";font-style:normal;font-display:swap;src:url(/jf-openhuninn-1.1.woff2) format("woff2"),url(/jf-openhuninn-1.1.woff) format("woff"),url(/jf-openhuninn-1.1.ttf) format("truetype")}*{margin:0;font-family:"Huninn","Noto Sans TC",sans-serif}.fa,.far,.fas{font-family:"Font Awesome 5 Free"}.section-block{margin-bottom:30px!important}.section-block a{color:#db6d42;text-decoration:none;transition:.3s}.section-block a:visited{color:#db6d42}.section-block a:hover{color:red}.section-block h2{font-family:"Noto Serif TC",serif;position:relative;z-index:1;font-weight:900;padding:5px 15px;color:#ffca34;background:#222;box-shadow:0 8px 6px -6px rgba(0,0,0,.8)}.section-block h2:before{color:#fff;content:"\\f120";font-family:"Font Awesome 5 Free";font-weight:600;margin-right:10px!important}.section-block .nuxt-content{padding:15px 20px 25px;margin:0 10px!important;background:#d9d9d9}.section-block .nuxt-content p{font-weight:100;padding:8px 0}.section-block .nuxt-content p:before{content:"\\f105";font-family:"Font Awesome 5 Free";font-weight:900;margin-right:5px!important}.section-block .nuxt-content p em,.section-block .nuxt-content p strong{font-weight:900;text-decoration:underline;font-style:normal}.section-block .nuxt-content p ins{text-decoration:none;color:#db6d42;font-weight:900}',""]),t.exports=n},245:function(t,n,o){var content=o(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("fcd638b6",content,!0,{sourceMap:!1})},249:function(t,n,o){"use strict";o.r(n);var e=o(0).a.extend({props:{document:{type:Object,default:{title:""}}}}),r=(o(242),o(7)),component=Object(r.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"section-block"},[n("h2",[this._v(this._s(this.document.title))]),n("nuxt-content",{attrs:{document:this.document}})],1)}),[],!1,null,null,null);n.default=component.exports},254:function(t,n,o){"use strict";var e=o(245);o.n(e).a},255:function(t,n,o){(n=o(31)(!1)).push([t.i,'@font-face{font-family:"Huninn";font-style:normal;font-display:swap;src:url(/jf-openhuninn-1.1.woff2) format("woff2"),url(/jf-openhuninn-1.1.woff) format("woff"),url(/jf-openhuninn-1.1.ttf) format("truetype")}*[data-v-544df513]{margin:0;font-family:"Huninn","Noto Sans TC",sans-serif}.fa[data-v-544df513],.far[data-v-544df513],.fas[data-v-544df513]{font-family:"Font Awesome 5 Free"}.container[data-v-544df513]{padding-top:120px;padding-left:10vw;padding-right:10vw}@media (max-width:960px){.container[data-v-544df513]{padding-top:80px;padding-left:5vw;padding-right:5vw}}.container .cutter[data-v-544df513]{height:1px}',""]),t.exports=n},270:function(t,n,o){"use strict";o.r(n);o(17);var e=o(2),r=o(0).a.extend({head:{title:"IOICcamp 2021 - 活動簡章",meta:[{hid:"description",name:"description",content:"Home page description"}]},data:function(){return{articles:[]}},fetch:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("rules").sortBy("slug","asc").fetch();case 2:t.articles=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}),c=(o(254),o(7)),component=Object(c.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[this._l(this.articles,(function(article){return n("nuxt-section-block",{key:article.id,attrs:{id:article.id,document:article}})})),n("div",{staticClass:"cutter"})],2)}),[],!1,null,"544df513",null);n.default=component.exports;installComponents(component,{NuxtSectionBlock:o(249).default})}}]);