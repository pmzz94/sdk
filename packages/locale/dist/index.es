import{EventDispatcher as e}from"strongly-typed-events";import{EventEmitter as t}from"@xeokit/core";var r=0;function i(e){return"__private_"+r+++"_"+e}function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var o=/*#__PURE__*/i("messages"),s=/*#__PURE__*/i("locales"),a=/*#__PURE__*/i("locale"),l=/*#__PURE__*/function(){function r(r){void 0===r&&(r={messages:{},locale:""}),this.onUpdated=void 0,Object.defineProperty(this,o,{writable:!0,value:void 0}),Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:"en"}),this.onUpdated=new t(new e),this.messages=r.messages,this.locale=r.locale}var i,l,f=r.prototype;return f.loadMessages=function(e){for(var t in void 0===e&&(e={}),e)n(this,o)[o][t]=e[t];this.messages=n(this,o)[o]},f.clearMessages=function(){this.messages={}},f.translate=function(e,t){var r=n(this,o)[o][n(this,a)[a]];if(!r)return null;var i=u(e,r);return i?t?c(i,t):i:null},f.translatePlurals=function(e,t,r){var i=n(this,o)[o][n(this,a)[a]];if(!i)return null;var s=u(e,i);return(s=0===(t=parseInt(""+t,10))?s.zero:t>1?s.other:s.one)?(s=c(s,[t]),r&&(s=c(s,r)),s):null},i=r,(l=[{key:"messages",set:function(e){n(this,o)[o]=e||{},n(this,s)[s]=Object.keys(n(this,o)[o]),this.onUpdated.dispatch(this,n(this,a)[a])}},{key:"locales",get:function(){return n(this,s)[s]}},{key:"locale",get:function(){return n(this,a)[a]},set:function(e){e=e||"de",n(this,a)[a]!==e&&(n(this,a)[a]=e,this.onUpdated.dispatch(this,n(this,a)[a]))}}])&&function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,"symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key))?n:String(n),i)}var n}(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),r}();function u(e,t){if(t[e])return t[e];for(var r=e.split("."),i=t,n=0,o=r.length;i&&n<o;n++)i=i[r[n]];return i}function c(e,t){return void 0===t&&(t=[]),e.replace(/\{\{|\}\}|\{(\d+)\}/g,function(e,r){return"{{"===e?"{":"}}"===e?"}":t[r]})}export{l as LocaleService};
//# sourceMappingURL=index.es.map