(function(){"use strict";var t={6451:function(t,e,n){var r=n(9242),a=n(3396);const o={class:"flex-fill"};function i(t,e,n,r,i,u){const s=(0,a.up)("PageHeader"),c=(0,a.up)("router-view"),l=(0,a.up)("PageFooter");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a._)("div",o,[(0,a.Wm)(c)]),(0,a.Wm)(l)],64)}const u={class:"navbar navbar-expand-lg navbar-light bg-light"},s={class:"container"},c=(0,a._)("a",{class:"navbar-brand",href:"#"},"Mivsen",-1),l=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},v={class:"nav-item"},m=(0,a.Uk)("Elev timer"),p={class:"nav-item"},b=(0,a.Uk)("Om");function g(t,e,n,r,o,i){const g=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",u,[(0,a._)("div",s,[c,l,(0,a._)("div",f,[(0,a._)("ul",d,[(0,a._)("li",v,[(0,a.Wm)(g,{to:{name:"studentTimer"},class:"nav-link"},{default:(0,a.w5)((()=>[m])),_:1})]),(0,a._)("li",p,[(0,a.Wm)(g,{to:{name:"about"},class:"nav-link"},{default:(0,a.w5)((()=>[b])),_:1})])])])])])}var h={name:"PageHeader"},y=n(89);const _=(0,y.Z)(h,[["render",g]]);var w=_;const k={class:"bg-light p-3"};function T(t,e,n,r,o,i){return(0,a.wg)(),(0,a.iD)("footer",k,"Footer")}var O={name:"PageFooter"};const j=(0,y.Z)(O,[["render",T]]);var C=j,P={components:{PageHeader:w,PageFooter:C}};const S=(0,y.Z)(P,[["render",i]]);var x=S,D=n(678),E=n(7139);const F={class:"container pt-4"},M={class:"row"},A={class:"col-12 col-md-8 offset-md-2"},H={class:"d-flex mb-3"},$={class:"flex-fill"};function W(t,e,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("div",M,[(0,a._)("div",A,[(0,a._)("div",H,[(0,a._)("div",$,(0,E.zw)(i.formattedStartTime),1),(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>i.startTimer&&i.startTimer(...t))}," Start timer ")])])])])}var z={name:"HomeView",data(){return{timestamp:null}},methods:{startTimer(){this.timestamp=new Date},formatDate(t){if(!t)return"";var e=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,n=`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;return e+" "+n}},computed:{formattedStartTime(){return this.formatDate(this.timestamp)}}};const Z=(0,y.Z)(z,[["render",W]]);var N=Z;const L=[{path:"/",name:"studentTimer",component:N},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,2970))}],U=(0,D.p7)({history:(0,D.r5)(),routes:L,linkActiveClass:"active",linkExactActiveClass:"active"});var Y=U,q=n(65),B=(0,q.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});n(5654);(0,r.ri)(x).use(B).use(Y).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.3ce62682.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mivzen.github.io:";n.l=function(r,a,o,i){if(t[r])t[r].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+o),u.src=r),t[r]=[a];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(v);var a=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkmivzen_github_io"]=self["webpackChunkmivzen_github_io"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6451)}));r=n.O(r)})();
//# sourceMappingURL=app.735a9015.js.map