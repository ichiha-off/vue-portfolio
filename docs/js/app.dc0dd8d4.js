(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-01368c33":"bbcd8afc","chunk-9a711aec":"c2ed7c14"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-01368c33":1,"chunk-9a711aec":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-01368c33":"5f602c3d","chunk-9a711aec":"2884aeac"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[t],m.parentNode.removeChild(m),n(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-portfolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var a=n("2dad"),i=n.n(a);i.a},"2dad":function(t,e,n){},"3aab":function(t,e,n){"use strict";var a=n("5602"),i=n.n(a);i.a},5602:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.urlCheck?n("div",[n("Top")],1):n("div",[t._m(0),n("nav",{staticClass:"side-nav header-links animate__animated animate__flipInX"},[n("ul",[n("li",[n("router-link",{staticClass:"header-link",attrs:{to:"/home"}},[n("div",{staticClass:"link-title eng"},[t._v(" Home ")]),n("div",{staticClass:"active-link"})])],1),n("li",[n("router-link",{staticClass:"header-link",attrs:{to:"/skills"}},[n("div",{staticClass:"link-title eng"},[t._v(" Skills ")]),n("div",{staticClass:"active-link"})])],1),n("li",[n("router-link",{staticClass:"header-link",attrs:{to:"/works"}},[n("div",{staticClass:"link-title eng"},[t._v(" Works ")]),n("div",{staticClass:"active-link"})])],1)])]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__backInRight","leave-active-class":"animate__animated animate__backOutRight",mode:"out-in"}},[n("router-view",{staticClass:"animate__animated animate__backInRight"})],1),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header animate__animated animate__fadeIn"},[a("div",{staticClass:"header-inner"},[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"YK-logo",attrs:{src:n("f07d"),alt:"YK_logo"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer-inner"},[n("div",{staticClass:"eng"},[t._v("created by Yuki Kanayama")])])])}],s=(n("ac1f"),n("466d"),n("f5df1"),n("ec27")),r={name:"App",components:{Top:s["default"]},computed:{urlCheck:function(){return location.pathname.match(/^\/$/)}}},c=r,l=(n("5c0b"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,null,null),d=u.exports,m=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home-main"},[n("h1",{staticClass:"home-headline eng"},[t._v("Yuki Kanayama's first Vue.js")]),n("div",{staticClass:"space"},[t._v(">>>")]),n("div",{staticClass:"home-content"},[n("div",{staticClass:"home-content-title eng"},[t._v("1. What about this site?")]),n("p",{staticClass:"home-jp"},[t._v("このサイトは？")]),n("div",{staticClass:"home-content-body"},[t._v(" 自己学習で Vue.js を用いてWebページの作成を実施しました。 "),n("br"),t._v("見やすく整ったページにできるようがんばりたいです。 ")])]),n("div",{staticClass:"space"},[t._v(">>>")]),n("div",{staticClass:"home-content"},[n("div",{staticClass:"home-content-title eng"},[t._v("2. Who am i?")]),n("p",{staticClass:"home-jp"},[t._v("わたしは誰？")]),n("div",{staticClass:"home-content-body"},[t._v(" 高校卒業後、大学進学を検討していたが家庭の事情で断念。 そのまま就職し、ケータイショップ店員として働くが、結婚と妻の妊娠で転職を決意。 "),n("br"),t._v("大阪の商社に転職し、そこで複合機とその周辺機器の修理保守の部署に配属。 そこでお客様にプログラミングの楽しさを教えていただき、自己学習を行っていく中でよりプログラミングのおもしろさに引かれて、プログラミングスクールに入学し転職する道へ。 ")])]),n("div",{staticClass:"space"},[t._v(">>>")]),n("div",{staticClass:"home-content"},[n("div",{staticClass:"home-content-title eng"},[t._v("3. From now on?")]),n("p",{staticClass:"home-jp"},[t._v("今後どうしたい？")]),n("div",{staticClass:"home-content-body"},[t._v(" UIのデザインは楽しいです。ただデザインが美しくてもコードが汚いとそれは美しくないと考えます。 "),n("br"),t._v("私は、まだまだ未熟でそんなことを言える立場でもないですが、デザインとコーディングはセットで考えるべきだなと自己学習を進めていく上で思いました。 今後、デザインとコーディングの両方ができるようなエンジニア（プログラマー）になりたいです。 ")])]),n("div",{staticClass:"space"},[t._v(">>>")])])}],h={nama:"Home"},v=h,_=(n("21bb"),Object(l["a"])(v,f,p,!1,null,null,null)),g=_.exports;a["a"].use(m["a"]);var b=[{path:"/home",name:"Home",component:g},{path:"/top",name:"Top",component:function(){return Promise.resolve().then(n.bind(null,"ec27"))}},{path:"/skills",name:"Skills",component:function(){return n.e("chunk-9a711aec").then(n.bind(null,"ad83"))}},{path:"/works",name:"Works",component:function(){return n.e("chunk-01368c33").then(n.bind(null,"1822"))}}],C=new m["a"]({mode:"history",base:"/vue-portfolio/",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:b}),k=C,y=n("ecee"),w=n("c074"),j=n("f2d1"),E=n("b702"),O=n("ad3d"),P=n("77ed"),x=n.n(P);y["c"].add(w["a"],E["a"],j["a"]),a["a"].component("font-awesome-icon",O["a"]),a["a"].use(x.a),a["a"].config.productionTip=!1,new a["a"]({router:k,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"9c0c":function(t,e,n){},ec27:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"top-main",on:{click:t.changePage}},[t._m(0),n("div",{staticClass:"eng top-content-hide"},[t._v("Welcome")]),n("div",{staticClass:"eng top-content2"},[t._v("Click on the screen")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animate__animated animate__infinite animate__bounce animate__slow animate__delay-1s"},[n("div",{staticClass:"eng top-content"},[t._v("Hello")])])}],o=n("cffa"),s={name:"Top",methods:{changePage:function(){var t=o["a"].timeline({paused:!0});t.to(".top-content",.8,{y:-300,opacity:0}).to(".top-content2",.8,{y:300,opacity:0}).to(".top-main",1,{backgroundColor:"white"}),t.to(".top-content-hide",2,{display:"block",className:"+=animate__animated animate__flipInX top-content-hide eng"},"-=.5"),t.to(".top-content-hide",2,{className:"+=animate__animated animate__hinge top-content-hide eng",onComplete:function(){window.location.href="/home"}}),t.play()}}},r=s,c=(n("3aab"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=l.exports},f07d:function(t,e,n){t.exports=n.p+"img/YK_logo.6ea8f2f6.svg"}});
//# sourceMappingURL=app.dc0dd8d4.js.map