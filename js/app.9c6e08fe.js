(function(t){function e(e){for(var a,r,u=e[0],l=e[1],i=e[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function u(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f83a2513","chunk-2d21e38c":"eed864a0"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"cad31ac4","chunk-2d21e38c":"31d6cfe0"}[t]+".css",o=l.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===a||s===o))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===a||s===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(t);var d=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/amba-web-analysisfrontend/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("cf05"),o=n.n(r),c={class:"layout-topbar p-d-flex p-shadow-3  p-jc-between  p-ai-center"},u={class:"logo-link"},l=Object(a["j"])("img",{alt:"logo",src:o.a},null,-1),i=Object(a["j"])("div",{class:"p-text-bold p-text-uppercase"},"Amba Twitter Analysis",-1),s={class:"p-menuitem-text"},d={class:"layout-content"};function f(t,e,n,r,o,f){var b=Object(a["A"])("router-link"),p=Object(a["A"])("Menubar"),g=Object(a["A"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["j"])("div",c,[Object(a["j"])("div",u,[Object(a["j"])(b,{to:"/",class:"logo p-d-flex p-ai-center"},{default:Object(a["I"])((function(){return[l,i]})),_:1})]),Object(a["j"])(p,{model:o.items},{item:Object(a["I"])((function(t){var e=t.item;return[Object(a["j"])(b,{to:e.to,class:"p-d-flex p-ai-center p-menuitem-link"},{default:Object(a["I"])((function(){return[Object(a["j"])("span",s,Object(a["E"])(e.label),1)]})),_:2},1032,["to"])]})),_:1},8,["model"])]),Object(a["j"])("div",d,[Object(a["j"])(g)])],64)}n("159b"),n("b0c0");var b={created:function(){var t=this;this.$router.options.routes.forEach((function(e){t.items.push({label:e.name,to:e.path,icon:e.icon})}))},data:function(){return{items:[]}}};n("80e4");b.render=f;var p=b,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h={class:"p-grid"},j={class:"p-col-3"},v=Object(a["i"])(" Types "),O={class:"p-col-3"},m=Object(a["i"])(" Sources "),y={class:"p-col-3"},k=Object(a["i"])(" Languages "),w={class:"p-col-3"},C=Object(a["i"])(" Hashtags "),_={class:"p-col-6"},A=Object(a["i"])(" Time of Day "),I={class:"p-col-3"},x=Object(a["i"])(" Entities ");function P(t,e,n,r,o,c){var u=Object(a["A"])("publication-donut-chart"),l=Object(a["A"])("Card");return Object(a["s"])(),Object(a["f"])("div",h,[Object(a["j"])("div",j,[Object(a["j"])(l,null,{title:Object(a["I"])((function(){return[v]})),content:Object(a["I"])((function(){return[Object(a["j"])(u)]})),_:1})]),Object(a["j"])("div",O,[Object(a["j"])(l,null,{title:Object(a["I"])((function(){return[m]})),content:Object(a["I"])((function(){return[Object(a["j"])(u,{getter:c.sourceGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",y,[Object(a["j"])(l,null,{title:Object(a["I"])((function(){return[k]})),content:Object(a["I"])((function(){return[Object(a["j"])(u,{getter:c.langGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",w,[Object(a["j"])(l,null,{title:Object(a["I"])((function(){return[C]})),content:Object(a["I"])((function(){return[Object(a["j"])(u,{getter:c.hashtagsGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",_,[Object(a["j"])(l,null,{title:Object(a["I"])((function(){return[A]})),content:Object(a["I"])((function(){return[Object(a["j"])(u,{getter:c.timeOfDayGetter,type:"line"},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",I,[Object(a["j"])(l,null,{title:Object(a["I"])((function(){return[x]})),content:Object(a["I"])((function(){return[Object(a["j"])(u,{getter:c.entitiesGetter},null,8,["getter"])]})),_:1})])])}var S=n("933c"),E=n("94e1"),G={name:"Home",components:{PublicationDonutChart:S["a"]},methods:{sourceGetter:function(){return E["a"].sources()},langGetter:function(){return E["a"].lang()},timeOfDayGetter:function(){return E["a"].timeOfDay()},entitiesGetter:function(){return E["a"].entities()},hashtagsGetter:function(){return E["a"].hashtags()}}};G.render=P;var T=G,D=[{path:"/",name:"Home",component:T},{path:"/publications",name:"Publications",component:function(){return n.e("about").then(n.bind(null,"cbf6"))}},{path:"/publication/:p/:s",name:"Publication",component:function(){return n.e("about").then(n.bind(null,"d6c1"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=Object(g["a"])({history:Object(g["b"])(),routes:D}),M=L,N=n("9319"),H=(n("bddf"),n("e1ae"),n("4121"),n("980c"),n("5b2c")),B=n("6f85"),q=n("1f80"),F=n("c0c3"),J=n("9899"),U=n("4344"),W=Object(a["e"])(p);W.use(M),W.use(N["a"]),W.component("Menubar",F["a"]),W.component("Card",J["a"]),W.component("Chart",U["a"]),W.component("DataTable",H["a"]),W.component("Column",B["a"]),W.component("ColumnGroup",q["a"]),W.mount("#app")},"6acf":function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a);e["a"]=r.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}})},"80e4":function(t,e,n){"use strict";n("d54d")},"933c":function(t,e,n){"use strict";var a=n("7a23");function r(t,e,n,r,o,c){var u=Object(a["A"])("Chart");return t.loaded?(Object(a["s"])(),Object(a["f"])(u,{key:0,type:n.type,data:t.chartdata},null,8,["type","data"])):Object(a["g"])("",!0)}n("159b");var o=n("94e1"),c={name:"PublicationDonutChart",props:{type:{type:String,default:"doughnut"},id:{type:String,default:null},getter:{type:Function,default:o["a"].types}},data:function(){return{loaded:!1,chartdata:null}},mounted:function(){var t=this;this.loaded=!1,this.getter(this.id).then((function(e){console.log(e.data.data);var n=[],a=[];e.data.data.forEach((function(t){t.count&&n.push(t.count),t.total&&n.push(t.total),a.push(t._id)}));var r=[{label:"10.1134/S1560354716060058",backgroundColor:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],borderColor:"#555",borderWidth:2,hoverOffset:4,data:n}];"line"===t.type&&(r=[{label:"10.1134/S1560354716060058",backgroundColor:"#1b9e77",borderColor:"#555",fill:!0,borderWidth:2,hoverOffset:4,data:n}]),t.chartdata={labels:a,datasets:r},console.log(t.chartdata),t.loaded=!0})).catch((function(t){console.log(t)}))}};c.render=r;e["a"]=c},"94e1":function(t,e,n){"use strict";var a=n("d4ec"),r=n("bee2"),o=(n("99af"),n("6acf")),c=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"getAll",value:function(){return o["a"].get("/publication")}},{key:"get",value:function(t){return o["a"].get("/publication/get/".concat(t))}},{key:"getCount",value:function(t,e){return o["a"].get("/publication/count?field=".concat(t,"&limit=").concat(e))}},{key:"top",value:function(t){return o["a"].get("/publication/top?limit=".concat(t))}},{key:"twitter",value:function(t){return o["a"].get("/publication/twitter/".concat(t))}},{key:"types",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/types"):o["a"].get("/stats/types?id=".concat(t))}},{key:"words",value:function(t){return o["a"].get("/stats/words?id=".concat(t))}},{key:"sources",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/sources"):o["a"].get("/stats/sources?id=".concat(t))}},{key:"lang",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/lang"):o["a"].get("/stats/lang?id=".concat(t))}},{key:"authors",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/authors"):o["a"].get("/stats/authors?id=".concat(t))}},{key:"entities",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/entities"):o["a"].get("/stats/entities?id=".concat(t))}},{key:"hashtags",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/hashtags"):o["a"].get("/stats/hashtags?id=".concat(t))}},{key:"timeOfDay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/dayhour"):o["a"].get("/stats/dayhour?id=".concat(t))}},{key:"countries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/locations"):o["a"].get("/stats/locations?id=".concat(t))}},{key:"followers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/followers"):o["a"].get("/stats/followers?id=".concat(t))}},{key:"authorCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/authorcount"):o["a"].get("/stats/authorcount?id=".concat(t))}},{key:"tweetCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?o["a"].get("/stats/tweetcount"):o["a"].get("/stats/tweetcount?id=".concat(t))}}]),t}();e["a"]=new c},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d54d:function(t,e,n){}});
//# sourceMappingURL=app.9c6e08fe.js.map