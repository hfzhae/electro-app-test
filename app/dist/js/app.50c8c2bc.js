(function(e){function n(n){for(var r,u,l=n[0],i=n[1],a=n[2],p=0,f=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,a||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,l=1;l<t.length;l++){var i=t[l];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var s=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("ScalesSDK")],1)},c=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"components-ScalesSDK"},[e._v("this is ScalesSDK")])},l=[],i=window.require("electron"),a=i.ipcRenderer,s={mounted:function(){console.log(a);var e={weight:0},n=a.sendSync("ScalesSDK",e);console.log(n),console.log(e)}},p=s,f=(t("d60d"),t("2877")),d=Object(f["a"])(p,u,l,!1,null,null,null),b=d.exports,v={name:"App",components:{ScalesSDK:b}},h=v,y=Object(f["a"])(h,o,c,!1,null,null,null),g=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},a45b:function(e,n,t){},d60d:function(e,n,t){"use strict";t("a45b")}});