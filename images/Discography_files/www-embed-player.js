(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function u(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ka(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function la(){la=function(){};
ja.Symbol||(ja.Symbol=ma)}
function na(a,b){this.f=a;ia(this,"description",{configurable:!0,writable:!0,value:b})}
na.prototype.toString=function(){return this.f};
var ma=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new na("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function oa(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(aa(this))}});
oa=function(){}}
function qa(a){oa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||sa});
u("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ja.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.B),reject:g(this.j)}};
b.prototype.B=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.F(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.A(g):this.l(g)}};
b.prototype.A=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.G(h,g):this.l(g)};
b.prototype.j=function(g){this.w(2,g)};
b.prototype.l=function(g){this.w(1,g)};
b.prototype.w=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.o()};
b.prototype.o=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.F=function(g){var h=this.i();g.X(h.resolve,h.reject)};
b.prototype.G=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,p){return"function"==typeof v?function(C){try{l(v(C))}catch(J){n(J)}}:p}
var l,n,r=new b(function(v,p){l=v;n=p});
this.X(k(g,l),k(h,n));return r};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.X=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=q(g),n=l.next();!n.done;n=l.next())d(n.value).X(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(C){return function(J){v[C]=J;p--;0==p&&l(v)}}
var v=[],p=0;do v.push(void 0),p++,d(k.value).X(r(v.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ra(k,g)){var l=new c;ia(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.f)?delete k[g][this.f]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return qa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&ra(h.g,l))for(var r=0;r<n.length;r++){var v=n[r];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:n,index:r,u:v}}return{id:l,list:n,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
oa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ka(this,b,"includes").indexOf(b,c||0)}});
var ta=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
u("Reflect.construct",function(){return ta});
var w=this||self;function x(a){return void 0!==a}
function y(a){return"string"==typeof a}
function z(a,b,c){a=a.split(".");c=c||w;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&x(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ua=/^[\w+/_-]+[=]{0,2}$/,va=null;function A(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function xa(a){a.fa=void 0;a.getInstance=function(){return a.fa?a.fa:a.fa=new a}}
function ya(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function za(a){return"array"==ya(a)}
function Aa(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ba(a){return"function"==ya(a)}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?B=Fa:B=Ga;return B.apply(null,arguments)}
function Ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now||function(){return+new Date};
function Ia(a,b){z(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var F=window;function G(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(G,Error);G.prototype.name="CustomError";var Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(y(a))return y(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=y(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=y(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},La=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=y(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Na=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Oa(a,b){a:{var c=a.length;for(var d=y(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:y(a)?a.charAt(c):a[c]}
function Pa(a,b){var c=Ja(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ua(a,b){var c=Aa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Va(a){var b=Wa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Xa(a){for(var b in a)return!1;return!0}
function Ya(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Za(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ab(a){var b=ya(a);if("object"==b||"array"==b){if(Ba(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ab(a[c]);return b}return a}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function db(a,b){this.f=a===eb&&b||"";this.g=fb}
db.prototype.J=!0;db.prototype.I=function(){return this.f};
db.prototype.toString=function(){return"Const{"+this.f+"}"};
var fb={},eb={},gb;gb=new db(eb,"");function hb(){this.f="";this.g=ib}
hb.prototype.J=!0;hb.prototype.I=function(){return this.f.toString()};
hb.prototype.ea=!0;hb.prototype.ba=function(){return 1};
function jb(a){if(a instanceof hb&&a.constructor===hb&&a.g===ib)return a.f;ya(a);return"type_error:TrustedResourceUrl"}
var ib={};function kb(a){var b=new hb;b.f=a;return b}
;var lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function mb(a,b){if(b)a=a.replace(nb,"&amp;").replace(ob,"&lt;").replace(pb,"&gt;").replace(qb,"&quot;").replace(rb,"&#39;").replace(sb,"&#0;");else{if(!tb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(nb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ob,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(rb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sb,"&#0;"))}return a}
var nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,tb=/[\x00&<>"']/;function I(){this.f="";this.g=ub}
I.prototype.J=!0;I.prototype.I=function(){return this.f.toString()};
I.prototype.ea=!0;I.prototype.ba=function(){return 1};
function vb(a){if(a instanceof I&&a.constructor===I&&a.g===ub)return a.f;ya(a);return"type_error:SafeUrl"}
var wb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function xb(a){if(a instanceof I)return a;a="object"==typeof a&&a.J?a.I():String(a);wb.test(a)||(a="about:invalid#zClosurez");return yb(a)}
var ub={};function yb(a){var b=new I;b.f=a;return b}
yb("about:blank");var zb;a:{var Ab=w.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""};function Cb(){this.f="";this.h=Db;this.g=null}
Cb.prototype.ea=!0;Cb.prototype.ba=function(){return this.g};
Cb.prototype.J=!0;Cb.prototype.I=function(){return this.f.toString()};
function Eb(a){if(a instanceof Cb&&a.constructor===Cb&&a.h===Db)return a.f;ya(a);return"type_error:SafeHtml"}
var Db={};function Fb(a,b){var c=new Cb;c.f=a;c.g=b;return c}
Fb("<!DOCTYPE html>",0);var Gb=Fb("",0);Fb("<br>",0);function Hb(a,b){var c=b instanceof I?b:xb(b);a.href=vb(c)}
function Jb(a){var b=kb(gb instanceof db&&gb.constructor===db&&gb.g===fb?gb.f:"type_error:Const");a.src=jb(b).toString()}
function Kb(a,b){a.src=jb(b);if(null===va)b:{var c=w.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ua.test(c)){va=c;break b}va=""}c=va;c&&a.setAttribute("nonce",c)}
;function Lb(a){return a=mb(a,void 0)}
function Mb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Nb=-1!=zb.indexOf("Trident")||-1!=zb.indexOf("MSIE"),Ob;var Pb;if(w.document&&Nb){var Qb=w.document;Pb=Qb?Qb.documentMode:void 0}else Pb=void 0;Ob=Pb;var Rb={},Sb=null;function Tb(a){this.f=a||{cookie:""}}
m=Tb.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');x(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=lb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=x(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ub=new Tb("undefined"==typeof document?null:document);function Vb(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(y(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Wb[b]?b=Wb[b]:(b=String(b),Wb[b]||(c=/function\s+([^\(]+)/m.exec(b),Wb[b]=c?c[1]:"[Anonymous]"),b=Wb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Wb={};var Xb=!Nb||9<=Number(Ob);function Yb(a,b){this.x=x(a)?a:0;this.y=x(b)?b:0}
m=Yb.prototype;m.clone=function(){return new Yb(this.x,this.y)};
m.equals=function(a){return a instanceof Yb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Zb(a,b){this.width=a;this.height=b}
m=Zb.prototype;m.clone=function(){return new Zb(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function $b(a){var b=document;return y(a)?b.getElementById(a):a}
function ac(a,b){Ta(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:bc.hasOwnProperty(d)?a.setAttribute(bc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function cc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Xb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Lb(g.name),'"');if(g.type){f.push(' type="',Lb(g.type),'"');var h={};cb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(y(g)?f.className=g:za(g)?f.className=g.join(" "):ac(f,g));2<d.length&&dc(e,f,d);return f}
function dc(a,b,c){function d(g){g&&b.appendChild(y(g)?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Aa(f)||Ca(f)&&0<f.nodeType?d(f):H(ec(f)?Qa(f):f,d)}}
function ec(a){if(a&&"number"==typeof a.length){if(Ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ba(a))return"function"==typeof a.item}return!1}
function fc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function gc(a){hc();return kb(a)}
var hc=wa;var ic=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a?decodeURI(a):a}
function L(a,b){return b.match(ic)[a]||null}
function jc(a,b,c){if(za(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kc(a){var b=[],c;for(c in a)jc(c,a[c],b);return b.join("&")}
function lc(a,b){var c=kc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var mc=/#|$/;function nc(a,b){var c=a.search(mc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function oc(a){var b=pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function qc(){var a=[];oc(function(b){a.push(b)});
return a}
var pc={Za:"allow-forms",ab:"allow-modals",bb:"allow-orientation-lock",cb:"allow-pointer-lock",eb:"allow-popups",fb:"allow-popups-to-escape-sandbox",gb:"allow-presentation",hb:"allow-same-origin",ib:"allow-scripts",jb:"allow-top-navigation",kb:"allow-top-navigation-by-user-activation"},rc=Sa(function(){return qc()});
function sc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};H(rc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function tc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var uc=(new Date).getTime();function wc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function xc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var v=g,p=0;64>p;p+=4)v[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(r<<1|r>>>31)&4294967295;r=e[0];var C=e[1],J=e[2],pa=e[3],vc=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Ma=pa^C&(J^pa);var Ib=1518500249}else Ma=C^J^pa,Ib=1859775393;else 60>p?(Ma=C&J|pa&(C|J),Ib=2400959708):(Ma=C^J^pa,Ib=3395469782);Ma=((r<<5|r>>>27)&4294967295)+Ma+vc+Ib+v[p]&4294967295;vc=pa;pa=J;J=(C<<30|C>>>2)&4294967295;C=r;r=Ma}e[0]=e[0]+r&4294967295;e[1]=
e[1]+C&4294967295;e[2]=e[2]+J&4294967295;e[3]=e[3]+pa&4294967295;e[4]=e[4]+vc&4294967295}
function c(r,v){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],C=0,J=r.length;C<J;++C)p.push(r.charCodeAt(C));r=p}v||(v=r.length);p=0;if(0==l)for(;p+64<v;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<v;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<v;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],v=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var C=24;0<=C;C-=8)r[v++]=e[p]>>C&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ta:function(){for(var r=d(),v="",p=0;p<r.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return v}}}
;function yc(a,b,c){var d=[],e=[];if(1==(za(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),zc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=zc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function zc(a){var b=xc();b.update(a);return b.ta().toLowerCase()}
;function Ac(a){var b=wc(String(w.location.href)),c=w.__OVERRIDE_SID;null==c&&(c=(new Tb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?w.__SAPISID:w.__APISID,null==b&&(b=(new Tb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(w.location.href);return d&&b&&c?[c,yc(wc(d),b,a||null)].join(" "):null}return null}
;function Bc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Bc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Cc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Dc(a){w.setTimeout(function(){throw a;},0)}
var Ec;
function Fc(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==zb.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Jb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Eb(Gb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=B(function(k){if(("*"==h||k.origin==h)&&
k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==zb.indexOf("Trident")&&-1==zb.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(x(c.next)){c=c.next;var e=c.ia;c.ia=null;e()}};
return function(e){d.next={ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){w.setTimeout(e,0)}}
;function Gc(){this.g=this.f=null}
var Ic=new Bc(function(){return new Hc},function(a){a.reset()});
Gc.prototype.add=function(a,b){var c=Ic.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Gc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Hc(){this.next=this.scope=this.f=null}
Hc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Hc.prototype.reset=function(){this.next=this.scope=this.f=null};function Jc(a,b){Kc||Lc();Mc||(Kc(),Mc=!0);Nc.add(a,b)}
var Kc;function Lc(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);Kc=function(){a.then(Oc)}}else Kc=function(){var b=Oc;
!Ba(w.setImmediate)||w.Window&&w.Window.prototype&&-1==zb.indexOf("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(Ec||(Ec=Fc()),Ec(b)):w.setImmediate(b)}}
var Mc=!1,Nc=new Gc;function Oc(){for(var a;a=Nc.remove();){try{a.f.call(a.scope)}catch(b){Dc(b)}Cc(Ic,a)}Mc=!1}
;function Pc(){this.g=-1}
;function Qc(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(Qc,Pc);Qc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Rc(a,b,c){c||(c=0);var d=a.w;if(y(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Qc.prototype.update=function(a,b){if(null!=a){x(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Rc(this,a,d),d+=this.g;if(y(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Rc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Rc(this,e);f=0;break}}this.h=f;this.j+=b}};
Qc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Rc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function M(){this.g=this.g;this.w=this.w}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Sc(a,b){a.g?x(void 0)?b.call(void 0):b():(a.w||(a.w=[]),a.w.push(x(void 0)?B(b,void 0):b))}
M.prototype.m=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Tc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Aa(d)?Uc.apply(null,d):Tc(d)}}
;function Vc(a){if(a.classList)return a.classList;a=a.className;return y(a)&&a.match(/\S+/g)||[]}
function Wc(a,b){if(a.classList)var c=a.classList.contains(b);else c=Vc(a),c=0<=Ja(c,b);return c}
function Xc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Wc(a,"inverted-hdpi")&&(a.className=Ka(Vc(a),function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Yc="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function Zc(){}
Zc.prototype.next=function(){throw Yc;};
Zc.prototype.H=function(){return this};
function $c(a){if(a instanceof Zc)return a;if("function"==typeof a.H)return a.H(!1);if(Aa(a)){var b=0,c=new Zc;c.next=function(){for(;;){if(b>=a.length)throw Yc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ad(a,b){if(Aa(a))try{H(a,b,void 0)}catch(c){if(c!==Yc)throw c;}else{a=$c(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Yc)throw c;}}}
function bd(a){if(Aa(a))return Qa(a);a=$c(a);var b=[];ad(a,function(c){b.push(c)});
return b}
;function cd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cd)for(c=dd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function dd(a){ed(a);return a.f.concat()}
m=cd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||fd;ed(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function fd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.i=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&ed(this),!0):!1};
function ed(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
m.forEach=function(a,b){for(var c=dd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new cd(this)};
m.H=function(a){ed(this);var b=0,c=this.i,d=this,e=new Zc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Yc;var f=d.f[b++];return a?f:d.h[f]};
return e};function gd(a){var b=[];hd(new id,a,b);return b.join("")}
function id(){}
function hd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),hd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),jd(d,c),c.push(":"),hd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":jd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var kd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ld=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function jd(a,b){b.push('"',a.replace(ld,function(c){var d=kd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),kd[c]=d);return d}),'"')}
;function md(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=wa)try{var b=this;a.call(void 0,function(c){nd(b,2,c)},function(c){nd(b,3,c)})}catch(c){nd(this,3,c)}}
function od(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
od.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var pd=new Bc(function(){return new od},function(a){a.reset()});
function qd(a,b,c){var d=pd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function rd(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return sd(this,Ba(a)?a:null,Ba(b)?b:null,c)};
N.prototype.$goog_Thenable=!0;function td(a,b){return sd(a,null,b,void 0)}
N.prototype.cancel=function(a){0==this.f&&Jc(function(){var b=new ud(a);vd(this,b)},this)};
function vd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?vd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):wd(c),xd(c,e,3,b)))}a.h=null}else nd(a,3,b)}
function yd(a,b){a.g||2!=a.f&&3!=a.f||zd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function sd(a,b,c,d){var e=qd(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);!x(k)&&h instanceof ud?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;yd(a,e);return e.f}
N.prototype.A=function(a){this.f=0;nd(this,2,a)};
N.prototype.B=function(a){this.f=0;nd(this,3,a)};
function nd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.B;if(d instanceof N){yd(d,qd(e||wa,f||null,a));var g=!0}else if(md(d))d.then(e,f,a),g=!0;else{if(Ca(d))try{var h=d.then;if(Ba(h)){Ad(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.w=c,a.f=b,a.h=null,zd(a),3!=b||c instanceof ud||Bd(a,c))}}
function Ad(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function zd(a){a.l||(a.l=!0,Jc(a.o,a))}
function wd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.o=function(){for(var a;a=wd(this);)xd(this,a,this.f,this.w);this.l=!1};
function xd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Cd(b,c,d);else try{b.h?b.g.call(b.context):Cd(b,c,d)}catch(e){Dd.call(null,e)}Cc(pd,b)}
function Cd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Bd(a,b){a.j=!0;Jc(function(){a.j&&Dd.call(null,b)})}
var Dd=Dc;function ud(a){G.call(this,a)}
E(ud,G);ud.prototype.name="cancel";function O(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
E(O,M);m=O.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Ed(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Oa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.M(b)}}
m.M=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=wa):(c&&Pa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.L=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Fd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.M(c)}}return 0!=e}return!1};
function Fd(a,b,c){Jc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.M,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){O.C.m.call(this);this.clear();this.i.length=0};function Gd(a){this.f=a}
Gd.prototype.set=function(a,b){x(b)?this.f.set(a,gd(b)):this.f.remove(a)};
Gd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Gd.prototype.remove=function(a){this.f.remove(a)};function Hd(a){this.f=a}
E(Hd,Gd);function Id(a){this.data=a}
function Jd(a){return!x(a)||a instanceof Id?a:new Id(a)}
Hd.prototype.set=function(a,b){Hd.C.set.call(this,a,Jd(b))};
Hd.prototype.g=function(a){a=Hd.C.get.call(this,a);if(!x(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Hd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!x(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Kd(a){this.f=a}
E(Kd,Hd);Kd.prototype.set=function(a,b,c){if(b=Jd(b)){if(c){if(c<D()){Kd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}Kd.C.set.call(this,a,b)};
Kd.prototype.g=function(a){var b=Kd.C.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())Kd.prototype.remove.call(this,a);else return b}};function Ld(){}
;function Md(){}
E(Md,Ld);Md.prototype.clear=function(){var a=bd(this.H(!0)),b=this;H(a,function(c){b.remove(c)})};function Nd(a){this.f=a}
E(Nd,Md);m=Nd.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!y(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.H=function(a){var b=0,c=this.f,d=new Zc;d.next=function(){if(b>=c.length)throw Yc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!y(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Od(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Od,Nd);function Pd(a,b){this.g=a;this.f=null;if(Nb&&!(9<=Number(Ob))){Qd||(Qd=new cd);this.f=Qd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Qd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(Pd,Md);var Rd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Qd=null;function Sd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Rd[b]})}
m=Pd.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Sd(a),b);Td(this)};
m.get=function(a){a=this.f.getAttribute(Sd(a));if(!y(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Sd(a));Td(this)};
m.H=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Zc;d.next=function(){if(b>=c.length)throw Yc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!y(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Td(this)};
function Td(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ud(a,b){this.g=a;this.f=b+"::"}
E(Ud,Md);Ud.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Ud.prototype.get=function(a){return this.g.get(this.f+a)};
Ud.prototype.remove=function(a){this.g.remove(this.f+a)};
Ud.prototype.H=function(a){var b=this.g.H(!0),c=this,d=new Zc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Vd(){this.g=[];this.f=-1}
Vd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Vd.prototype.get=function(a){return!!this.g[a]};
function Wd(a){-1==a.f&&(a.f=Na(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
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
function Xd(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Yd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Yd,void 0);function P(a){Xd(Yd,arguments)}
function Q(a,b){return a in Yd?Yd[a]:b}
function Zd(a){return Q(a,void 0)}
function $d(){return Q("PLAYER_CONFIG",{})}
;function ae(){var a=be;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function ce(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;function de(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=A("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function ee(a){R(a,"WARNING",void 0,void 0,void 0)}
;function fe(a){var b=[];Ta(a,function(c,d){var e=encodeURIComponent(String(d)),f;za(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ge(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?za(b[f])?Ra(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?ee(h):R(h)}}return b}
function he(a,b){return ie(a,b||{},!0)}
function ie(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ge(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
;function je(a){var b=ke;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(le(b),me(b));b.ca_type="image";a&&(b.bid=a);return b}
function le(a){var b={};b.dt=uc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?F:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(b.u_h=F.screen.height,b.u_w=F.screen.width,b.u_ah=F.screen.availHeight,b.u_aw=F.screen.availWidth,b.u_cd=F.screen.colorDepth);
F.navigator&&F.navigator.plugins&&(b.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(b.u_nmime=F.navigator.mimeTypes.length);return b}
function me(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(r){}try{var e=b.outerWidth;var f=b.outerHeight}catch(r){}try{var g=b.innerWidth;var h=b.innerHeight}catch(r){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new Zb(l.clientWidth,l.clientHeight)).round()}catch(r){n=new Zb(-12245933,-12245933)}k=n;n={};l=new Vd;w.SVGElement&&
w.document.createElementNS&&l.set(0);c=sc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);w.crypto&&w.crypto.subtle&&l.set(3);w.TextDecoder&&w.TextEncoder&&l.set(4);l=Wd(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!F.WebGLRenderingContext,n}
var ke=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return fe(je(a))},void 0);D();function ne(a,b){var c=S(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var oe=x(XMLHttpRequest)?function(){return new XMLHttpRequest}:x(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function pe(){if(!oe)return null;var a=oe();return"open"in a?a:null}
function qe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){Ba(a)&&(a=de(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;var re={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},se="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
te=!1;
function ue(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(1,a),e=K(L(3,a));d&&e?(d=c,c=a.match(ic),d=d.match(ic),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(L(3,c))==e&&(Number(L(4,c))||null)==(Number(L(4,a))||null):!0;d=!!S("web_ajax_ignore_global_headers_if_set");for(var f in re)e=Q(re[f]),!e||!c&&!ve(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||ve(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(S("pass_biscotti_id_in_header_ajax")||S("pass_biscotti_id_in_header_ajax_tv"))&&(c||
ve(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=fe(je(void 0)));return b}
function we(a){var b=window.location.search,c=K(L(3,a)),d=K(L(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ge(b),f={};H(se,function(g){e[g]&&(f[g]=e[g])});
return ie(a,f||{},!1)}
function ve(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=K(L(3,a));return d?(c=c[d])?0<=Ja(c,b):!1:!0}
function xe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ye(a,b);var d=ze(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&U(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||w;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ga&&b.ga.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ka&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ka.call(b.context||w))},b.timeout))}else Ae(a,b)}
function Ae(a,b){var c=b.format||"JSON";a=ye(a,b);var d=ze(a,b),e=!1,f,g=Be(a,function(h){if(!e){e=!0;f&&U(f);var k=qe(h),l=null,n=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(k||n||r)l=Ce(c,h,b.ob);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||w;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.ga&&b.ga.call(n,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.N&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.N.call(b.context||w,g))},b.timeout));
return g}
function ye(a,b){b.ya&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Ya;d&&(d[c]&&delete d[c],a=he(a,d));return a}
function ze(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=Zd("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.qb||K(L(3,a))&&!b.withCredentials&&K(L(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&y(e)&&(e=ge(e),cb(e,f),e=b.la&&"JSON"==b.la?JSON.stringify(e):kc(e));f=e||f&&!Xa(f);!te&&f&&"POST"!=b.method&&(te=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Ce(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?De(b):null)d={},H(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ee(e)})}c&&Fe(d);
return d}
function Fe(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Fb(a[b],null);a[c]=d}else Fe(a[b])}}
function De(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ee(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ge(a,b){b.method="POST";b.D||(b.D={});Ae(a,b)}
function Be(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&de(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=pe();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=we(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ue(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var He={},Ie=0;
function Je(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=zb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof I||(a="object"==typeof a&&a.J?a.I():String(a),wb.test(a)||(a="about:invalid#zClosurez"),a=yb(a)),b=vb(a).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Cb?a=b:(d="object"==typeof b,a=null,d&&b.ea&&(a=b.ba()),b=mb(d&&b.J?b.I():String(b)),a=Fb(b,a)),a=Eb(a).toString(),a=encodeURIComponent(String(gd(a)))),/^[\s\xa0]*$/.test(a)||(a=cc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Be(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Be(a,b,"GET","",d):((d=Yd.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=K(L(5,a)).indexOf("/aclk")&&"1"===nc(a,"ae")&&"1"===nc(a,"act")?Ke(a)?(b&&b(),d=!0):d=!1:d=!1,d||Le(a,b)))}
function Ke(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Le(a,b){var c=new Image,d=""+Ie++;He[d]=c;c.onload=c.onerror=function(){b&&He[d]&&b();delete He[d]};
c.src=a}
;var Me={},Ne=0;
function Oe(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Ne||(S("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Vb(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Ba(window.yterr)&&window.yterr(a),Me[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ya:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},D:{url:Q("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.D.stack=e);for(var g in f)b.D["client."+g]=f[g];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.D[h]=g[h];Ae(Q("ECATCHER_REPORT_HOST","")+"/error_204",b);Me[a.message]=!0;Ne++}}
;var Pe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Pe,void 0);function Qe(a){Xd(Pe,arguments)}
;function Re(a){a&&(a.dataset?a.dataset[Se("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Te(a,b){return a?a.dataset?a.dataset[Se(b)]:a.getAttribute("data-"+b):null}
var Ue={};function Se(a){return Ue[a]||(Ue[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ve=A("ytPubsubPubsubInstance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.M;O.prototype.publish=O.prototype.L;O.prototype.clear=O.prototype.clear;z("ytPubsubPubsubInstance",Ve,void 0);var We=A("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",We,void 0);var Xe=A("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",Xe,void 0);var Ye=A("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",Ye,void 0);
function Ze(a,b){var c=$e();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){We[d]&&b.apply(window,e)};
try{Ye[a]?f():T(f,0)}catch(g){R(g)}},void 0);
We[d]=!0;Xe[a]||(Xe[a]=[]);Xe[a].push(d);return d}return 0}
function af(a){var b=$e();b&&("number"==typeof a?a=[a]:y(a)&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete We[c]}))}
function bf(a,b){var c=$e();c&&c.publish.apply(c,arguments)}
function cf(a){var b=$e();if(b)if(b.clear(a),a)df(a);else for(var c in Xe)df(c)}
function $e(){return A("ytPubsubPubsubInstance")}
function df(a){Xe[a]&&(a=Xe[a],H(a,function(b){We[b]&&delete We[b]}),a.length=0)}
;var ef=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ff=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ef,""),c=c.replace(ff,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hf(a,b,c)}
function hf(a,b,c){c=void 0===c?null:c;var d=jf(a),e=document.getElementById(d),f=e&&Te(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Ze(d,b),b=""+(b[Da]||(b[Da]=++Ea)),kf[b]=f),g||(e=lf(a,d,function(){Te(e,"loaded")||(Re(e),bf(d),T(Ha(cf,d),0))},c)))}
function lf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Kb(e,gc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function mf(a){a=jf(a);var b=document.getElementById(a);b&&(cf(a),b.parentNode.removeChild(b))}
function nf(a,b){if(a&&b){var c=""+(b[Da]||(b[Da]=++Ea));(c=kf[c])&&af(c)}}
function jf(a){var b=document.createElement("a");Hb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Mb(a)}
var kf={};function of(){}
function pf(a,b){return qf(a,1,b)}
;function rf(){}
t(rf,of);function qf(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function sf(a){if(!isNaN(a)){var b=A("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
rf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
rf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
xa(rf);rf.getInstance();var tf=[],uf=!1;function vf(){if("1"!=Ua($d(),"args","privembed")){var a=function(){uf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
gf("//static.doubleclick.net/instream/ad_status.js",a);tf.push(pf(function(){uf||"google_ad_status"in window||(nf("//static.doubleclick.net/instream/ad_status.js",a),uf=!0,P("DCLKSTAT",3))},5E3))}}
function wf(){return parseInt(Q("DCLKSTAT",0),10)}
;function xf(){this.g=!1;this.f=null}
xf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,gf(b,function(){f.g=!1;if(window.botguard)yf(f,c,d);else{mf(b);var g=Error("Unable to load Botguard");g.params="from "+b;ee(g)}},e)):a&&(eval(a),window.botguard?yf(this,c,d):ee(Error("Unable to load Botguard from JS")))};
function yf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){ee(d)}c&&c(b)}
xf.prototype.dispose=function(){this.f=null};var zf=window,Af=zf.ytcsi&&zf.ytcsi.now?zf.ytcsi.now:zf.performance&&zf.performance.timing&&zf.performance.now?function(){return zf.performance.timing.navigationStart+zf.performance.now()}:function(){return(new Date).getTime()};var Bf=new xf,Cf=!1,Df=0,Ef="";function Ff(a){S("botguard_periodic_refresh")?Df=Af():S("botguard_always_refresh")&&(Ef=a)}
function Gf(a){if(a){if(Bf.g)return!1;if(S("botguard_periodic_refresh"))return 72E5<Af()-Df;if(S("botguard_always_refresh"))return Ef!=a}else return!1;return!Cf}
function Hf(){return!!Bf.f}
function If(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Bf.f?Bf.f.invoke(void 0,void 0,a):null}
;var Jf=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Jf},void 0);var Kf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Kf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Mf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Lf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Wa=A("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",Wa,void 0);var Nf=A("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",Nf,void 0);
function Of(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Va(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Ca(e[4])&&Ca(d)&&Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Pf=Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Of(a,b,c,d);if(e)return e;e=++Nf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Lf(h);if(!fc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Lf(h);
h.currentTarget=a;return c.call(a,h)};
g=de(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Pf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Wa[e]=[a,b,c,g,d];return e}
function Qf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Wa){var c=Wa[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Pf()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Wa[b]}}))}
;var Rf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Sf(a){this.A=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.F=V(window,"mousemove",B(this.G,this));a=B(this.B,this);Ba(a)&&(a=de(a));this.K=window.setInterval(a,25)}
E(Sf,M);Sf.prototype.G=function(a){x(a.f)||Mf(a);var b=a.f;x(a.g)||Mf(a);this.f=new Yb(b,a.g)};
Sf.prototype.B=function(){if(this.f){var a=Rf();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Sf.prototype.m=function(){window.clearInterval(this.K);Qf(this.F)};var Tf={};
function Uf(a){var b=void 0===a?{}:a;a=void 0===b.za?!0:b.za;b=void 0===b.Na?!1:b.Na;if(null==A("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Vf();V(document,"keydown",Vf);V(document,"keyup",Vf);V(document,"mousedown",Vf);V(document,"mouseup",Vf);a&&(b?V(window,"touchmove",function(){Wf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Wf("resize",200)}),V(window,"scroll",function(){Wf("scroll",200)})));
new Sf(function(){Wf("mouse",100)});
V(document,"touchstart",Vf,{passive:!0});V(document,"touchend",Vf,{passive:!0})}}
function Wf(a,b){Tf[a]||(Tf[a]=!0,pf(function(){Vf();Tf[a]=!1},b))}
function Vf(){null==A("_lact",window)&&Uf();var a=D();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Xf(){var a=A("_lact",window);return null==a?-1:Math.max(D()-a,0)}
;var Yf=Math.pow(2,16)-1,Zf=null,$f=0,ag={log_event:"events",log_interaction:"interactions"},bg=Object.create(null);bg.log_event="GENERIC_EVENT_LOGGING";bg.log_interaction="INTERACTION_LOGGING";var cg=new Set(["log_event"]),dg={},eg=0,fg=0,W=A("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",W,void 0);var gg=A("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",gg,void 0);var hg=A("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",hg,void 0);z("ytytLoggingTransportCapturedTime_",A("ytLoggingTransportCapturedTime_")||{},void 0);function ig(){U(eg);U(fg);fg=0;if(!Xa(W)){for(var a in W){var b=dg[a];b&&(jg(a,b),delete W[a])}Xa(W)||kg()}}
function kg(){S("web_gel_timeout_cap")&&!fg&&(fg=T(ig,6E4));U(eg);eg=T(ig,Q("LOGGING_BATCH_TIMEOUT",ne("web_gel_debounce_ms",1E4)))}
function lg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function jg(a,b){var c=ag[a],d=hg[a]||{};hg[a]=d;var e=Math.round(Af());for(l in W[a]){var f=ab,g=b.f;g={client:{hl:g.Ga,gl:g.Fa,clientName:g.Da,clientVersion:g.Ea,configInfo:g.Ca}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(g.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=lg(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=gg[l])a:{var k=
l;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:h}]}delete gg[l];f.requestTimeMs=e;if(g=Zd("EVENT_ID"))h=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Yf&&(h=1),P("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Zf&&$f&&S("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Zf,
roundtripMs:$f}),Zf=g,$f=0;mg(b,a,f,{retry:cg.has(a),onSuccess:B(ng,this,Af())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function ng(a){$f=Math.round(Af()-a)}
;var og=A("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",og,void 0);
function pg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Af());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Xf())};S("log_sequence_info_on_gel_web")&&d.O&&(a=e.context,b=d.O,og[b]=b in og?og[b]+1:0,a.sequence={index:og[b],groupKey:b},d.pb&&delete og[d.O]);(d=d.aa)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),gg[d.token]=a,d=lg("log_event",d.token)):d=lg("log_event");d.push(e);c&&(dg.log_event=new c);d.length>=(ne("web_logging_max_batch")||
100)?ig():kg()}
;function qg(a){this.f=a}
function rg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=rg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
qg.prototype.toString=function(){return JSON.stringify(rg(this))};
var sg=1;function tg(a,b,c){var d=ug;b={csn:a,parentVe:rg(b),childVes:La(c,function(f){return rg(f)})};
c=q(c);for(var e=c.next();!e.done;e=c.next())e=rg(e.value),(Xa(e)||!e.trackingParams&&!e.veType)&&Oe(Error("Child VE logged with no data"),"WARNING");c={aa:void 0,O:a};"UNDEFINED_CSN"==a?vg("visualElementAttached",b,c):pg("visualElementAttached",b,d,c)}
function vg(a,b,c){a={sb:a,payload:b,options:c};(b=Q("INTERACTIONS_LOGGER_QUEUE",void 0))?b.push(a):P("INTERACTIONS_LOGGER_QUEUE",[a])}
;function wg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mb||Q("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().lb:b=Ac([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function xg(a){a=Object.assign({},a);delete a.Authorization;var b=Ac();if(b){var c=new Qc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Aa(b);!1===c||void 0===c?c=0:!0===c&&(c=3);if(!Sb){Sb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Rb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Sb[k]&&(Sb[k]=h)}}}c=Rb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],
n=(f=e+1<b.length)?b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function yg(a,b,c,d){Ub.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function zg(){var a=new Od;(a=a.isAvailable()?new Ud(a,"yt.innertube"):null)||(a=new Pd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Kd(a):null;this.g=document.domain||window.location.hostname}
zg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(gd(b))}catch(f){return}else e=escape(b);yg(a,e,c,this.g)};
zg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ub.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ub.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ag=new zg;function Bg(a,b,c,d){if(d)return null;d=Ag.get("nextId",!0)||1;var e=Ag.get("requests",!0)||{};e[d]={method:a,request:b,authState:xg(c),requestTime:Math.round(Rf())};Ag.set("nextId",d+1,86400,!0);Ag.set("requests",e,86400,!0);return d}
function Cg(a){var b=Ag.get("requests",!0)||{};delete b[a];Ag.set("requests",b,86400,!0)}
function Dg(a){var b=Ag.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Rf())-d.requestTime)){var e=d.authState,f=xg(wg(!1));Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Rf())),mg(a,d.method,e,{}));delete b[c]}}Ag.set("requests",b,86400,!0)}}
;function ug(a){var b=this;this.f=a||{Aa:Zd("INNERTUBE_API_KEY"),Ba:Zd("INNERTUBE_API_VERSION"),Ca:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Da:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ea:Zd("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:Zd("INNERTUBE_CONTEXT_HL"),Fa:Zd("INNERTUBE_CONTEXT_GL"),Ha:Zd("INNERTUBE_HOST_OVERRIDE")||"",Ia:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};qf(function(){Dg(b)},0,5E3)}
function mg(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",D:c,la:"JSON",N:function(){d.N()},
ka:d.N,onSuccess:function(v,p){if(d.onSuccess)d.onSuccess(p)},
ja:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,p){if(d.onError)d.onError(p)},
rb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ha;g&&(f=g);g=a.f.Ia||!1;var h=wg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=he(""+f+("/youtubei/"+a.f.Ba+"/"+b),{alt:"json",key:a.f.Aa}),l;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Bg(b,c,h,g))){var n=e.onSuccess,r=e.ja;e.onSuccess=function(v,p){Cg(l);n(v,p)};
c.ja=function(v,p){Cg(l);r(v,p)}}try{S("use_fetch_for_op_xhr")?xe(k,e):Ge(k,e)}catch(v){if("InvalidAccessError"==v)l&&(Cg(l),l=0),R(Error("An extension is blocking network request."),"WARNING");
else throw v;}l&&qf(function(){Dg(a)},0,5E3)}
;var Eg=D().toString();
function Fg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Eg)for(a=1,b=0;b<Eg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Eg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Gg=A("ytLoggingTimeDocumentNonce_")||Fg();z("ytLoggingTimeDocumentNonce_",Gg,void 0);function Hg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ig(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Jg(a){return Q(Ig(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Jg,void 0);function Kg(){var a=Jg(0),b;a?b=new qg({veType:a,youtubeData:void 0}):b=null;return b}
function Lg(a){a=void 0===a?0:a;var b=Q(Hg(a));b||0!=a||(S("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Lg,void 0);function Mg(a,b,c){c=void 0===c?0:c;if(a!==Q(Hg(c))||b!==Q(Ig(c)))P(Hg(c),a),P(Ig(c),b),0==c&&(b=function(){setTimeout(function(){a&&pg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Gg,clientScreenNonce:a},ug)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
z("yt_logging_screen.setCurrentScreen",Mg,void 0);function Ng(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=K(L(3,window.location.href));g&&f.push(g);g=K(L(3,d));if(0<=Ja(f,g)||!g&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(f=document.createElement("a"),Hb(f,d),d=f.href),d){g=d.match(ic);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&(b.itct||b.ved)&&
(b.csn=b.csn||Lg()),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e="ST-"+Mb(d).toString(36),b=b?kc(b):"",yg(e,b,k||5))}else k="ST-"+Mb(d).toString(36),b=b?kc(b):"",yg(k,b,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var r=void 0===r?window:r;c=r.location;a=lc(a,l)+n;a=a instanceof I?a:xb(a);c.href=vb(a)}return!0}
;function Og(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||$a(b);this.assets=a.assets||{};this.attrs=a.attrs||$a(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Og.prototype.clone=function(){var a=new Og,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ya(c)?a[b]=$a(c):a[b]=c}return a};function Pg(){M.call(this);this.f=[]}
t(Pg,M);Pg.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.nb)}M.prototype.m.call(this)};var Qg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Rg(a){a=a||"";if(window.spf){var b=a.match(Qg);spf.style.load(a,b?b[1]:"",void 0)}else Sg(a)}
function Sg(a){var b=Tg(a),c=document.getElementById(b),d=c&&Te(c,"loaded");d||c&&!d||(c=Ug(a,b,function(){Te(c,"loaded")||(Re(c),bf(b),T(Ha(cf,b),0))}))}
function Ug(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gc(a);d.rel="stylesheet";d.href=jb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Tg(a){var b=document.createElement("A");a=yb(a);Hb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Mb(b)}
;function Vg(a,b){M.call(this);this.l=this.U=a;this.F=b;this.o=!1;this.api={};this.S=this.B=null;this.G=new O;Sc(this,Ha(Tc,this.G));this.i={};this.P=this.T=this.h=this.Z=this.f=null;this.K=!1;this.j=this.A=null;this.V={};this.qa=["onReady"];this.Y=null;this.ha=NaN;this.R={};Wg(this);this.W("WATCH_LATER_VIDEO_ADDED",this.Ka.bind(this));this.W("WATCH_LATER_VIDEO_REMOVED",this.La.bind(this));this.W("onAdAnnounce",this.sa.bind(this));this.ra=new Pg(this);Sc(this,Ha(Tc,this.ra))}
t(Vg,M);m=Vg.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.g){a instanceof Og||(a=new Og(a));this.Z=a;this.f=a.clone();this.h=this.f.attrs.id||this.h;"video-player"==this.h&&(this.h=this.F,this.f.attrs.id=this.F);this.l.id==this.h&&(this.h+="-player",this.f.attrs.id=this.h);this.f.args.enablejsapi="1";this.f.args.playerapiid=this.F;this.T||(this.T=Xg(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=tc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=
tc(Number(a)||a);Yg(this);this.o&&Zg(this)}};
m.va=function(){return this.Z};
function Zg(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function $g(a){var b=!0,c=ah(a);c&&a.f&&(a=a.f,b=Te(c,"version")==a.assets.js);return b&&!!A("yt.player.Application.create")}
function Yg(a){if(!a.g&&!a.K){var b=$g(a);if(b&&"html5"==(ah(a)?"html5":null))a.P="html5",a.o||bh(a);else if(ch(a),a.P="html5",b&&a.j)a.U.appendChild(a.j),bh(a);else{a.f.loaded=!0;var c=!1;a.A=function(){c=!0;var d=a.f.clone();A("yt.player.Application.create")(a.U,d);bh(a)};
a.K=!0;b?a.A():(gf(a.f.assets.js,a.A),Rg(a.f.assets.css),dh(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function ah(a){var b=$b(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function bh(a){if(!a.g){var b=ah(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&b.isNotServable(a.f.args.video_id)||eh(a)):a.ha=T(function(){bh(a)},50)}}
function eh(a){Wg(a);a.o=!0;var b=ah(a);b.addEventListener&&(a.B=fh(a,b,"addEventListener"));b.removeEventListener&&(a.S=fh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=fh(a,b,e))}for(var f in a.i)a.B(f,a.i[f]);Zg(a);a.T&&a.T(a.api);a.G.L("onReady",a.api)}
function fh(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,ee(e))}}}
function Wg(a){a.o=!1;if(a.S)for(var b in a.i)a.S(b,a.i[b]);for(var c in a.R)U(parseInt(c,10));a.R={};a.B=null;a.S=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.W.bind(a);a.api.removeEventListener=a.Pa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.wa.bind(a);a.api.getPlayerType=a.xa.bind(a);a.api.getCurrentVideoConfig=a.va.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ja.bind(a)}
m.Ja=function(){return this.o};
m.W=function(a,b){var c=this,d=Xg(this,b);if(d){if(!(0<=Ja(this.qa,a)||this.i[a])){var e=gh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.o&&T(function(){d(c.api)},0)}};
m.Pa=function(a,b){if(!this.g){var c=Xg(this,b);c&&Ed(this.G,a,c)}};
function Xg(a,b){var c=b;if("string"==typeof b){if(a.V[b])return a.V[b];c=function(){var d=A(b);d&&d.apply(w,arguments)};
a.V[b]=c}return c?c:null}
function gh(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;w[c]=function(d){var e=T(function(){if(!a.g){a.G.L(b,d);var f=a.R,g=String(e);g in f&&delete f[g]}},0);
Ya(a.R,String(e))};
return c}
m.sa=function(a){bf("a11y-announce",a)};
m.Ka=function(a){bf("WATCH_LATER_VIDEO_ADDED",a)};
m.La=function(a){bf("WATCH_LATER_VIDEO_REMOVED",a)};
m.xa=function(){return this.P||(ah(this)?"html5":null)};
m.wa=function(){return this.Y};
function ch(a){a.cancel();Wg(a);a.P=null;a.f&&(a.f.loaded=!1);var b=ah(a);b&&($g(a)||!dh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.U;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&nf(this.f.assets.js,this.A);U(this.ha);this.K=!1};
m.m=function(){ch(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){R(b)}this.V=null;for(var a in this.i)w[this.i[a]]=null;this.Z=this.f=this.api=null;delete this.U;delete this.l;M.prototype.m.call(this)};
function dh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var hh={},ih="player_uid_"+(1E9*Math.random()>>>0);function jh(a){var b="player";b=y(b)?$b(b):b;var c=ih+"_"+(b[Da]||(b[Da]=++Ea)),d=hh[c];if(d)return d.loadNewVideoConfig(a),d.api;d=new Vg(b,c);hh[c]=d;bf("player-added",d.api);Sc(d,Ha(kh,d));T(function(){d.loadNewVideoConfig(a)},0);
return d.api}
function kh(a){delete hh[a.getId()]}
;function lh(a,b,c){c=void 0===c?{}:c;var d=ug;Q("ytLoggingEventsDefaultDisabled",!1)&&ug==ug&&(d=null);pg(a,b,d,c)}
;var mh=A("ytLoggingLatencyUsageStats_")||{};z("ytLoggingLatencyUsageStats_",mh,void 0);var nh=0;function oh(a){mh[a]=mh[a]||{count:0};var b=mh[a];b.count++;b.time=Af();nh||(nh=qf(ph,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Oe(c,b)}return!0}return!1}
function ph(){var a=Af(),b;for(b in mh)6E4<a-mh[b].time&&delete mh[b];nh=0}
;function qh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!rh(a)||c.some(function(e){return!rh(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())sh(a,d.value)}
function sh(a,b){for(var c in b)if(rh(b[c])){if(c in a&&!rh(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});sh(a[c],b[c])}else if(th(b[c])){if(c in a&&!th(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);uh(a[c],b[c])}else a[c]=b[c];return a}
function uh(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,rh(d)?a.push(sh({},d)):th(d)?a.push(uh([],d)):a.push(d);return a}
function rh(a){return"object"===typeof a&&!Array.isArray(a)}
function th(a){return"object"===typeof a&&Array.isArray(a)}
;function vh(a,b){this.version=a;this.args=b}
;function wh(a){this.topic=a}
wh.prototype.toString=function(){return this.topic};var xh=A("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.M;O.prototype.publish=O.prototype.L;O.prototype.clear=O.prototype.clear;z("ytPubsub2Pubsub2Instance",xh,void 0);z("ytPubsub2Pubsub2SubscribedKeys",A("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);z("ytPubsub2Pubsub2TopicToKeys",A("ytPubsub2Pubsub2TopicToKeys")||{},void 0);z("ytPubsub2Pubsub2IsAsync",A("ytPubsub2Pubsub2IsAsync")||{},void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function yh(a,b){var c=A("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function zh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function Ah(){var a=zh(),b;for(b in a)sf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Bh(a,b){vh.call(this,1,arguments)}
t(Bh,vh);function Ch(a,b){vh.call(this,1,arguments)}
t(Ch,vh);var Dh=new wh("aft-recorded"),Eh=new wh("timing-sent");var Fh={vc:!0},Y={},Gh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",
Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt="playbackRequiresTap",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre=
"playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Hh="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Ih="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Jh={},Kh=(Jh.mver="MEASUREMENT_VERSION_",Jh.pis="PLAYER_INITIALIZED_STATE_",Jh.yt_pt="LATENCY_PLAYER_",Jh.pa="LATENCY_ACTION_",Jh.yt_vst="VIDEO_STREAM_TYPE_",Jh),Lh=!1;
function Mh(){Nh().info.yt_lt="hot_bg";if(Oh()){var a="hot_bg",b=Ph();(b.gelInfos?b.gelInfos:b).info_yt_lt=!0;if("yt_lt"in Gh){var c=Gh.yt_lt;0<=Ja(Ih,c)&&(a=!!a);"yt_lt"in Kh&&(a=Kh.yt_lt+a.toUpperCase());b={};c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];d[c[c.length-1]]=a;Oh()&&(a=Nh(),"gelInfo"in a||(a.gelInfo={}),qh(a.gelInfo,b),a=Qh(),c=Object.keys(b).join(""),oh("info_"+c+"_"+a)||(b.clientActionNonce=a,lh("latencyActionInfo",b)))}else 0<=Ja(Hh,"yt_lt")||(b=Error("Unknown label logged with GEL CSI"),
b.params="yt_lt",ee(b))}}
function Rh(){var a=Sh();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
B(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||wa,X);function Qh(){var a=Nh().nonce;a||(a=Fg(),Nh().nonce=a);return a}
function Sh(){return Nh().tick}
function Ph(){var a=Nh();"gel"in a||(a.gel={});return a.gel}
function Nh(){var a;(a=A("ytcsi.data_"))||(a={tick:{},info:{}},Ia("ytcsi.data_",a));return a}
function Th(){var a=Sh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Nh().info.yt_pvis}
function Oh(){return!!S("csi_on_gel")||!!Nh().useGel}
function Uh(){Ah();if(!Oh()){var a=Sh(),b=Nh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&za(a[f])){var d=f.slice(1);if(d in Fh){var e=La(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=Q("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:Q("TIMING_ACTION",void 0)};d=Mh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+A("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Rh();Th()&&"youtube"==e&&(Mh(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var h in b)"_"!=h.charAt(0)&&(f[h]=b[h]);a.ps=Rf();h={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(g=Math.round(a[k]-c),h[k]=g,e.push(k+"."+g));f.rt=e.join(",");(a=A("ytdebug.logTiming"))&&a(f,h);Vh(f,!!b.ap);yh(Eh,new Ch(h.aft+(d||0),void 0))}}
function Vh(a,b){if(S("debug_csi_data")){var c=A("yt.timing.csiData");c||(c=[],z("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Ke(d,e)||Je(d,void 0,void 0,void 0,e)}else Je(d);Ia("yt.timing.pingSent_",!0)}
;function Wh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Xh(a,b,c){y(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Yh(a)}
function Yh(a,b,c){if(Ca(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Zh(a,b,c,d){if(Ca(a)&&!za(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};y(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function $h(a){M.call(this);this.f=a;this.f.subscribe("command",this.ma,this);this.h={};this.j=!1}
E($h,M);m=$h.prototype;m.start=function(){this.j||this.g||(this.j=!0,ai(this.f,"RECEIVING"))};
m.ma=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":y(d.event)&&(a=d.event,a in this.h||(c=B(this.Ra,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":y(d.event)&&bi(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=ci(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=di(a,c))&&this.j&&!this.g&&ai(this.f,a,c))}}};
m.Ra=function(a,b){this.j&&!this.g&&ai(this.f,a,this.ca(a,b))};
m.ca=function(a,b){if(null!=b)return{value:b}};
function bi(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||Ed(a.f,"command",this.ma,this);this.f=null;for(var b in this.h)bi(this,b);$h.C.m.call(this)};function ei(a,b){$h.call(this,b);this.i=a;this.start()}
E(ei,$h);ei.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
ei.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function ci(a,b){switch(a){case "loadVideoById":return b=Yh(b),[b];case "cueVideoById":return b=Yh(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Zh(b),[b];case "cuePlaylist":return b=Zh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function di(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ei.prototype.ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ei.C.ca.call(this,a,b)};
ei.prototype.m=function(){ei.C.m.call(this);delete this.i};function fi(a,b,c){M.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.A="*";this.i=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.o=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h)&&y(e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.A=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ja(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.o)}
t(fi,M);fi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.A)}catch(e){R(e,"WARNING")}}};
fi.prototype.m=function(){window.removeEventListener("message",this.o);M.prototype.m.call(this)};function gi(){var a=this.g=new fi(!!Q("WIDGET_ID_ENFORCE")),b=B(this.Oa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=gi.prototype;m.Oa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,hi(this,a)),this.j[a]=!0)):this.oa(a,b,c)};
m.oa=function(){};
function hi(a,b){return B(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.ua=function(){this.l=!0;this.sendMessage("initialDelivery",this.da());this.sendMessage("onReady");H(this.i,this.na,this);this.i=[]};
m.da=function(){return null};
function ii(a,b){a.sendMessage("infoDelivery",b)}
m.na=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.na({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function ji(a){gi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",B(this.Ma,this));this.addEventListener("onVideoProgress",B(this.Va,this));this.addEventListener("onVolumeChange",B(this.Wa,this));this.addEventListener("onApiChange",B(this.Qa,this));this.addEventListener("onPlaybackQualityChange",B(this.Sa,this));this.addEventListener("onPlaybackRateChange",B(this.Ta,this));this.addEventListener("onStateChange",B(this.Ua,this));this.addEventListener("onWebglSettingsChanged",B(this.Xa,
this))}
E(ji,gi);m=ji.prototype;m.oa=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Wh(a)){var d=b;if(Ca(d[0])&&!za(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Yh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Xh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Zh.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Wh(a)&&ii(this,this.da())}};
m.Ma=function(){var a=B(this.ua,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.da=function(){if(!this.f)return null;var a=this.f.getApiInterface();Pa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.f[e]();b[f]=h}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
m.Ua=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());ii(this,a)};
m.Sa=function(a){ii(this,{playbackQuality:a})};
m.Ta=function(a){ii(this,{playbackRate:a})};
m.Qa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Wa=function(){ii(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Va=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());ii(this,a)};
m.Xa=function(){var a={sphericalProperties:this.f.getSphericalProperties()};ii(this,a)};
m.dispose=function(){ji.C.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function ki(a){a=void 0===a?!1:a;M.call(this);this.f=new O(a);Sc(this,Ha(Tc,this.f))}
E(ki,M);ki.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
ki.prototype.j=function(a,b){this.g||this.f.L.apply(this.f,arguments)};function li(a,b,c){ki.call(this);this.h=a;this.i=b;this.l=c}
E(li,ki);function ai(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(gd(a),d.i))}}
li.prototype.m=function(){this.i=this.h=null;li.C.m.call(this)};function mi(a,b,c){M.call(this);this.f=a;this.i=c;this.j=V(window,"message",B(this.l,this));this.h=new li(this,a,b);Sc(this,Ha(Tc,this.h))}
E(mi,M);mi.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,y(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
mi.prototype.m=function(){Qf(this.j);this.f=null;mi.C.m.call(this)};function ni(){var a=$a(oi),b;return td(new N(function(c,d){a.onSuccess=function(e){qe(e)?c(e):d(new pi("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new pi("Unknown request error","net.unknown",e))};
a.N=function(e){d(new pi("Request timed out","net.timeout",e))};
b=Ae("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ud&&b.abort();
return rd(c)})}
function pi(a,b){G.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(pi,G);function qi(){this.g=0;this.f=null}
qi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),md(a)?a:ri(a)):2===this.g&&b?(a=b.call(c,this.f),md(a)?a:si(a)):this};
qi.prototype.getValue=function(){return this.f};
qi.prototype.$goog_Thenable=!0;function si(a){var b=new qi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function ri(a){var b=new qi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function ti(a){G.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ui;this.isTimeout=a instanceof pi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ud}
t(ti,G);ti.prototype.name="BiscottiError";function ui(){G.call(this,"Biscotti ID is missing from server")}
t(ui,G);ui.prototype.name="BiscottiMissingError";var oi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vi=null;function be(){if("1"===Ua($d(),"args","privembed"))return rd(Error("Biscotti ID is not available in private embed mode"));vi||(vi=td(ni().then(wi),function(a){return xi(2,a)}));
return vi}
function wi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ui;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ui;a=a.id;ce(a);vi=ri(a);yi(18E5,2);return a}
function xi(a,b){var c=new ti(b);ce("");vi=si(c);0<a&&yi(12E4,a-1);throw c;}
function yi(a,b){T(function(){td(ni().then(wi,function(c){return xi(b,c)}),wa)},a)}
function zi(){try{var a=A("yt.ads.biscotti.getId_");return a?a():be()}catch(b){return rd(b)}}
;function Ai(a){if("1"!==Ua($d(),"args","privembed")){a&&ae();try{zi().then(function(b){S("pass_biscotti_id_in_header_ajax_tv")||S("pass_biscotti_id_in_header_ajax")||(b=je(b),b.bsq=Bi++,Ge("//www.youtube.com/ad_data_204",{ya:!1,D:b,withCredentials:!0}))},function(){}),T(Ai,18E5)}catch(b){R(b)}}}
var Bi=0;var Z=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ci(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Ub.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=Ci.prototype;m.get=function(a,b){Di(a);Ei(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Di(a);Ei(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Di(a);Ei(a);delete Z[a]};
m.save=function(){yg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ei(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Di(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Fi(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
xa(Ci);var Gi=null,Hi=null,Ii=null,Ji={};function Ki(a){var b=a.id;a=a.ve_type;var c=sg++;a=new qg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Ji[b]=a;b=Lg();c=Kg();b&&c&&tg(b,c,[a])}
function Li(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Mg(b,a),a=Kg()))for(var c in Ji){var d=Ji[c];d&&tg(b,a,[d])}}
function Mi(a){Ji[a.id]=new qg({trackingParams:a.tracking_params})}
function Ni(a){var b=Lg(),c=Ji[a.id];if(b&&c){a=ug;c={csn:b,ve:rg(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={aa:void 0,O:b};"UNDEFINED_CSN"==b?vg("visualElementGestured",c,d):pg("visualElementGestured",c,a,d)}}
function Oi(a){a=a.ids;var b=Lg();if(b)for(var c=0;c<a.length;c++){var d=Ji[a[c]];if(d){var e=ug;d={csn:b,ve:rg(d),eventType:1};var f={aa:void 0,O:b};"UNDEFINED_CSN"==b?vg("visualElementShown",d,f):pg("visualElementShown",d,e,f)}}}
;z("yt.setConfig",P,void 0);z("yt.config.set",P,void 0);z("yt.setMsg",Qe,void 0);z("yt.msgs.set",Qe,void 0);z("yt.logging.errors.log",Oe,void 0);
z("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Ai(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Gi=a=jh(a);a.addEventListener("onScreenChanged",Li);a.addEventListener("onLogClientVeCreated",Ki);a.addEventListener("onLogServerVeCreated",Mi);a.addEventListener("onLogVeClicked",Ni);a.addEventListener("onLogVesShown",
Oi);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Ii=new ji(a):Q("ENABLE_POST_API")&&y(b)&&y(c)&&(Hi=new mi(window.parent,b,c),Ii=new ei(a,Hi.h));c=Zd("BG_P");Gf(c)&&(Q("BG_I")||Q("BG_IU"))&&(Cf=!0,Bf.initialize(Q("BG_I",null),Q("BG_IU",null),c,Ff,void 0));vf()},void 0);
z("yt.www.watch.ads.restrictioncookie.spr",function(a){Je(a+"mac_204?action_fcts=1");return!0},void 0);
var Pi=de(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Sh();var b=Rf();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=zh();if(b=a.ol)sf(b),a.ol=0;a=Ph();(a.gelTicks?a.gelTicks:a).tick_ol=!0;Rf();Oh()?(a=Qh(),oh("tick_ol_"+a)||lh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},{timestamp:void 0}),a=!0):a=!1;if(a=!a)a=!A("yt.timing.pingSent_");if(a&&(b=Q("TIMING_ACTION",void 0),a=Sh(),A("ytglobal.timingready_")&&b&&a._start&&(b=Rh()))){Lh||(yh(Dh,
new Bh(Math.round(b-a._start),void 0)),Lh=!0);b=!0;var c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Uh()}a=Ci.getInstance();c=!!((Fi("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&Wc(document.body,"exp-invert-logo")&&(b&&!Wc(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):Wc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&
Wc(document.body,"inverted-hdpi")&&Xc());c!=b&&(c="f"+(Math.floor(119/31)+1),d=Fi(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),Qi=de(function(){var a=Gi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Bf.dispose();a=0;for(var b=tf.length;a<b;a++)sf(tf[a]);tf.length=0;mf("//static.doubleclick.net/instream/ad_status.js");uf=!1;P("DCLKSTAT",0);Uc(Ii,Hi);if(a=Gi)a.removeEventListener("onScreenChanged",Li),a.removeEventListener("onLogClientVeCreated",Ki),a.removeEventListener("onLogServerVeCreated",Mi),a.removeEventListener("onLogVeClicked",Ni),a.removeEventListener("onLogVesShown",Oi),a.destroy();Ji={}});
window.addEventListener?(window.addEventListener("load",Pi),window.addEventListener("unload",Qi)):window.attachEvent&&(window.attachEvent("onload",Pi),window.attachEvent("onunload",Qi));Ia("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Hf);Ia("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||If);Ia("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||wf);
Ia("yt.player.exports.navigate",A("yt.player.exports.navigate")||Ng);Ia("yt.util.activity.init",A("yt.util.activity.init")||Uf);Ia("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Xf);Ia("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Vf);}).call(this);
