if(!self.define){let e,i={};const t=(t,n)=>(t=new URL(t+".js",n).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>t(e,r),d={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Ccbt0mEm.js",revision:null},{url:"index.html",revision:"a023f7ed02b727da29b93c55914405f0"},{url:"registerSW.js",revision:"02d5a0cf55679e18a0feb23a03f202f4"},{url:"manifest.webmanifest",revision:"7bedfe08b5dc91ab37c88deb1652ceee"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
