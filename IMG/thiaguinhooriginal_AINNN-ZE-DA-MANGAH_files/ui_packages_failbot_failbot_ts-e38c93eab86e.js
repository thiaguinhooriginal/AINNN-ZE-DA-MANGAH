"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_failbot_failbot_ts"],{89359:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function a(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function i(){return`${window.location.protocol}//${window.location.host}${o()+a()}`}n.d(t,{S:()=>i})},15345:(e,t,n)=>{n.d(t,{N:()=>o,x:()=>a});var r=n(86283);function o(e){a(c(e))}function a(e){i(e)}function i(e){let t=r.n4?.querySelector("#js-global-screen-reader-notice");t&&(t.textContent===e?t.textContent=`${e}\u00A0`:t.textContent=e)}function c(e){return(e.getAttribute("aria-label")||e.innerText||"").trim()}},4412:(e,t,n)=>{n.d(t,{C:()=>a,x:()=>o});var r=n(86283);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},24601:(e,t,n)=>{n.d(t,{aJ:()=>y,cI:()=>p,eK:()=>v});var r=n(82918),o=n(83314),a=n(28382),i=n(89359),c=n(68202),u=n(53729),s=n(86283);let l=!1,f=0,d=Date.now();function m(e){return"AbortError"===e.name||"TypeError"===e.name&&"Failed to fetch"===e.message}function v(e,t={}){m(e)||E(h(S(e),t))}async function E(e){if(!N())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(w(e.error.stacktrace)){l=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function S(e){return{type:e.name,value:e.message,stacktrace:p(e)}}function h(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,c.wP)(),timeSinceLoad:Math.round(Date.now()-d),user:y()||void 0,bundler:u.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function p(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let g=/(chrome|moz|safari)-extension:\/\//;function w(e){return e.some(e=>g.test(e.filename)||g.test(e.function))}function y(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let R=!1;function N(){return!R&&!l&&f<10&&(0,o.Gb)()}if(s.iG?.addEventListener("pageshow",()=>R=!1),s.iG?.addEventListener("pagehide",()=>R=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{v(e.data.error)})}},53729:(e,t,n)=>{n.d(t,{A7:()=>f,ko:()=>s,q1:()=>c});var r=n(15205),o=n(86283);let a=(0,r.Z)(i);function i(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let c=(0,r.Z)(u);function u(){return o.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let s=(0,r.Z)(l);function l(){return"enterprise"===a()}let f="webpack"},44544:(e,t,n)=>{n.d(t,{Z:()=>i,_:()=>c});var r=n(86283),o=n(71643);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,i=e=>e,c=e=>e){let u;try{if(!n)throw Error();u=n[e]||new a}catch{u=new a}let{throwQuotaErrorsOnSet:s}=t;function l(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function f(e){try{if(u.removeItem(e),t.ttl){let t=`${e}:expiry`;u.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=u.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(u.getItem(r));if(o&&t>o)return f(e),f(r),l("SAFE_STORAGE_VALUE_EXPIRED"),null;return l("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(u.setItem(e,c(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;u.setItem(n,o.toString())}}catch(e){if(s&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:f,clear:u.clear,key:u.key,get length(){return u.length}}}function c(e){return i(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},39629:(e,t,n)=>{n.d(t,{LS:()=>a,cl:()=>i,rV:()=>o});var r=n(44544);let{getItem:o,setItem:a,removeItem:i}=(0,r.Z)("sessionStorage")},68202:(e,t,n)=>{n.d(t,{CF:()=>c,QE:()=>d,QW:()=>SoftNavErrorEvent,$g:()=>SoftNavSuccessEvent,FP:()=>g,r_:()=>p,Nb:()=>V,Gj:()=>k,wP:()=>$,OE:()=>q,sj:()=>_,Yl:()=>E,RN:()=>Z,TL:()=>w,Ak:()=>P,U6:()=>x,cY:()=>Q,LD:()=>S,BT:()=>h,u5:()=>y});var r=n(39629);let o=class SoftNavEvent extends Event{constructor(e,t){super(t),this.mechanism=e}};let SoftNavStartEvent=class SoftNavStartEvent extends o{constructor(e){super(e,d.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends o{constructor(e,t){super(e,d.SUCCESS),this.visitCount=t}};let SoftNavErrorEvent=class SoftNavErrorEvent extends o{constructor(e,t){super(e,d.ERROR),this.error=t}};let SoftNavEndEvent=class SoftNavEndEvent extends o{constructor(e){super(e,d.END)}};var a=n(71643);let i="stats:soft-nav-duration",c={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function u(){performance.mark(i)}function s(){if(0===performance.getEntriesByName(i).length)return null;performance.measure(i,i);let e=performance.getEntriesByName(i),t=e.pop();return t?t.duration:null}function l(e){(0,a.b)({turboFailureReason:e,turboStartUrl:$(),turboEndUrl:window.location.href})}function f(){let e=s();if(!e)return;let t=c[k()],n=Math.round(e);t===c.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:n}})),(0,a.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:t,destination:V()||"rails",duration:n,initiator:F()||"rails"}})}let d=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),m="reload",v=0;function E(){v=0,document.dispatchEvent(new Event(d.INITIAL)),O()}function S(e){_()||(R(),document.dispatchEvent(new SoftNavStartEvent(e)),x(e),G(),U(),u())}function h(e={}){b(e)&&(v+=1,document.dispatchEvent(new SoftNavSuccessEvent(k(),v)),g(e))}function p(e={}){if(!b(e))return;v=0;let t=B()||m;document.dispatchEvent(new SoftNavErrorEvent(k(),t)),N(),l(t),O()}function g(e={}){b(e)&&(N(),document.dispatchEvent(new SoftNavEndEvent(k())),D())}function w(e={}){b(e)&&(f(),document.dispatchEvent(new Event(d.RENDER)))}function y(){document.dispatchEvent(new Event(d.FRAME_UPDATE))}function R(){document.dispatchEvent(new Event(d.PROGRESS_BAR.START))}function N(){document.dispatchEvent(new Event(d.PROGRESS_BAR.END))}function b({skipIfGoingToReactApp:e,allowedMechanisms:t=[]}={}){return _()&&(0===t.length||t.includes(k()))&&(!e||!V())}let A="soft-nav:fail",T="soft-nav:fail-referrer",L="soft-nav:referrer",I="soft-nav:marker",C="soft-nav:react-app-name";function O(){(0,r.LS)(I,"0"),(0,r.cl)(L),(0,r.cl)(A),(0,r.cl)(T),(0,r.cl)(C)}function x(e){(0,r.LS)(I,e)}function D(){(0,r.LS)(I,"0")}function _(){let e=(0,r.rV)(I);return e&&"0"!==e}function k(){return(0,r.rV)(I)}function q(){return Boolean(B())}function B(){return(0,r.rV)(A)}function P(e){(0,r.LS)(A,e||m),(0,r.LS)(T,window.location.href)}function U(){(0,r.LS)(L,window.location.href)}function $(){return(0,r.rV)(L)||document.referrer}function G(){let e=V();e?(0,r.LS)(C,e):(0,r.cl)(C)}function F(){return(0,r.rV)(C)}function V(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}var j=n(15345),M=n(86283);let J=Object.freeze({INITIAL:"soft-nav:external:initial",START:"soft-nav:external:start",SUCCESS:"soft-nav:external:success",ERROR:"soft-nav:external:error",RENDER:"soft-nav:external:render"});function Q(){M.n4?.addEventListener(d.SUCCESS,function(e){"turbo"===e.mechanism&&(0,j.x)(`${document.title}`)}),M.n4?.addEventListener(J.INITIAL,E),M.n4?.addEventListener(J.START,e=>{S(e.detail.mechanism)}),M.n4?.addEventListener(J.SUCCESS,()=>h()),M.n4?.addEventListener(J.ERROR,()=>p()),M.n4?.addEventListener(J.RENDER,()=>w())}function Z(){"undefined"!=typeof navigation&&"undefined"!=typeof NavigateEvent&&"function"==typeof NavigateEvent.prototype?.intercept&&document.addEventListener(d.PROGRESS_BAR.START,()=>{let e=new Promise(e=>{document.addEventListener(d.PROGRESS_BAR.END,e,{once:!0})});navigation.addEventListener("navigate",t=>{t.canIntercept&&t.intercept({scroll:"manual",handler:()=>(history.replaceState(navigation.currentEntry.getState(),"",location.href),e)})},{once:!0}),navigation.navigate(location.href,{history:"replace",state:history.state})})}},71643:(e,t,n)=>{n.d(t,{B:()=>E,b:()=>c});var r=n(86283),o=n(4412),a=n(53729);let i=[];function c(e,t=!1){void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=v(),e.staff=E(),e.bundler=a.A7,i.push(e),t?l():s()}let u=null;async function s(){await o.C,null==u&&(u=window.requestIdleCallback(l))}function l(){if(u=null,!i.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=f(i);for(let n of t)m(e,`{"stats": [${n.join(",")}] }`);i=[]}function f(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(d(n));return t}function d(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}function m(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function v(){return!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content}function E(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",l),r.n4?.addEventListener("visibilitychange",l)}}]);
//# sourceMappingURL=ui_packages_failbot_failbot_ts-efd50de1023d.js.map