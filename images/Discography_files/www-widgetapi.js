(function(){var m,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&aa(c,d,{configurable:!0,writable:!0,value:h})}}
var da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ca("Object.assign",function(a){return a||da});
function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}
ca("Promise",function(a){function b(f){this.b=0;this.h=void 0;this.a=[];var g=this.f();try{f(g.resolve,g.reject)}catch(k){g.reject(k)}}
function c(){this.a=null}
function d(f){return f instanceof b?f:new b(function(g){g(f)})}
if(a)return a;c.prototype.b=function(f){if(null==this.a){this.a=[];var g=this;this.f(function(){g.h()})}this.a.push(f)};
var e=ba.setTimeout;c.prototype.f=function(f){e(f,0)};
c.prototype.h=function(){for(;this.a&&this.a.length;){var f=this.a;this.a=[];for(var g=0;g<f.length;++g){var k=f[g];f[g]=null;try{k()}catch(l){this.g(l)}}}this.a=null};
c.prototype.g=function(f){this.f(function(){throw f;})};
b.prototype.f=function(){function f(l){return function(u){k||(k=!0,l.call(g,u))}}
var g=this,k=!1;return{resolve:f(this.M),reject:f(this.g)}};
b.prototype.M=function(f){if(f===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.N(f);else{a:switch(typeof f){case "object":var g=null!=f;break a;case "function":g=!0;break a;default:g=!1}g?this.L(f):this.i(f)}};
b.prototype.L=function(f){var g=void 0;try{g=f.then}catch(k){this.g(k);return}"function"==typeof g?this.O(g,f):this.i(f)};
b.prototype.g=function(f){this.j(2,f)};
b.prototype.i=function(f){this.j(1,f)};
b.prototype.j=function(f,g){if(0!=this.b)throw Error("Cannot settle("+f+", "+g+"): Promise already settled in state"+this.b);this.b=f;this.h=g;this.o()};
b.prototype.o=function(){if(null!=this.a){for(var f=0;f<this.a.length;++f)h.b(this.a[f]);this.a=null}};
var h=new c;b.prototype.N=function(f){var g=this.f();f.s(g.resolve,g.reject)};
b.prototype.O=function(f,g){var k=this.f();try{f.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(f,g){function k(n,v){return"function"==typeof n?function(T){try{l(n(T))}catch(U){u(U)}}:v}
var l,u,q=new b(function(n,v){l=n;u=v});
this.s(k(f,l),k(g,u));return q};
b.prototype["catch"]=function(f){return this.then(void 0,f)};
b.prototype.s=function(f,g){function k(){switch(l.b){case 1:f(l.h);break;case 2:g(l.h);break;default:throw Error("Unexpected state: "+l.b);}}
var l=this;null==this.a?h.b(k):this.a.push(k)};
b.resolve=d;b.reject=function(f){return new b(function(g,k){k(f)})};
b.race=function(f){return new b(function(g,k){for(var l=fa(f),u=l.next();!u.done;u=l.next())d(u.value).s(g,k)})};
b.all=function(f){var g=fa(f),k=g.next();return k.done?d([]):new b(function(l,u){function q(T){return function(U){n[T]=U;v--;0==v&&l(n)}}
var n=[],v=0;do n.push(void 0),v++,d(k.value).s(q(n.length-1),u),k=g.next();while(!k.done)})};
return b});
var p=this||self;function r(a){return"string"==typeof a}
function t(a){a=a.split(".");for(var b=p,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(){}
function w(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var y="closure_uid_"+(1E9*Math.random()>>>0),ia=0;function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=ja:z=ka;return z.apply(null,arguments)}
var la=Date.now||function(){return+new Date};
function A(a,b){var c=a.split("."),d=p;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function B(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
function na(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function oa(a){return Array.prototype.concat.apply([],arguments)}
function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function qa(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
qa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};function ra(a){var b=D,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function E(a,b){this.a=a===sa&&b||"";this.b=ta}
E.prototype.toString=function(){return"Const{"+this.a+"}"};
var ta={},sa={},F=new E(sa,"");function G(){this.a="";this.b=ua}
var ua={};var va=/&/g,wa=/</g,xa=/>/g,ya=/"/g,za=/'/g,Aa=/\x00/g,Ba=/[\x00&<>"']/;var H;a:{var Ca=p.navigator;if(Ca){var Da=Ca.userAgent;if(Da){H=Da;break a}}H=""};function I(){this.a="";this.b=Ea}
var Ea={};function J(a){var b=new I;b.a=a;return b}
J("<!DOCTYPE html>");var K=J("");J("<br>");function Fa(a){var b=new G;b.a=F instanceof E&&F.constructor===E&&F.b===ta?F.a:"type_error:Const";a.src=(b instanceof G&&b.constructor===G&&b.b===ua?b.a:"type_error:TrustedResourceUrl").toString()}
;function Ga(a){p.setTimeout(function(){throw a;},0)}
var Ha;
function Ia(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==H.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Fa(e);document.documentElement.appendChild(e);var h=e.contentWindow;e=h.document;e.open();e.write(K instanceof I&&K.constructor===I&&K.b===Ea?K.a:"type_error:SafeHtml");e.close();var f="callImmediate"+Math.random(),g="file:"==h.location.protocol?"*":h.location.protocol+"//"+
h.location.host;e=z(function(k){if(("*"==g||k.origin==g)&&k.data==f)this.port1.onmessage()},this);
h.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){h.postMessage(f,g)}}});
if("undefined"!==typeof a&&-1==H.indexOf("Trident")&&-1==H.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.G;c.G=null;e()}};
return function(e){d.next={G:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var h=document.createElement("SCRIPT");
h.onreadystatechange=function(){h.onreadystatechange=null;h.parentNode.removeChild(h);h=null;e();e=null};
document.documentElement.appendChild(h)}:function(e){p.setTimeout(e,0)}}
;function Ja(){this.b=this.a=null}
var La=new qa(function(){return new Ka},function(a){a.reset()});
Ja.prototype.add=function(a,b){var c=La.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
Ja.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Ka(){this.next=this.b=this.a=null}
Ka.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Ka.prototype.reset=function(){this.next=this.b=this.a=null};function Ma(a){L||Na();Oa||(L(),Oa=!0);Pa.add(a,void 0)}
var L;function Na(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);L=function(){a.then(Qa)}}else L=function(){var b=Qa,c;
!(c="function"!=w(p.setImmediate))&&(c=p.Window&&p.Window.prototype)&&(c=-1==H.indexOf("Edge")&&p.Window.prototype.setImmediate==p.setImmediate);c?(Ha||(Ha=Ia()),Ha(b)):p.setImmediate(b)}}
var Oa=!1,Pa=new Ja;function Qa(){for(var a;a=Pa.remove();){try{a.a.call(a.b)}catch(c){Ga(c)}var b=La;b.g(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}Oa=!1}
;function M(){this.f=this.f;this.g=this.g}
M.prototype.f=!1;M.prototype.dispose=function(){this.f||(this.f=!0,this.B())};
M.prototype.B=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function Ra(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var h=e.getElementsByClassName(a);return h}h=e.getElementsByTagName("*");if(a){var f={};for(c=d=0;e=h[c];c++){var g=e.className,k;if(k="function"==typeof g.split)k=0<=ma(g.split(/\s+/),a);k&&(f[d++]=e)}f.length=d;return f}return h}
function Sa(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ta=p.JSON.stringify;function N(a){M.call(this);this.j=1;this.h=[];this.i=0;this.a=[];this.b={};this.o=!!a}
B(N,M);m=N.prototype;m.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.j;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.j=e+3;d.push(e);return e};
function Ua(a,b,c){var d=O;if(a=d.b[a]){var e=d.a;(a=na(a,function(h){return e[h+1]==b&&e[h+2]==c}))&&d.F(a)}}
m.F=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.i)this.h.push(a),this.a[a+1]=ha;else{if(c){var d=ma(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
m.I=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var f=c[e];Va(this.a[f+1],this.a[f+2],d)}else{this.i++;try{for(e=0,h=c.length;e<h;e++)f=c[e],this.a[f+1].apply(this.a[f+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.F(c)}}return 0!=e}return!1};
function Va(a,b,c){Ma(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.b[a];b&&(C(b,this.F,this),delete this.b[a])}else this.a.length=0,this.b={}};
m.B=function(){N.K.B.call(this);this.clear();this.h.length=0};var Wa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xa(a){var b=a.match(Wa);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Ya(a,b,c){if("array"==w(b))for(var d=0;d<b.length;d++)Ya(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Za(a){var b=[],c;for(c in a)Ya(c,a[c],b);return b.join("&")}
var $a=/#|$/;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var P=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",P);function ab(a){var b=arguments;1<b.length?P[b[0]]=b[1]:1===b.length&&Object.assign(P,b[0])}
;function bb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){cb(b)}}:a}
function cb(a,b){var c=t("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in P?P.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),ab("ERRORS",c))}
;var db=0;A("ytDomDomGetNextId",t("ytDomDomGetNextId")||function(){return++db});var eb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Q(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.a=a}catch(c){return}for(var b in a)b in eb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
Q.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
Q.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
Q.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};var D=t("ytEventsEventsListeners")||{};A("ytEventsEventsListeners",D);var fb=t("ytEventsEventsCounter")||{count:0};A("ytEventsEventsCounter",fb);
function gb(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ra(function(e){var h="boolean"==typeof e[4]&&e[4]==!!d,f;if(f=x(e[4])&&x(d))a:{f=e[4];for(var g in f)if(!(g in d)||f[g]!==d[g]){f=!1;break a}for(var k in d)if(!(k in f)){f=!1;break a}f=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(h||f)})}
function hb(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in D){var c=D[b],d=c[0],e=c[1],h=c[3];c=c[4];d.removeEventListener?ib()||"boolean"==typeof c?d.removeEventListener(e,h,c):d.removeEventListener(e,h,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,h);delete D[b]}}))}
var ib=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function jb(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=gb(a,b,c,d);if(!e){e=++fb.count+"";var h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var f=h?function(g){g=new Q(g);if(!Sa(g.relatedTarget,function(k){return k==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Q(g);
g.currentTarget=a;return c.call(a,g)};
f=bb(f);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ib()||"boolean"==typeof d?a.addEventListener(b,f,d):a.addEventListener(b,f,!!d.capture)):a.attachEvent("on"+b,f);D[e]=[a,b,c,f,d]}}}
;function kb(a){"function"==w(a)&&(a=bb(a));return window.setInterval(a,250)}
;var lb={};function mb(a){return lb[a]||(lb[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var R={},nb=[],O=new N,ob={};function pb(){C(nb,function(a){a()})}
function qb(a,b){b||(b=document);var c=pa(b.getElementsByTagName("yt:"+a)),d="yt-"+a,e=b||document;d=pa(e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):Ra(d,b));return oa(c,d)}
function S(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[mb(b)]:a.getAttribute("data-"+b):null;return c}
function rb(a,b){O.I.apply(O,arguments)}
;function sb(a){this.b=a||{};this.f=this.a=!1;a=document.getElementById("www-widgetapi-script");if(this.a=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.b,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var V=null;function W(a,b){for(var c=[a.b,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function tb(a,b,c){V||(V={},jb(window,"message",z(a.g,a)));V[c]=b}
sb.prototype.g=function(a){if(a.origin==W(this,"host")||a.origin==W(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.f=!0;this.a||0!=a.origin.indexOf("https:")||(this.a=!0);if(a=V[b.id])a.C=!0,a.C&&(C(a.v,a.D,a),a.v.length=0),a.J(b)}};function X(a,b,c){this.i=this.a=this.b=null;this.h=this[y]||(this[y]=++ia);this.f=0;this.C=!1;this.v=[];this.g=null;this.j=c;this.o={};c=document;if(a=r(a)?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Xa(a.src):"https://www.youtube.com"),this.b=new sb(b),c||(b=ub(this,a),this.i=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.a=a,this.a.id||(a=b=this.a,a=a[y]||(a[y]=++ia),b.id="widget"+a),R[this.a.id]=this,window.postMessage){this.g=new N;vb(this);b=W(this.b,"events");
for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in ob)wb(this,e)}}
m=X.prototype;m.setSize=function(a,b){this.a.width=a;this.a.height=b;return this};
m.P=function(){return this.a};
m.J=function(a){this.u(a.event,a)};
m.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.g.subscribe(a,c);xb(this,a);return this};
function wb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.j==c[0]&&xb(a,d)}}
m.destroy=function(){this.a.id&&(R[this.a.id]=null);var a=this.g;a&&"function"==typeof a.dispose&&a.dispose();if(this.i){a=this.a;var b=a.parentNode;b&&b.replaceChild(this.i,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);V&&(V[this.h]=null);this.b=null;a=this.a;for(var c in D)D[c][0]==a&&hb(c);this.i=this.a=null};
m.w=function(){return{}};
function yb(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.C?a.D(b):a.v.push(b)}
m.u=function(a,b){if(!this.g.f){var c={target:this,data:b};this.g.I(a,c);rb(this.j+"."+a,c)}};
function ub(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,h=d.length;e<h;e++){var f=d[e].value;null!=f&&""!=f&&"null"!=f&&c.setAttribute(d[e].name,f)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+W(a.b,"title"));(d=W(a.b,"width"))&&c.setAttribute("width",d);(d=W(a.b,"height"))&&c.setAttribute("height",d);var g=a.w();g.enablejsapi=
window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.h;window.location.href&&C(["debugjs","debugcss"],function(k){var l=window.location.href;var u=l.search($a);b:{var q=0;for(var n=k.length;0<=(q=l.indexOf(k,q))&&q<u;){var v=l.charCodeAt(q-1);if(38==v||63==v)if(v=l.charCodeAt(q+n),!v||61==v||38==v||35==v)break b;q+=n+1}q=-1}if(0>q)l=null;else{n=l.indexOf("&",q);if(0>n||n>u)n=u;q+=k.length+1;l=decodeURIComponent(l.substr(q,n-q).replace(/\+/g,
" "))}null===l||(g[k]=l)});
c.src=W(a.b,"host")+a.A()+"?"+Za(g);return c}
m.H=function(){this.a&&this.a.contentWindow?this.D({event:"listening"}):window.clearInterval(this.f)};
function vb(a){tb(a.b,a,a.h);a.f=kb(z(a.H,a));jb(a.a,"load",z(function(){window.clearInterval(this.f);this.f=kb(z(this.H,this))},a))}
function xb(a,b){a.o[b]||(a.o[b]=!0,yb(a,"addEventListener",[b]))}
m.D=function(a){a.id=this.h;a.channel="widget";a=Ta(a);var b=this.b;var c=Xa(this.a.src||"");b=0==c.indexOf("https:")?[c]:b.a?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];if(this.a.contentWindow)for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&"SyntaxError"==d.name)cb(d,"WARNING");else throw d;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function zb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Ab(a){return 0==a.search("get")||0==a.search("is")}
;function Y(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"player");this.l={};this.m={}}
B(Y,X);function Bb(a){if("iframe"!=a.tagName.toLowerCase()){var b=S(a,"videoid");b&&(b={videoId:b,width:S(a,"width"),height:S(a,"height")},new Y(a,b))}}
m=Y.prototype;m.A=function(){return"/embed/"+W(this.b,"videoId")};
m.w=function(){var a=W(this.b,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=W(this.b,"embedConfig")){if(x(c))try{c=Ta(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
m.J=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(x(a))for(var c in a)this.l[c]=a[c];break;case "infoDelivery":Cb(this,a);break;case "initialDelivery":window.clearInterval(this.f);this.m={};this.l={};Db(this,a.apiInterface);Cb(this,a);break;default:this.u(b,a)}};
function Cb(a,b){if(x(b))for(var c in b)a.m[c]=b[c]}
function Db(a,b){C(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.m.currentTime;if(1==this.m.playerState){var e=(la()/1E3-this.m.currentTimeLastUpdated_)*this.m.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:zb(c)?this[c]=function(){this.m={};
this.l={};yb(this,c,arguments);return this}:Ab(c)?this[c]=function(){var d=0;
0==c.search("get")?d=3:0==c.search("is")&&(d=2);return this.m[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){yb(this,c,arguments);
return this})},a)}
m.getVideoEmbedCode=function(){var a=parseInt(W(this.b,"width"),10);var b=parseInt(W(this.b,"height"),10),c=W(this.b,"host")+this.A();Ba.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(va,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(wa,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(xa,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(ya,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(za,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Aa,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
return a};
m.getOptions=function(a){return this.l.namespaces?a?this.l[a].options||[]:this.l.namespaces||[]:[]};
m.getOption=function(a,b){if(this.l.namespaces&&a&&b)return this.l[a][b]};function Z(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"thumbnail")}
B(Z,X);function Eb(a){if("iframe"!=a.tagName.toLowerCase()){var b=S(a,"videoid");if(b){b={videoId:b,events:{},width:S(a,"width"),height:S(a,"height"),thumbWidth:S(a,"thumb-width"),thumbHeight:S(a,"thumb-height"),thumbAlign:S(a,"thumb-align")};var c=S(a,"onclick");c&&(b.events.onClick=c);new Z(a,b)}}}
Z.prototype.A=function(){return"/embed/"+W(this.b,"videoId")};
Z.prototype.w=function(){return{player:0,thumb_width:W(this.b,"thumbWidth"),thumb_height:W(this.b,"thumbHeight"),thumb_align:W(this.b,"thumbAlign")}};
Z.prototype.u=function(a,b){Z.K.u.call(this,a,b?b.info:void 0)};A("YT.PlayerState.UNSTARTED",-1);A("YT.PlayerState.ENDED",0);A("YT.PlayerState.PLAYING",1);A("YT.PlayerState.PAUSED",2);A("YT.PlayerState.BUFFERING",3);A("YT.PlayerState.CUED",5);A("YT.get",function(a){return R[a]});
A("YT.scan",pb);A("YT.subscribe",function(a,b,c){O.subscribe(a,b,c);ob[a]=!0;for(var d in R)wb(R[d],a)});
A("YT.unsubscribe",function(a,b,c){Ua(a,b,c)});
A("YT.Player",Y);A("YT.Thumbnail",Z);X.prototype.destroy=X.prototype.destroy;X.prototype.setSize=X.prototype.setSize;X.prototype.getIframe=X.prototype.P;X.prototype.addEventListener=X.prototype.addEventListener;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getOptions=Y.prototype.getOptions;Y.prototype.getOption=Y.prototype.getOption;nb.push(function(a){a=qb("player",a);C(a,Bb)});
nb.push(function(){var a=qb("thumbnail");C(a,Eb)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||pb();var Fb=t("onYTReady");Fb&&Fb();var Gb=t("onYouTubeIframeAPIReady");Gb&&Gb();var Hb=t("onYouTubePlayerAPIReady");Hb&&Hb();}).call(this);
