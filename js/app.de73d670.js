(function(t){function e(e){for(var o,a,u=e[0],l=e[1],i=e[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);b&&b(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function u(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"af37b747","chunk-2d21e38c":"eed864a0"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"15e95517","chunk-2d21e38c":"31d6cfe0"}[t]+".css",c=l.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var i=r[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===o||s===c)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],b.parentNode.removeChild(b),n(r)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(t);var d=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(b);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}c[t]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var b=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("cf05"),c=n.n(a),r={class:"layout-topbar p-d-flex p-shadow-3  p-jc-between  p-ai-center"},u={class:"logo-link"},l=Object(o["j"])("img",{alt:"logo",src:c.a},null,-1),i=Object(o["j"])("div",{class:"header-text"},"ambalytics analysis streams",-1),s={class:"p-menuitem-text"},d={class:"layout-content"};function b(t,e,n,a,c,b){var f=Object(o["A"])("router-link"),j=Object(o["A"])("Menubar"),h=Object(o["A"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["j"])("div",r,[Object(o["j"])("div",u,[Object(o["j"])(f,{to:"/",class:"logo p-d-flex p-ai-center"},{default:Object(o["I"])((function(){return[l]})),_:1})]),i,Object(o["j"])(j,{model:c.items},{item:Object(o["I"])((function(t){var e=t.item;return[e.show?(Object(o["s"])(),Object(o["f"])(f,{key:0,to:e.to,class:"p-d-flex p-ai-center p-menuitem-link"},{default:Object(o["I"])((function(){return[Object(o["j"])("span",s,Object(o["E"])(e.label),1)]})),_:2},1032,["to"])):Object(o["g"])("",!0)]})),_:1},8,["model"])]),Object(o["j"])("div",d,[Object(o["j"])(h)])],64)}n("159b"),n("b0c0");var f={created:function(){var t=this;document.title="ambalytics analysis streams",this.$router.options.routes.forEach((function(e){t.items.push({label:e.name,to:e.path,show:e.show,icon:e.icon})}))},data:function(){return{items:[]}}};n("e251");f.render=b;var j=f,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p={class:"p-grid"},g={class:"p-col-3"},O=Object(o["i"])(" Stats "),v={class:"padding-left"},m=Object(o["j"])("h3",null,"Tweet Count",-1),y={class:"padding-left"},w={class:"padding-left"},C=Object(o["j"])("h3",null,"Tweet Author Count",-1),k={class:"padding-left"},E={class:"padding-left"},S=Object(o["j"])("h3",null,"Total Followers Reached",-1),A={class:"padding-left"},I={class:"padding-left"},_=Object(o["j"])("h3",null,"Average Score per Tweet",-1),D={class:"padding-left"},N={class:"padding-left"},T=Object(o["j"])("h3",null,"Average Tweets per Author",-1),F={class:"padding-left"},M={class:"padding-left"},P=Object(o["j"])("h3",null,"Average Followers per Author",-1),x={class:"padding-left"},G={class:"padding-left"},B=Object(o["j"])("h3",null,"Publication Count",-1),L={class:"padding-left"},H={class:"p-col-3"},U=Object(o["i"])(" Types "),q={class:"p-col-3"},J=Object(o["i"])(" Sources "),R={class:"p-col-3"},W=Object(o["i"])(" Languages "),z={class:"p-col-3"},K=Object(o["i"])(" Hashtags "),$={class:"p-col-6"},Q=Object(o["i"])(" Time of Day "),V={class:"p-col-3"},X=Object(o["i"])(" Entities "),Y={class:"p-col-6"},Z=Object(o["i"])(" Authors "),tt={class:"p-col-6"},et=Object(o["i"])(" Tweets over Time ");function nt(t,e,n,a,c,r){var u=Object(o["A"])("Card"),l=Object(o["A"])("publication-donut-chart"),i=Object(o["A"])("MapChart");return Object(o["s"])(),Object(o["f"])("div",p,[Object(o["j"])("div",g,[Object(o["j"])(u,{class:"stats"},{title:Object(o["I"])((function(){return[O]})),content:Object(o["I"])((function(){return[Object(o["j"])("div",v,[m,Object(o["j"])("p",y,Object(o["E"])(r.localeNumber(t.tweetCount)),1)]),Object(o["j"])("div",w,[C,Object(o["j"])("p",k,Object(o["E"])(r.localeNumber(t.authorCount)),1)]),Object(o["j"])("div",E,[S,Object(o["j"])("p",A,Object(o["E"])(r.localeNumber(t.totalFollowers)),1)]),Object(o["j"])("div",I,[_,Object(o["j"])("p",D,Object(o["E"])(r.localeNumber(Math.round(t.scoreSum/t.tweetCount))),1)]),Object(o["j"])("div",N,[T,Object(o["j"])("p",F,Object(o["E"])(r.localeNumber(Math.round(t.tweetCount/t.authorCount*100)/100)),1)]),Object(o["j"])("div",M,[P,Object(o["j"])("p",x,Object(o["E"])(r.localeNumber(Math.round(t.totalFollowers/t.authorCount))),1)]),Object(o["j"])("div",G,[B,Object(o["j"])("p",L,Object(o["E"])(r.localeNumber(t.pubCount)),1)])]})),_:1})]),Object(o["j"])("div",H,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[U]})),content:Object(o["I"])((function(){return[Object(o["j"])(l)]})),_:1})]),Object(o["j"])("div",q,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[J]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.sourceGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",R,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[W]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.langGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",z,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[K]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.hashtagsGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",$,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[Q]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.timeOfDayGetter,title:" ",type:"line"},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",V,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[X]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{getter:r.entitiesGetter},null,8,["getter"])]})),_:1})]),Object(o["j"])("div",Y,[Object(o["j"])(u,null,{title:Object(o["I"])((function(){return[Z]})),content:Object(o["I"])((function(){return[t.renderMap?(Object(o["s"])(),Object(o["f"])(i,{key:0,countryData:t.countries,highColor:"#0f6364",lowColor:"#E6B24B",countryStrokeColor:"#fff",defaultCountryFillColor:"#fff",onHoverCountry:r.hover},null,8,["countryData","onHoverCountry"])):Object(o["g"])("",!0)]})),_:1})]),Object(o["j"])("div",tt,[Object(o["j"])(u,{class:"big-chart"},{title:Object(o["I"])((function(){return[et]})),content:Object(o["I"])((function(){return[Object(o["j"])(l,{height:"200",title:" ",dateFormat:!0,getter:r.timeGetter,type:"line"},null,8,["getter"])]})),_:1})])])}n("90d7");var ot=n("933c"),at=n("94e1"),ct=n("450d"),rt={name:"Home",components:{PublicationDonutChart:ot["a"],MapChart:ct["a"]},data:function(){return{fontSizeMapper:function(t){return 10*Math.log2(10*t.value)},countries:[],render:!1,renderMap:!1,loading:!0,pubCount:"-",tweetCount:"-",authorCount:"-",scoreSum:"-",totalFollowers:"-",a:0}},created:function(){this.fetchData()},methods:{localeNumber:function(t){return isNaN(t)?"-":t.toLocaleString("de-De")},fetchData:function(){var t=this;this.loading=!0,at["a"].tweetCount().then((function(e){t.tweetCount=e.data[0]["count"]})).catch((function(t){console.log(t)})),at["a"].followers().then((function(e){t.totalFollowers=e.data[0]["sum"]})).catch((function(t){console.log(t)})),at["a"].authorCount().then((function(e){t.authorCount=e.data[0]["count"]})).catch((function(t){console.log(t)})),at["a"].scoreSum().then((function(e){t.scoreSum=e.data[0]["sum"]})).catch((function(t){console.log(t)})),at["a"].getCount().then((function(e){t.pubCount=e.data["count"]})).catch((function(t){console.log(t)})),at["a"].countries().then((function(e){t.loading=!1;var n={};e.data.forEach((function(t){n[t.authorLocation.toUpperCase()]=t.count})),t.countries=n,t.renderMap=!0})).catch((function(t){console.log(t)}))},hover:function(t){t||console.log(t)},timeGetter:function(){return at["a"].timeBinned()},sourceGetter:function(){return at["a"].sources()},langGetter:function(){return at["a"].lang()},timeOfDayGetter:function(){return at["a"].timeOfDay()},entitiesGetter:function(){return at["a"].entities()},hashtagsGetter:function(){return at["a"].hashtags()}}};n("ad2e");rt.render=nt;var ut=rt,lt={class:"not-found"},it=Object(o["j"])("div",{class:"container"},[Object(o["j"])("div",null,[Object(o["j"])("h2",null,[Object(o["j"])("span",null,"404"),Object(o["i"])(" PAGE NOT FOUND")]),Object(o["j"])("p",null,"Sorry the page you requested could not be found :/")]),Object(o["j"])("h3",null,[Object(o["j"])("a",{href:"/#"},[Object(o["j"])("img",{src:c.a}),Object(o["i"])("take me back to ambalytics analysis streams home")])])],-1);function st(t,e,n,a,c,r){return Object(o["s"])(),Object(o["f"])("div",lt,[it])}var dt={name:"NotFound"};n("58b8");dt.render=st;var bt=dt,ft=[{path:"/",name:"Home",show:!0,component:ut},{path:"/trending",name:"Trending",show:!0,component:function(){return n.e("about").then(n.bind(null,"27ac"))}},{path:"/publications",name:"Publications",show:!0,component:function(){return n.e("about").then(n.bind(null,"cbf6"))}},{path:"/publication/:p/:s",name:"Publication",show:!1,component:function(){return n.e("about").then(n.bind(null,"d6c1"))}},{path:"/about",name:"About",show:!0,component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/:pathMatch(.*)*",name:"NotFound",show:!1,component:bt}],jt=Object(h["a"])({history:Object(h["b"])(),routes:ft}),ht=jt,pt=n("9319"),gt=(n("bddf"),n("e1ae"),n("4121"),n("5b2c")),Ot=n("6f85"),vt=n("1f80"),mt=n("c0c3"),yt=n("9899"),wt=n("4344"),Ct=Object(o["e"])(j);Ct.use(ht),Ct.use(pt["a"]),Ct.component("Menubar",mt["a"]),Ct.component("Card",yt["a"]),Ct.component("Chart",wt["a"]),Ct.component("DataTable",gt["a"]),Ct.component("Column",Ot["a"]),Ct.component("ColumnGroup",vt["a"]),Ct.mount("#app")},"58b8":function(t,e,n){"use strict";n("c658")},"933c":function(t,e,n){"use strict";var o=n("7a23");function a(t,e,n,a,c,r){var u=Object(o["A"])("Chart");return t.loaded?(Object(o["s"])(),Object(o["f"])(u,{key:0,type:n.type,data:t.chartdata,options:t.options,height:n.height},null,8,["type","data","options","height"])):Object(o["g"])("",!0)}n("a9e3"),n("159b");var c=n("94e1"),r=n("6149"),u=n.n(r),l={name:"PublicationDonutChart",props:{type:{type:String,default:"doughnut"},id:{type:String,default:null},getter:{type:Function,default:c["a"].types},dateFormat:{type:Boolean,default:!1},title:{type:String,default:"unknown"},growingData:{type:Boolean,default:!1},height:{type:Number,default:150}},data:function(){return{loaded:!1,chartdata:null}},mounted:function(){var t=this;this.loaded=!1,this.getter(this.id).then((function(e){var n=[],o=[],a=0;if(e.data){e.data.forEach((function(e){if("total"!==e.value)if(t.growingData?(e.count?a+=e.count:e.total&&(a+=e.total),n.push(a)):e.count?n.push(e.count):e.total&&n.push(e.total),t.dateFormat){var c=new Date(e.year,e.month,e.day,e.hour),r={hour:"2-digit",minute:"2-digit"};o.push(c.toLocaleTimeString("de-DE",r))}else o.push(e.value)}));for(var c=[],r=u.a.scale(["#0F6364","#67002E","#E6B24B"]),l=0;l<n.length;l++)c.push(r(l/(n.length-1)).hex());var i=[{label:t.title,backgroundColor:c,borderColor:"#555",borderWidth:2,hoverOffset:4,data:n}];t.options={responsive:!0},"line"===t.type&&(i=[{label:t.title,backgroundColor:"#0F6364",borderColor:"#555",fill:!0,borderWidth:2,hoverOffset:4,data:n}],t.options["scales"]={y:{min:0}}),t.chartdata={labels:o,datasets:i},t.loaded=!0}})).catch((function(t){console.log(t)}))}};l.render=a;e["a"]=l},"93fb":function(t,e,n){},"94e1":function(t,e,n){"use strict";var o=n("d4ec"),a=n("bee2"),c=n("bc3a"),r=n.n(c),u=r.a.create({baseURL:"https://api-analysis.ambalytics.com/api",headers:{"Content-type":"application/json"}}),l=function(){function t(){Object(o["a"])(this,t)}return Object(a["a"])(t,[{key:"getAll",value:function(){return u.get("/publication")}},{key:"get",value:function(t){return u.get("/publication/get/".concat(t))}},{key:"getCount",value:function(){return u.get("/publication/count")}},{key:"top",value:function(t){return u.get("/publication/top?limit=".concat(t))}},{key:"twitter",value:function(t){return u.get("/publication/twitter/".concat(t))}},{key:"types",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/types"):u.get("/stats/types?id=".concat(t))}},{key:"words",value:function(t){return u.get("/stats/words?id=".concat(t))}},{key:"sources",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/sources"):u.get("/stats/sources?id=".concat(t))}},{key:"lang",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/lang"):u.get("/stats/lang?id=".concat(t))}},{key:"entities",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/entities"):u.get("/stats/entities?id=".concat(t))}},{key:"hashtags",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/hashtags"):u.get("/stats/hashtags?id=".concat(t))}},{key:"timeOfDay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/dayhour"):u.get("/stats/dayhour?id=".concat(t))}},{key:"countries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/locations"):u.get("/stats/locations?id=".concat(t))}},{key:"followers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/followers"):u.get("/stats/followers?id=".concat(t))}},{key:"authorCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/authorcount"):u.get("/stats/authorcount?id=".concat(t))}},{key:"tweetCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/tweetcount"):u.get("/stats/tweetcount?id=".concat(t))}},{key:"scoreSum",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/scoresum"):u.get("/stats/scoresum?id=".concat(t))}},{key:"timeBinned",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?u.get("/stats/timebinned"):u.get("/stats/timebinned?id=".concat(t))}}]),t}();e["a"]=new l},ad2e:function(t,e,n){"use strict";n("f2ea")},c658:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.3309edcd.png"},e251:function(t,e,n){"use strict";n("93fb")},f2ea:function(t,e,n){}});
//# sourceMappingURL=app.de73d670.js.map