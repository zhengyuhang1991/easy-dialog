!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("EasyDialog",[],t):"object"==typeof exports?exports.EasyDialog=t():e.EasyDialog=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"easy-dialog",props:{show:{type:Boolean,default:!1},maskShow:{type:Boolean,default:!0},iconClass:{type:String,default:"icon-ok"},title:{type:String,default:""},content:{type:String,default:""},customBtns:{type:Array,default:function(){return[{className:"success",text:"确定",callback:null}]}}},methods:{close:function(){this.show=!1},customClick:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return void this.close();e(),this.close()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a={};a.install=function(e,t){var n=e.extend(o.a),a=void 0,s=function(){a=new n;var e=a.$mount().$el;document.body.appendChild(e)};e.prototype.$easyDialog={use:function(e){a||s(),Object.assign(a,e),this.show()},show:function(){a.show=!0},close:function(){a.show=!1}}},t.default=a},function(e,t,n){"use strict";function o(e){n(3)}var a=n(0),s=n(9),r=n(8),i=o,c=r(a.a,s.a,!1,i,"data-v-7721e0b1",null);t.a=c.exports},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(6)("29e95d3a",o,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,"@import url(//at.alicdn.com/t/font_822134_ahb24d4gqz.css);",""]),t.push([e.i,"a[data-v-7721e0b1],div[data-v-7721e0b1],i[data-v-7721e0b1]{margin:0;padding:0}.easy-dialog[data-v-7721e0b1]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999}.easy-dialog-mask[data-v-7721e0b1]{width:100%;height:100%;background:rgba(0,0,0,.5)}.easy-dialog-content[data-v-7721e0b1]{position:absolute;top:50%;left:50%;z-index:2;padding-top:10px;width:290px;font-size:0;text-align:center;border-radius:6px;background:#fff;transform:translate(-50%,-50%)}.easy-dialog-content .iconfont[data-v-7721e0b1]{display:inline-block;font-size:50px}.easy-dialog-content .title[data-v-7721e0b1]{margin-top:10px;font-size:14px;font-weight:700}.easy-dialog-content .content[data-v-7721e0b1]{margin-top:10px;font-size:12px}.easy-dialog-btns[data-v-7721e0b1]{display:flex;margin-top:10px;border-top:1px solid #ddd}.easy-dialog-btns .btn[data-v-7721e0b1]{flex:1;display:block;width:100%;font-size:12px;color:#888;line-height:34px;text-decoration:none;box-sizing:border-box}.easy-dialog-btns .btn[data-v-7721e0b1]:nth-child(n+2){border-left:1px solid #ddd}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var s=o(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(o[s]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(s(n.parts[a]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(s(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:r}}}}function a(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var t,n,o=document.querySelector("style["+b+'~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(m){var s=p++;o=f||(f=a()),t=r.bind(null,o,s,!1),n=r.bind(null,o,s,!0)}else o=a(),t=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function r(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var s=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function i(e,t){var n=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),g.ssrId&&e.setAttribute(b,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g=null,b="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){v=n,g=a||{};var s=d(e,t);return o(s),function(t){for(var n=[],a=0;a<s.length;a++){var r=s[a],i=l[r.id];i.refs--,n.push(i)}t?(s=d(e,t),o(s)):s=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete l[i.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},a=0;a<t.length;a++){var s=t[a],r=s[0],i=s[1],c=s[2],d=s[3],l={id:e+":"+a,css:i,media:c,sourceMap:d};o[r]?o[r].parts.push(l):n.push(o[r]={id:r,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,o,a,s){var r,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(r=e,i=e.default);var d="function"==typeof i?i.options:i;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId=a);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):o&&(l=o),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(e,t){return l.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:i,options:d}}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"easy-dialog"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.maskShow,expression:"maskShow"}],staticClass:"easy-dialog-mask"}),e._v(" "),n("div",{staticClass:"easy-dialog-content"},[n("i",{staticClass:"iconfont",class:e.iconClass}),e._v(" "),e.title?n("div",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.content?n("div",{staticClass:"content"},[e._v(e._s(e.content))]):e._e(),e._v(" "),n("div",{staticClass:"easy-dialog-btns"},e._l(e.customBtns,function(t,o){return n("a",{key:o,staticClass:"btn",class:t.className,attrs:{href:"javascript:;"},on:{click:function(n){e.customClick(t.callback)}}},[e._v(e._s(t.text))])}))])])},a=[],s={render:o,staticRenderFns:a};t.a=s}])});