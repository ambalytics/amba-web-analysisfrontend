(function(t){function e(e){for(var o,a,u=e[0],l=e[1],i=e[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function u(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b746d7ad","chunk-2d21e38c":"eed864a0"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"08ff8649","chunk-2d21e38c":"31d6cfe0"}[t]+".css",c=l.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var i=r[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===o||s===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(t);var d=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1eb8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("cf05"),c=n.n(a),r={class:"layout-topbar p-d-flex p-shadow-3  p-jc-between  p-ai-center"},u={class:"logo-link"},l=Object(o["j"])("img",{alt:"logo",src:c.a},null,-1),i=Object(o["j"])("div",{class:"header-text"},"ambalytics analysis streams",-1),s={class:"p-menuitem-text"},d={class:"layout-content"};function f(t,e,n,a,c,f){var b=Object(o["A"])("router-link"),p=Object(o["A"])("Menubar"),h=Object(o["A"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["j"])("div",r,[Object(o["j"])("div",u,[Object(o["j"])(b,{to:"/",class:"logo p-d-flex p-ai-center"},{default:Object(o["I"])((function(){return[l]})),_:1})]),i,Object(o["j"])(p,{model:c.items},{item:Object(o["I"])((function(t){var e=t.item;return[e.show?(Object(o["s"])(),Object(o["f"])(b,{key:0,to:e.to,class:"p-d-flex p-ai-center p-menuitem-link"},{default:Object(o["I"])((function(){return[Object(o["j"])("span",s,Object(o["E"])(e.label),1)]})),_:2},1032,["to"])):Object(o["g"])("",!0)]})),_:1},8,["model"])]),Object(o["j"])("div",d,[Object(o["j"])(h)])],64)}n("159b"),n("b0c0");var b={created:function(){var t=this;this.$router.options.routes.forEach((function(e){t.items.push({label:e.name,to:e.path,show:e.show,icon:e.icon})}))},data:function(){return{items:[]}}};n("6be4");b.render=f;var p=b,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j={class:"p-grid"},g={class:"p-col-3"},O=Object(o["i"])(" Stats "),v={class:"padding-left"},m=Object(o["j"])("h3",null,"Tweet Count",-1),y={class:"padding-left"},w={class:"padding-left"},C=Object(o["j"])("h3",null,"Tweet Author Count",-1),k={class:"padding-left"},S={class:"padding-left"},_=Object(o["j"])("h3",null,"Total Followers Reached",-1),A={class:"padding-left"},I={class:"padding-left"},E=Object(o["j"])("h3",null,"Average Score per Tweet",-1),D={class:"padding-left"},T={class:"padding-left"},M=Object(o["j"])("h3",null,"Average Tweets per Author",-1),F={class:"padding-left"},N={class:"padding-left"},P=Object(o["j"])("h3",null,"Average Followers per Author",-1),x={class:"padding-left"},G={class:"p-col-3"},L=Object(o["i"])(" Types "),B={class:"p-col-3"},H=Object(o["i"])(" Sources "),U={class:"p-col-3"},q=Object(o["i"])(" Languages "),J={class:"p-col-3"},R=Object(o["i"])(" Hashtags "),W={class:"p-col-6"},z=Object(o["i"])(" Time of Day "),K={class:"p-col-3"},$=Object(o["i"])(" Entities "),Q={class:"p-col-6"},V=Object(o["i"])(" Authors "),X={class:"p-col-6"},Y=Object(o["i"])(" Tweets over Time ");function Z(t,e,n,a,c,r){var u=Object(o["A"])("Card"),l=Object(o["A"])("publication-donut-chart"),i=Object(o["A"])("MapChart");return Object(o["s"])(),Object(o["f"])("div",j,[Object(o["j"])("div",g,[Object(o["j"])(u,{class:"stats"},{title:Object(o["I"])((function(){return[O]})),content:Object(o["I"])((function(){return[Object(o["j"])("div",v,[m,Object(o["j"])("p",y,Object(o["E"])(r.localeNumber(t.tweetCount)),1)]),Object(o["j"])("div",w,[C,Object(o["j"])("p",k,Object(o["E"])(r.localeNumber(t.authorCount)),1)]),Object(o["j"])("div",S,[_,Object(o["j"])("p",A,Object(o["E"])(r.localeNumber(t.totalFollowers)),1)]),Object(o["j"])("div",I,[E,Object(o["j"])("p",D,Object(o["E"])(r.localeNumber(Math.round(t.scoreSum/t.tweetCount))),1)]),Object(o["j"])("div",T,[M,Object(o["j"])("p",F,Object(o["E"])(r.localeNumber(Math.round(t.tweetCount/t.authorCount*100)/100)),1)]),Object(o["j"])("div",N,[P,Object(o["j"])("p",x,Object(o["E"])(r.localeNumber(Math.round(t.totalFollowers/t.authorCount))),1)])]})),_:1})]),Object(o["j"])("div",G,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[L]})),content:Object(o["I"])((function(){return[Object(o["j"])(l)]})),_:1})]),Object(o["j"])("div",B,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[H]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.sourceGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",U,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[q]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.langGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",J,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[R]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.hashtagsGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",W,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[z]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.timeOfDayGetter,type:"line"},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",K,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[$]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.entitiesGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",Q,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[V]})),content:Object(o["I"])((function(){return[t.renderMap?(Object(o["s"])(),Object(o["f"])(i,{key:0,countryData:t.countries,highColor:"#0f6364ff",lowColor:"#0f636420",countryStrokeColor:"#eee",defaultCountryFillColor:"#fff",onHoverCountry:r.hover},null,8,["countryData","onHoverCountry"])):Object(o["g"])("",!0)]})),_:1})]),Object(o["j"])("div",X,[Object(o["j"])(u,{class:"big-chart"},{title:Object(o["I"])((function(){return[Y]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{title:" ",dateFormat:!0,getter:r.timeGetter,type:"line"},null,8,["getter"])]})),_:1})])])}n("90d7");var tt=n("933c"),et=n("94e1"),nt=n("450d"),ot={name:"Home",components:{PublicationDonutChart:tt["a"],MapChart:nt["a"]},data:function(){return{fontSizeMapper:function(t){return 10*Math.log2(10*t.value)},countries:[],render:!1,renderMap:!1,loading:!0,tweetCount:"-",authorCount:"-",scoreSum:"-",totalFollowers:"-",a:0}},created:function(){console.log("created"),this.fetchData()},methods:{localeNumber:function(t){return isNaN(t)?"-":t.toLocaleString("de-De")},fetchData:function(){var t=this;console.log("fetch data"),this.loading=!0,et["a"].tweetCount().then((function(e){t.tweetCount=e.data.data[0]["count"]})).catch((function(t){console.log(t)})),et["a"].followers().then((function(e){t.totalFollowers=e.data.data[0]["sum"]})).catch((function(t){console.log(t)})),et["a"].authorCount().then((function(e){t.authorCount=e.data.data[0]["count"]})).catch((function(t){console.log(t)})),et["a"].scoreSum().then((function(e){t.scoreSum=e.data.data[0]["sum"]})).catch((function(t){console.log(t)})),et["a"].countries().then((function(e){t.loading=!1,console.log("countries");var n={};e.data.data.forEach((function(t){n[t._id.toUpperCase()]=t.sum})),console.log(n),t.countries=n,t.renderMap=!0})).catch((function(t){console.log(t)}))},hover:function(t){t||console.log(t)},timeGetter:function(){return et["a"].timeBinned()},sourceGetter:function(){return et["a"].sources()},langGetter:function(){return et["a"].lang()},timeOfDayGetter:function(){return et["a"].timeOfDay()},entitiesGetter:function(){return et["a"].entities()},hashtagsGetter:function(){return et["a"].hashtags()}}};n("e6dd");ot.render=Z;var at=ot,ct=[{path:"/",name:"Home",show:!0,component:at},{path:"/trending",name:"Trending",show:!0,component:function(){return n.e("about").then(n.bind(null,"27ac"))}},{path:"/publications",name:"Publications",show:!0,component:function(){return n.e("about").then(n.bind(null,"cbf6"))}},{path:"/publication/:p/:s",name:"Publication",show:!1,component:function(){return n.e("about").then(n.bind(null,"d6c1"))}},{path:"/about",name:"About",show:!0,component:function(){return n.e("about").then(n.bind(null,"f820"))}}],rt=Object(h["a"])({history:Object(h["b"])(),routes:ct}),ut=rt,lt=n("9319"),it=(n("bddf"),n("e1ae"),n("4121"),n("5b2c")),st=n("6f85"),dt=n("1f80"),ft=n("c0c3"),bt=n("9899"),pt=n("4344"),ht=Object(o["e"])(p);ht.use(ut),ht.use(lt["a"]),ht.component("Menubar",ft["a"]),ht.component("Card",bt["a"]),ht.component("Chart",pt["a"]),ht.component("DataTable",it["a"]),ht.component("Column",st["a"]),ht.component("ColumnGroup",dt["a"]),ht.mount("#app")},"6acf":function(t,e,n){"use strict";var o=n("bc3a"),a=n.n(o);e["a"]=a.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}})},"6be4":function(t,e,n){"use strict";n("c878")},"933c":function(t,e,n){"use strict";var o=n("7a23");function a(t,e,n,a,c,r){var u=Object(o["A"])("Chart");return t.loaded?(Object(o["s"])(),Object(o["f"])(u,{key:0,type:n.type,data:t.chartdata,options:t.options,height:"200"},null,8,["type","data","options"])):Object(o["g"])("",!0)}n("159b");var c=n("94e1"),r={name:"PublicationDonutChart",props:{type:{type:String,default:"doughnut"},id:{type:String,default:null},getter:{type:Function,default:c["a"].types},dateFormat:{type:Boolean,default:!1},title:{type:String,default:"unknown"},growingData:{type:Boolean,default:!1}},data:function(){return{loaded:!1,chartdata:null}},mounted:function(){var t=this;this.loaded=!1,this.getter(this.id).then((function(e){console.log(e.data.data);var n=[],o=[],a=0;e.data.data.forEach((function(e){if(t.growingData?(console.log(a),e.count?a+=e.count:e.total&&(a+=e.total),n.push(a)):e.count?n.push(e.count):e.total&&n.push(e.total),t.dateFormat){var c=new Date(e._id),r={hour:"2-digit",minute:"2-digit"};o.push(c.toLocaleTimeString("de-DE",r))}else o.push(e._id)}));var c=[{label:t.title,backgroundColor:["#0F6364","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],borderColor:"#555",borderWidth:2,hoverOffset:4,data:n}];"line"===t.type&&(c=[{label:t.title,backgroundColor:"#0F6364",borderColor:"#555",fill:!0,borderWidth:2,hoverOffset:4,data:n}]),t.options={responsive:!0},t.chartdata={labels:o,datasets:c},console.log(t.chartdata),t.loaded=!0})).catch((function(t){console.log(t)}))}};r.render=a;e["a"]=r},"94e1":function(t,e,n){"use strict";var o=n("d4ec"),a=n("bee2"),c=(n("99af"),n("6acf")),r=function(){function t(){Object(o["a"])(this,t)}return Object(a["a"])(t,[{key:"getAll",value:function(){return c["a"].get("/publication")}},{key:"get",value:function(t){return c["a"].get("/publication/get/".concat(t))}},{key:"getCount",value:function(t,e){return c["a"].get("/publication/count?field=".concat(t,"&limit=").concat(e))}},{key:"top",value:function(t){return c["a"].get("/publication/top?limit=".concat(t))}},{key:"twitter",value:function(t){return c["a"].get("/publication/twitter/".concat(t))}},{key:"types",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/types"):c["a"].get("/stats/types?id=".concat(t))}},{key:"words",value:function(t){return c["a"].get("/stats/words?id=".concat(t))}},{key:"sources",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/sources"):c["a"].get("/stats/sources?id=".concat(t))}},{key:"lang",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/lang"):c["a"].get("/stats/lang?id=".concat(t))}},{key:"authors",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/authors"):c["a"].get("/stats/authors?id=".concat(t))}},{key:"entities",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/entities"):c["a"].get("/stats/entities?id=".concat(t))}},{key:"hashtags",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/hashtags"):c["a"].get("/stats/hashtags?id=".concat(t))}},{key:"timeOfDay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/dayhour"):c["a"].get("/stats/dayhour?id=".concat(t))}},{key:"countries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/locations"):c["a"].get("/stats/locations?id=".concat(t))}},{key:"followers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/followers"):c["a"].get("/stats/followers?id=".concat(t))}},{key:"authorCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/authorcount"):c["a"].get("/stats/authorcount?id=".concat(t))}},{key:"tweetCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/tweetcount"):c["a"].get("/stats/tweetcount?id=".concat(t))}},{key:"scoreSum",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/scoresum"):c["a"].get("/stats/scoresum?id=".concat(t))}},{key:"timeBinned",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/timebinned"):c["a"].get("/stats/timebinned?id=".concat(t))}}]),t}();e["a"]=new r},c878:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.3309edcd.png"},e6dd:function(t,e,n){"use strict";n("1eb8")}});
//# sourceMappingURL=app.d1bdedc7.js.map