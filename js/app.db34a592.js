(function(t){function e(e){for(var a,o,u=e[0],l=e[1],i=e[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},c={app:0},r=[];function u(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5631712d","chunk-2d21e38c":"eed864a0"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"c01c847f","chunk-2d21e38c":"31d6cfe0"}[t]+".css",c=l.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var i=r[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===a||s===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===a||s===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],f.parentNode.removeChild(f),n(r)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(t);var d=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05bc":function(t,e,n){},"0888":function(t,e,n){"use strict";n("05bc")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=n("cf05"),c=n.n(o),r={class:"layout-topbar p-d-flex p-shadow-3  p-jc-between  p-ai-center"},u={class:"logo-link"},l=Object(a["j"])("img",{alt:"logo",src:c.a},null,-1),i=Object(a["j"])("div",{class:"p-text-bold p-text-uppercase"},"Amba Twitter Analysis",-1),s={class:"p-menuitem-text"},d={class:"layout-content"};function f(t,e,n,o,c,f){var b=Object(a["A"])("router-link"),j=Object(a["A"])("Menubar"),p=Object(a["A"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["j"])("div",r,[Object(a["j"])("div",u,[Object(a["j"])(b,{to:"/",class:"logo p-d-flex p-ai-center"},{default:Object(a["I"])((function(){return[l,i]})),_:1})]),Object(a["j"])(j,{model:c.items},{item:Object(a["I"])((function(t){var e=t.item;return[Object(a["j"])(b,{to:e.to,class:"p-d-flex p-ai-center p-menuitem-link"},{default:Object(a["I"])((function(){return[Object(a["j"])("span",s,Object(a["E"])(e.label),1)]})),_:2},1032,["to"])]})),_:1},8,["model"])]),Object(a["j"])("div",d,[Object(a["j"])(p)])],64)}n("159b"),n("b0c0");var b={created:function(){var t=this;this.$router.options.routes.forEach((function(e){t.items.push({label:e.name,to:e.path,icon:e.icon})}))},data:function(){return{items:[]}}};n("80e4");b.render=f;var j=b,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g={class:"p-grid"},h={class:"p-col-3"},O=Object(a["i"])(" Stats "),v={class:"padding-left"},m=Object(a["j"])("h3",null,"Tweet Count",-1),y={class:"padding-left"},w={class:"padding-left"},C=Object(a["j"])("h3",null,"Tweet Author Count",-1),k={class:"padding-left"},A={class:"padding-left"},S=Object(a["j"])("h3",null,"Total Followers Reached",-1),_={class:"padding-left"},I={class:"padding-left"},E=Object(a["j"])("h3",null,"Average Score per Tweet",-1),T={class:"padding-left"},D={class:"padding-left"},x=Object(a["j"])("h3",null,"Average Tweets per Author",-1),N={class:"padding-left"},P={class:"padding-left"},G=Object(a["j"])("h3",null,"Average Followers per Author",-1),M={class:"padding-left"},F={class:"p-col-3"},L=Object(a["i"])(" Types "),B={class:"p-col-3"},H=Object(a["i"])(" Sources "),U={class:"p-col-3"},q=Object(a["i"])(" Languages "),J={class:"p-col-3"},R=Object(a["i"])(" Hashtags "),W={class:"p-col-6"},z=Object(a["i"])(" Time of Day "),K={class:"p-col-3"},$=Object(a["i"])(" Entities "),Q={class:"p-col-6"},V=Object(a["i"])(" Authors "),X={class:"p-col-6"},Y=Object(a["i"])(" Tweets over Time ");function Z(t,e,n,o,c,r){var u=Object(a["A"])("Card"),l=Object(a["A"])("publication-donut-chart"),i=Object(a["A"])("MapChart");return Object(a["s"])(),Object(a["f"])("div",g,[Object(a["j"])("div",h,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[O]})),content:Object(a["I"])((function(){return[Object(a["j"])("div",v,[m,Object(a["j"])("p",y,Object(a["E"])(r.localeNumber(t.tweetCount)),1)]),Object(a["j"])("div",w,[C,Object(a["j"])("p",k,Object(a["E"])(r.localeNumber(t.authorCount)),1)]),Object(a["j"])("div",A,[S,Object(a["j"])("p",_,Object(a["E"])(r.localeNumber(t.totalFollowers)),1)]),Object(a["j"])("div",I,[E,Object(a["j"])("p",T,Object(a["E"])(r.localeNumber(t.scoreSum/t.tweetCount)),1)]),Object(a["j"])("div",D,[x,Object(a["j"])("p",N,Object(a["E"])(r.localeNumber(t.tweetCount/t.authorCount)),1)]),Object(a["j"])("div",P,[G,Object(a["j"])("p",M,Object(a["E"])(r.localeNumber(t.totalFollowers/t.authorCount)),1)])]})),_:1})]),Object(a["j"])("div",F,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[L]})),content:Object(a["I"])((function(){return[Object(a["j"])(l)]})),_:1})]),Object(a["j"])("div",B,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[H]})),content:Object(a["I"])((function(){return[Object(a["j"])(l,{getter:r.sourceGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",U,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[q]})),content:Object(a["I"])((function(){return[Object(a["j"])(l,{getter:r.langGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",J,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[R]})),content:Object(a["I"])((function(){return[Object(a["j"])(l,{getter:r.hashtagsGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",W,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[z]})),content:Object(a["I"])((function(){return[Object(a["j"])(l,{getter:r.timeOfDayGetter,type:"line"},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",K,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[$]})),content:Object(a["I"])((function(){return[Object(a["j"])(l,{getter:r.entitiesGetter},null,8,["getter"])]})),_:1})]),Object(a["j"])("div",Q,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[V]})),content:Object(a["I"])((function(){return[t.renderMap?(Object(a["s"])(),Object(a["f"])(i,{key:0,countryData:t.countries,highColor:"#ff0000",lowColor:"#aaaaaa",countryStrokeColor:"#909090",defaultCountryFillColor:"#dadada",onHoverCountry:r.hover},null,8,["countryData","onHoverCountry"])):Object(a["g"])("",!0)]})),_:1})]),Object(a["j"])("div",X,[Object(a["j"])(u,null,{title:Object(a["I"])((function(){return[Y]})),content:Object(a["I"])((function(){return[Object(a["j"])(l,{title:" ",dateFormat:!0,getter:r.timeGetter,type:"line"},null,8,["getter"])]})),_:1})])])}n("90d7");var tt=n("933c"),et=n("94e1"),nt=n("450d"),at={name:"Home",components:{PublicationDonutChart:tt["a"],MapChart:nt["a"]},data:function(){return{fontSizeMapper:function(t){return 10*Math.log2(10*t.value)},countries:[],render:!1,renderMap:!1,loading:!0,tweetCount:"-",authorCount:"-",scoreSum:"-",totalFollowers:"-",a:0}},created:function(){console.log("created"),this.fetchData()},methods:{localeNumber:function(t){return isNaN(t)?"-":t.toLocaleString("de-De")},fetchData:function(){var t=this;console.log("fetch data"),this.loading=!0,et["a"].tweetCount().then((function(e){t.tweetCount=e.data.data[0]["count"]})).catch((function(t){console.log(t)})),et["a"].followers().then((function(e){t.totalFollowers=e.data.data[0]["sum"]})).catch((function(t){console.log(t)})),et["a"].authorCount().then((function(e){t.authorCount=e.data.data[0]["count"]})).catch((function(t){console.log(t)})),et["a"].scoreSum().then((function(e){t.scoreSum=e.data.data[0]["sum"]})).catch((function(t){console.log(t)})),et["a"].countries().then((function(e){t.loading=!1,console.log("countries");var n={};e.data.data.forEach((function(t){n[t._id.toUpperCase()]=t.sum})),console.log(n),t.countries=n,t.renderMap=!0})).catch((function(t){console.log(t)}))},hover:function(t){t||console.log(t)},timeGetter:function(){return et["a"].timeBinned()},sourceGetter:function(){return et["a"].sources()},langGetter:function(){return et["a"].lang()},timeOfDayGetter:function(){return et["a"].timeOfDay()},entitiesGetter:function(){return et["a"].entities()},hashtagsGetter:function(){return et["a"].hashtags()}}};n("0888");at.render=Z;var ot=at,ct=[{path:"/",name:"Home",component:ot},{path:"/trending",name:"Trending",component:function(){return n.e("about").then(n.bind(null,"27ac"))}},{path:"/publications",name:"Publications",component:function(){return n.e("about").then(n.bind(null,"cbf6"))}},{path:"/publication/:p/:s",name:"Publication",component:function(){return n.e("about").then(n.bind(null,"d6c1"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],rt=Object(p["a"])({history:Object(p["b"])(),routes:ct}),ut=rt,lt=n("9319"),it=(n("bddf"),n("e1ae"),n("4121"),n("980c"),n("5b2c")),st=n("6f85"),dt=n("1f80"),ft=n("c0c3"),bt=n("9899"),jt=n("4344"),pt=Object(a["e"])(j);pt.use(ut),pt.use(lt["a"]),pt.component("Menubar",ft["a"]),pt.component("Card",bt["a"]),pt.component("Chart",jt["a"]),pt.component("DataTable",it["a"]),pt.component("Column",st["a"]),pt.component("ColumnGroup",dt["a"]),pt.mount("#app")},"6acf":function(t,e,n){"use strict";var a=n("bc3a"),o=n.n(a);e["a"]=o.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}})},"80e4":function(t,e,n){"use strict";n("d54d")},"933c":function(t,e,n){"use strict";var a=n("7a23");function o(t,e,n,o,c,r){var u=Object(a["A"])("Chart");return t.loaded?(Object(a["s"])(),Object(a["f"])(u,{key:0,type:n.type,data:t.chartdata},null,8,["type","data"])):Object(a["g"])("",!0)}n("159b");var c=n("94e1"),r={name:"PublicationDonutChart",props:{type:{type:String,default:"doughnut"},id:{type:String,default:null},getter:{type:Function,default:c["a"].types},dateFormat:{type:Boolean,default:!1},title:{type:String,default:"unknown"}},data:function(){return{loaded:!1,chartdata:null}},mounted:function(){var t=this;this.loaded=!1,this.getter(this.id).then((function(e){console.log(e.data.data);var n=[],a=[];e.data.data.forEach((function(e){if(e.count&&n.push(e.count),e.total&&n.push(e.total),t.dateFormat){var o=new Date(e._id),c={hour:"2-digit",minute:"2-digit"};a.push(o.toLocaleTimeString("de-DE",c))}else a.push(e._id)}));var o=[{label:t.title,backgroundColor:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],borderColor:"#555",borderWidth:2,hoverOffset:4,data:n}];"line"===t.type&&(o=[{label:t.title,backgroundColor:"#1b9e77",borderColor:"#555",fill:!0,borderWidth:2,hoverOffset:4,data:n}]),t.chartdata={labels:a,datasets:o},console.log(t.chartdata),t.loaded=!0})).catch((function(t){console.log(t)}))}};r.render=o;e["a"]=r},"94e1":function(t,e,n){"use strict";var a=n("d4ec"),o=n("bee2"),c=(n("99af"),n("6acf")),r=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"getAll",value:function(){return c["a"].get("/publication")}},{key:"get",value:function(t){return c["a"].get("/publication/get/".concat(t))}},{key:"getCount",value:function(t,e){return c["a"].get("/publication/count?field=".concat(t,"&limit=").concat(e))}},{key:"top",value:function(t){return c["a"].get("/publication/top?limit=".concat(t))}},{key:"twitter",value:function(t){return c["a"].get("/publication/twitter/".concat(t))}},{key:"types",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/types"):c["a"].get("/stats/types?id=".concat(t))}},{key:"words",value:function(t){return c["a"].get("/stats/words?id=".concat(t))}},{key:"sources",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/sources"):c["a"].get("/stats/sources?id=".concat(t))}},{key:"lang",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/lang"):c["a"].get("/stats/lang?id=".concat(t))}},{key:"authors",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/authors"):c["a"].get("/stats/authors?id=".concat(t))}},{key:"entities",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/entities"):c["a"].get("/stats/entities?id=".concat(t))}},{key:"hashtags",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/hashtags"):c["a"].get("/stats/hashtags?id=".concat(t))}},{key:"timeOfDay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/dayhour"):c["a"].get("/stats/dayhour?id=".concat(t))}},{key:"countries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/locations"):c["a"].get("/stats/locations?id=".concat(t))}},{key:"followers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/followers"):c["a"].get("/stats/followers?id=".concat(t))}},{key:"authorCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/authorcount"):c["a"].get("/stats/authorcount?id=".concat(t))}},{key:"tweetCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/tweetcount"):c["a"].get("/stats/tweetcount?id=".concat(t))}},{key:"scoreSum",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/scoresum"):c["a"].get("/stats/scoresum?id=".concat(t))}},{key:"timeBinned",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?c["a"].get("/stats/timebinned"):c["a"].get("/stats/timebinned?id=".concat(t))}}]),t}();e["a"]=new r},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d54d:function(t,e,n){}});
//# sourceMappingURL=app.db34a592.js.map