define("595cf3bd-b9a1-448e-b60e-6da79c1c9323_0.0.1",["@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-application-base","@microsoft/sp-dialog","HelloWorldApplicationCustomizerStrings"],function(t,e,o,r,n){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=(o.n(r),o(2)),i=(o.n(n),o(3)),c=(o.n(i),o(4)),p=(o.n(c),o(5)),u=(o.n(p),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}()),s=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.onInit=function(){n.Log.info("HelloWorldApplicationCustomizer","Initialized "+p.Title);var t=this.properties.testMessage;return t||(t="(No properties were provided.)"),c.Dialog.alert("Hello from "+p.Title+":\n\n"+t),Promise.resolve()},s([r.override],e.prototype,"onInit",null),e}(i.BaseApplicationCustomizer);e.default=f},function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=o},function(t,e){t.exports=r},function(t,e){t.exports=n}])});