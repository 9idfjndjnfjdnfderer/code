(function(e){function n(n){for(var r,a,u=n[0],i=n[1],f=n[2],h=0,d=[];h<u.length;h++)a=u[h],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16a4b440":"9825ba20","chunk-21988fee":"e15c9268","chunk-229601f0":"be96443f","chunk-282ec011":"16a0aae0","chunk-2d0ae8ea":"69a4a639","chunk-2d22ca34":"63ae2474","chunk-4113357f":"8b55271c","chunk-4fe3fbac":"9a3ac84b","chunk-535033df":"4e19bf15","chunk-66e60f48":"6626c44f","chunk-6a6e2558":"71453ce5","chunk-96a6f368":"6bf2350f","chunk-ab546c26":"857b4fca","chunk-d010fba4":"be49e8e9","chunk-d057be32":"94c87e47","chunk-ed83a42c":"0ac1eb05","chunk-fc0c8e20":"320d7d24"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-21988fee":1,"chunk-229601f0":1,"chunk-282ec011":1,"chunk-4113357f":1,"chunk-535033df":1,"chunk-66e60f48":1,"chunk-6a6e2558":1,"chunk-96a6f368":1,"chunk-ab546c26":1,"chunk-d010fba4":1,"chunk-d057be32":1,"chunk-fc0c8e20":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-16a4b440":"31d6cfe0","chunk-21988fee":"b346bfa6","chunk-229601f0":"3ceae151","chunk-282ec011":"e893e041","chunk-2d0ae8ea":"31d6cfe0","chunk-2d22ca34":"31d6cfe0","chunk-4113357f":"763ed087","chunk-4fe3fbac":"31d6cfe0","chunk-535033df":"c9fc7e23","chunk-66e60f48":"e6145802","chunk-6a6e2558":"22da27f1","chunk-96a6f368":"71f914f8","chunk-ab546c26":"4f85d34d","chunk-d010fba4":"fca5bb89","chunk-d057be32":"22da27f1","chunk-ed83a42c":"31d6cfe0","chunk-fc0c8e20":"804fd69a"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var f=o[u],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===r||h===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){f=d[u],h=f.getAttribute("data-href");if(h===r||h===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],s.parentNode.removeChild(s),t(o)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e);var d=new Error;f=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}c[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var s=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3e56":function(e,n,t){"use strict";var r=t("a20a");n["a"]={login:function(e){return Object(r["a"])().post("login",e)},resendEmail:function(e){return Object(r["a"])().post("resend-email",e)},activateAccount:function(e){return Object(r["a"])().post("activate-account",e)},forgotPassword:function(e){return Object(r["a"])().post("forgot-password",e)},changePasswordAuth:function(e){return Object(r["a"])().post("change-password-auth",e)},changePassword:function(e){return e.token=localStorage.getItem("token"),Object(r["a"])().post("change-password",e)},getUser:function(){var e={token:localStorage.getItem("token")};return Object(r["a"])().post("get-user",e)}}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("4d90"),t("d3b7"),t("25f0");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],o=t("2877"),u={},i=Object(o["a"])(u,a,c,!1,null,null,null),f=i.exports,h=t("1da1"),d=(t("96cf"),t("3ca3"),t("ddb0"),t("ac1f"),t("1276"),t("8c4f")),s=t("3e56"),p=function(){return t.e("chunk-ab546c26").then(t.bind(null,"0f5e"))},l=function(){return t.e("chunk-4113357f").then(t.bind(null,"cc00"))},m=function(){return t.e("chunk-282ec011").then(t.bind(null,"b47f"))},b=function(){return t.e("chunk-535033df").then(t.bind(null,"9430"))},k=function(){return t.e("chunk-fc0c8e20").then(t.bind(null,"048c"))},g=function(){return t.e("chunk-d010fba4").then(t.bind(null,"e58a"))},v=function(){return t.e("chunk-96a6f368").then(t.bind(null,"5c0c"))},y=function(){return t.e("chunk-4fe3fbac").then(t.bind(null,"c030"))},w=function(){return t.e("chunk-66e60f48").then(t.bind(null,"30dc"))},j=function(){return t.e("chunk-16a4b440").then(t.bind(null,"58d7"))},O=function(){return t.e("chunk-2d0ae8ea").then(t.bind(null,"0b24"))},_=function(){return t.e("chunk-229601f0").then(t.bind(null,"a56a"))},S=function(){return t.e("chunk-6a6e2558").then(t.bind(null,"1adb"))},x=function(){return t.e("chunk-d057be32").then(t.bind(null,"2683"))},P=function(){return t.e("chunk-2d22ca34").then(t.bind(null,"f3a2"))},A=function(){return t.e("chunk-ed83a42c").then(t.bind(null,"d226"))},E=function(){return t.e("chunk-21988fee").then(t.bind(null,"ebe2"))};r["a"].use(d["a"]);var C=[{path:"",name:"home",component:p,children:[{path:"",name:"main",component:l},{path:"terms_conditions",name:"terms_conditions",component:m},{path:"terms_conditions_drivers",name:"terms_conditions_drivers",component:b}]},{path:"/auth",name:"auth",component:k,children:[{path:"",redirect:"login"},{path:"login",name:"login",component:g},{path:"register",name:"register",component:v},{path:"send-email/:email",name:"send-email",component:y},{path:"forgot-password",name:"forgot-password",component:w},{path:"change-password/:email/:token",name:"change-password",component:j}]},{path:"/cms",name:"cms",component:O,meta:{requiresAuth:!0},children:[{path:"",name:"training-program",component:_},{path:"drivers",name:"drivers",component:S},{path:"setting",name:"setting",component:x,children:[{path:"",name:"WhatsApp Group",component:A},{path:"presentation-video",name:"Presentation Video",component:E},{path:"change-password",name:"Change Password",component:P}]}]}],T=new d["a"]({routes:C,scrollBehavior:function(e,n,t){return t||{x:0,y:0}}});T.beforeEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(n,t,a){var c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.matched.some((function(e){return e.meta.requiresAuth}))){e.next=14;break}if(n.path.split("/")[1],void 0==localStorage.getItem("token")){e.next=11;break}return e.next=5,s["a"].getUser();case 5:c=e.sent,o=c.data,console.log(c.data),null!=o?a():location.href=r["a"].prototype.domain,e.next=12;break;case 11:location.href=r["a"].prototype.domain;case 12:e.next=15;break;case 14:a();case 15:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}());var L=T;r["a"].prototype.backend="http://easymotoyatrainingprogram.com/backend/api/",r["a"].prototype.domain="http://easymotoyatrainingprogram.com",r["a"].config.productionTip=!1,r["a"].prototype.dateFormat=function(e){var n=new Date(e),t=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getDate().toString().padStart(2,"0"),a=n.getFullYear();return r+"/"+t+"/"+a},new r["a"]({router:L,render:function(e){return e(f)}}).$mount("#app")},a20a:function(e,n,t){"use strict";var r=t("bc3a"),a=t.n(r),c=t("2b0e");n["a"]=function(){return a.a.create({baseURL:c["a"].prototype.backend,headers:{Accept:"application/json","Content-Type":"application/json"}})}}});
//# sourceMappingURL=app.22e2d6b8.js.map