parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SjoH":[function(require,module,exports) {
"use strict";function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,void 0):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.useState=d,exports.useReducer=exports.render=exports.m=void 0;var n=Math.random().toString(36).substr(2,5);function o(t){var e=new RegExp("^"+t+"$","i");return["path","svg","use","g"].some(function(t){return e.test(t)})}function i(t){return Object.keys(t).map(function(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()+": "+t[e]}).join(";")}var a,u,c=function(e,a){var u=[].slice.call(arguments,2);if(Array.isArray(a)?u=a:"string"==typeof a&&u.push(a),"input"!==e||a.hasOwnProperty("id")||(a=t({},a,{id:"input__"+n})),"function"==typeof e)return e(a,u);if("x"===e)return u;if("object"==typeof a)for(var c in a){a[c.toLocaleLowerCase().replace("class","className")]=a[c]}var s=Object.assign(document.createElement(e),"object"==typeof a?a:{});if(o(e))for(var l in s=document.createElementNS("http://www.w3.org/2000/svg",e),a)a.hasOwnProperty(l)&&s.setAttribute(l,a[l]);a&&a.hasOwnProperty("style")&&(s.style=i(a.style));for(var f,p=r(u.filter(function(t){return"boolean"!=typeof t}));!(f=p()).done;){var d,y=f.value;Array.isArray(y)?(d=s).append.apply(d,y):s.append(y)}return s},s=function(t,e){a=t,u=e,l(t,e())},l=function(t,e){for(var r=(document.activeElement||{id:""}).id,n=Array.prototype.map.call(document.querySelectorAll("[id]"),function(t){return{id:t.id,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,selectionDirection:t.selectionDirection,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}});t.firstChild;)t.removeChild(t.firstChild);return t.append.apply(t,Array.isArray(e)?e:[e]),n.forEach(function(t){var e=document.getElementById(t.id);e&&(t.id===r&&e.focus(),Object.assign(e,t))}),!0},f={},p=0;function d(t){var e=p;p++;var r={};return r[e]=f[e]||t,[r[e],function(t){f[e]="function"==typeof t?t(r[e]):t,r[e]=f[e],p=0,s(a,u)}]}exports.render=s,exports.m=c;var y=function(t){var e,r=[],n=function(n){e=t(e,n),r.forEach(function(t){return t()})};return n({}),{getState:function(){return e},dispatch:n,subscribe:function(t){return r.push(t),function(){r=r.filter(function(e){return e!==t})}}}};exports.useReducer=y;
},{}],"FJE9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=function(t){return t.replace(/\/$/,"").replace(/^\//,"")};function n(n){var e=this;if(this.t=[],this.i=null,this.o=null,this.u=null,this.add=function(n,o){n="/"===n?"^/?$":new RegExp(t(n)+"$"),e.t.push({path:n,component:o})},this.s=function(t,n){var o=function(){return t(n)};"function"==typeof o().then?(e.i&&e.u(e.o,e.i),o().then(function(t){e.u(e.o,t.default)})):e.u(e.o,o)},this.listen=function(){var n,o=(n=window.location.href.match(/#!(.*)$/),t(n?n[1]:""));e.t.some(function(t){var n=t.component,r=o.match(t.path);return!!r&&(r.shift(),e.s(n,r),r)})},!n.mount)throw Error('[Router] "mount" point is missing');if(!n.render)throw Error('[Router] "render" func is missing');this.o=document.querySelector(n.mount),this.u=n.render,n.preloader&&(this.i=n.preloader),window.addEventListener("popstate",function(){return e.listen()})}
},{}],"ZeoQ":[function(require,module,exports) {

},{}],"qhLw":[function(require,module,exports) {
module.exports="undraw_cooking_lyxy.b93032c0.svg";
},{}],"ZVtF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("minite");function r(t,r){return i(t)||a(t,r)||n(t,r)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}}function i(t){if(Array.isArray(t))return t}var u=function(e,n){var o=r(n,1)[0],a=e.url,i=e.title,u=e.className;return(0,t.m)("a",{href:"#!".concat(a),title:i,className:u},o)};exports.default=u;
},{"minite":"SjoH"}],"ncNo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=require("minite");require("./style.css");var e=l(require("../../assets/images/undraw_cooking_lyxy.svg")),u=l(require("../../components/link"));function l(a){return a&&a.__esModule?a:{default:a}}var r=function(){return(0,a.m)("section",null,(0,a.m)("h1",null,"Selamat datang!"),(0,a.m)("div",{style:{"padding-right":"5vw"}},(0,a.m)("p",null,"Halo kak! yuk nyemil disini, nggak perlu ribet mikrin keluar rumah karena nanti kita yang antar."),(0,a.m)("p",null,"Sebelum itu sebaiknya kenalan dulu deh biar nanti kita bisa mabar bro, yahaha hayuukk! cukup masuk lewat tombol ",(0,a.m)("strong",null,"Masuk")," aja loh yahaha..")),(0,a.m)(u.default,{className:"masuk",url:"/menu"},"Masuk"),(0,a.m)("img",{className:"vector",src:e.default,alt:"Ilustrasi"}))},t=r;exports.default=t;
},{"minite":"SjoH","./style.css":"ZeoQ","../../assets/images/undraw_cooking_lyxy.svg":"qhLw","../../components/link":"ZVtF"}],"D1Gm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("minite"),t=function(){return{view:function(){return(0,e.m)("section",null,(0,e.m)("h1",null,"Tidak ditemukan"))}}};exports.default=t;
},{"minite":"SjoH"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"epB2":[function(require,module,exports) {
"use strict";var e=require("minite"),r=t(require("minite/router")),u=t(require("./pages/home")),d=t(require("./pages/404"));function t(e){return e&&e.__esModule?e:{default:e}}var n=new r.default({render:e.render,mount:"#app"});n.add("/",u.default),n.add("/menu",function(){return require("_bundle_loader")(require.resolve("./pages/menu/index"))}),n.add("",d.default),n.listen(),module.hot&&module.hot.accept();
},{"minite":"SjoH","minite/router":"FJE9","./pages/home":"ncNo","./pages/404":"D1Gm","_bundle_loader":"TUK3","./pages/menu/index":[["menu.aa587e0a.js","k0zt"],"menu.aa587e0a.js.map","menu.794d25d4.css",["undraw_empty_cart_co35.1d24cfe4.svg","SXo6"],"k0zt"]}],"dZuk":[function(require,module,exports) {
module.exports=function(e){return new Promise(function(n,o){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onerror=function(e){r.onerror=r.onload=null,o(e)},r.onload=function(){r.onerror=r.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("css",require("dZuk"));b.register("js",require("Yi9z"));
},{}]},{},[0,"epB2"], null)
//# sourceMappingURL=main.f22271e5.js.map