(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5609:function(e,t,n){Promise.resolve().then(n.bind(n,3038))},3038:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var s=n(9268),i=n(6006);function r(e){return Math.floor(Math.random()*e)}function a(e){let{card:t,startTimer:n,startPendingTimeout:a,gameState:l,setGameState:o,setPendingCard:c,checkForPair:d,pendingCard:u,board:m,setBoard:p,setClicks:g}=e,f=(0,i.useRef)(null),[h,x]=(0,i.useState)(0);async function j(){"closed"===t.state&&"matching"!==l&&(x(r(t.images.length)),p(e=>{let n=[...e],s=n.findIndex(e=>e.position===t.position);return n[s]={...n[s],state:"opened"},n}),"idle"===l||"starting"===l?("starting"===l&&n(),g(e=>e+1),o("pending"),c(t),a(t)):(o("matching"),d(t),setTimeout(()=>{},1e3)))}let b=(0,i.useCallback)(function(){var e,n,i;if("closed"===t.state)return null==f||null===(e=f.current)||void 0===e||e.classList.remove("clicked"),null;"opened"===t.state?setTimeout(()=>{var e;null==f||null===(e=f.current)||void 0===e||e.classList.add("clicked")},30):"closing"===t.state?null==f||null===(n=f.current)||void 0===n||n.classList.remove("clicked"):null==f||null===(i=f.current)||void 0===i||i.classList.add("opacity-0","pointer-events-none","cursor-default");let r=t.images[h];return(0,s.jsx)("img",{src:r,alt:"#",className:"h-full w-full object-cover"})},[t.state,h]);return(0,s.jsxs)("div",{className:"aspect-[3/4] rounded-md grid place-content-center mainCard overflow-hidden",ref:f,onClick:j,children:[(0,s.jsx)("div",{className:"frontCard"}),(0,s.jsx)("div",{className:"backCard",children:b()})]})}function l(e){let{clicks:t,scored:n}=e;return(0,s.jsxs)("div",{className:"grid gap-3 text-xl place-content-center text-white font-mono md:pb-3",children:[(0,s.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,s.jsx)("img",{src:"./images/finger-click.png",alt:"click",className:"w-6 rounded-full"}),(0,s.jsx)("p",{className:"",children:t})]}),(0,s.jsx)("div",{className:"flex justify-center",children:n})]})}function o(){let e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ",t=[];for(let n=0;n<20;n++)t.push(e[Math.floor(Math.random()*e.length)]);return t.join("")}function c(e){let t=[],n=e/2,s=Array(n).fill(0).map((e,t)=>t),i=Array(e).fill(0).map((e,t)=>t),a=[["./images/dogs/dog-1.jpg","./images/dogs/dog-2.jpg","./images/dogs/dog-3.jpg"],["./images/cats/cat-1.jpg","./images/cats/cat-2.jpg","./images/cats/cat-3.jpg"],["./images/zebra/zebra-1.jpg","./images/zebra/zebra-2.jpg","./images/zebra/zebra-3.jpg"],["./images/horses/horse-1.jpg","./images/horses/horse-2.jpg","./images/horses/horse-3.jpg"],["./images/owls/owl-1.jpg","./images/owls/owl-2.jpg","./images/owls/owl-3.jpg"],["./images/mouses/mouse-1.jpg","./images/mouses/mouse-2.jpg","./images/mouses/mouse-3.jpg"],["./images/rabbits/rabbit-1.jpg","./images/rabbits/rabbit-2.jpg","./images/rabbits/rabbit-3.jpg"],["./images/snakes/snake-1.jpg","./images/snakes/snake-2.jpg","./images/snakes/snake-3.jpg"]];for(let e=0;e<n;e++){let l=s.splice(r(n)-e,1)[0],c=i.splice(r(i.length),1)[0],d=i.splice(r(i.length),1)[0],u=a.splice(r(a.length),1)[0],m={images:u,pairName:l,position:c,matched:!1,state:"closed",rnd:0,key:o()},p={images:u,pairName:l,position:d,matched:!1,state:"closed",rnd:0,key:o()};t.push(m),t.push(p)}return t}function d(){return(0,s.jsx)("div",{className:"absolute inset-x-0 overflow-hidden h-2 -bottom-1 md:h-auto md:inset-y-0 md:w-2 md:left-auto md:right-2 rounded-full opacity-80 outline outline-[1px] outline-white",children:(0,s.jsx)("span",{className:"bg-red-600 absolute inset-y-0 left-0 w-full animate-bar md:inset-y-auto md:bottom-0 md:inset-x-0"})})}function u(e){let t,n,r,{setLevel:o,level:u,setBoard:m,board:p}=e,[g,f]=(0,i.useState)("starting"),[h,x]=(0,i.useState)(null),[j,b]=(0,i.useState)(0),[v,w]=(0,i.useState)(0),[k,N]=(0,i.useState)(0),y=(0,i.useRef)(null),_="master"===u?8:"intermediate"===u?6:4,C=(0,i.useRef)(null);function S(e,t,n){let s=[...e],i=s.findIndex(e=>e.position===(null==h?void 0:h.position)),r=s.findIndex(e=>e.position===t.position);return s[i]={...s[i],state:n},s[r]={...s[r],state:n},s}function I(e){let t=setTimeout(()=>{m(t=>{let n=[...t],s=n.findIndex(t=>t.position===e.position);return n[s]={...n[s],state:"closing"},n}),setTimeout(()=>{m(t=>{let n=[...t],s=n.findIndex(t=>t.position===e.position);return n[s]={...n[s],state:"closed"},n})},1e3),x(null),f("idle")},2e3);C.current=t}async function T(e){if(C.current&&(clearTimeout(C.current),C.current=null),await new Promise(e=>setTimeout(()=>e(null),1e3)),(null==h?void 0:h.pairName)===e.pairName){m(t=>S(t,e,"matched"));let t=v+1;if(w(t),t===_){f("finnished"),y.current&&clearInterval(y.current);return}}else m(t=>S(t,e,"closing")),setTimeout(()=>{m(t=>S(t,e,"closed"))},1e3);x(null),f("idle")}function O(){f("starting"),w(0),b(0),x(null),m(c(2*_)),y.current&&clearInterval(y.current),y.current=null,N(0)}function E(){y.current=setInterval(()=>{N(e=>e+1e3)},1e3)}return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"grid md:grid-flow-col",children:[(0,s.jsxs)("div",{className:"grid ".concat("finnished"===g?"grid-flow-row":"grid-flow-col"," place-content-center p-4 gap-y-2 gap-x-8 md:grid-flow-row md:pr-12 relative md:self-center"),children:[(0,s.jsx)("div",{className:"grid place-content-center text-white font-mono text-lg",children:(0,s.jsx)("p",{children:(t=Math.floor(k%6e4/1e3),((n=Math.floor(k%36e5/6e4))<10?"0"+n:n)+":"+(t<10?"0"+String(t):String(t)))})}),(0,s.jsx)(l,{clicks:j,scored:"".concat(v," / ").concat(_)}),(0,s.jsxs)("div",{className:"grid gap-3 place-content-center",children:[(0,s.jsx)("button",{onClick:O,className:"rounded-md outline outline-1 outline-white text-white tracking-wider uppercase font-semibold py-1 px-2 md:py-2 md:px-3 hover:opacity-60",children:"Reset"}),(0,s.jsx)("button",{onClick:function(){O(),o(null)},className:"rounded-md outline outline-1 outline-white text-white tracking-wider uppercase font-semibold py-1 px-2 md:py-2 md:px-3 hover:opacity-60",children:"Go back"})]}),"finnished"===g?(0,s.jsx)("h1",{className:"text-3xl text-white font-mono uppercase",children:"Congratulations"}):"pending"===g?(0,s.jsx)(d,{}):null]}),"finnished"!==g?(0,s.jsx)("div",{className:"grid place-content-center gap-3 grid-rows-4 grid-flow-col p-3 md:p-8 rounded-lg overflow-hidden",children:p.sort((e,t)=>e.position>t.position?1:-1).map(e=>(0,s.jsx)(a,{card:e,gameState:g,setGameState:f,setPendingCard:x,checkForPair:T,pendingCard:h,setBoard:m,board:p,setClicks:b,startPendingTimeout:I,startTimer:E},e.key))}):null]})})}function m(e){let{handleClick:t}=e;return(0,s.jsxs)("div",{className:"font-mono tracking-wider",children:[(0,s.jsx)("h1",{className:"text-3xl uppercase font-bold my-6",children:"Choose level"}),(0,s.jsxs)("ul",{className:"grid gap-3  text-[rgb(200,100,20)] text-xl ",children:[(0,s.jsx)("li",{className:"grid",children:(0,s.jsx)("button",{onClick:()=>t("newbie"),className:"gradient rounded-md tracking-wider uppercase font-semibold py-3 px-6 hover:opacity-60",children:"Newbe"})}),(0,s.jsx)("li",{className:"grid",children:(0,s.jsx)("button",{onClick:()=>t("intermediate"),className:"gradient rounded-md tracking-wider uppercase font-semibold py-3 px-6 hover:opacity-60",children:"Intermediate"})}),(0,s.jsx)("li",{className:"grid",children:(0,s.jsx)("button",{onClick:()=>t("master"),className:"gradient rounded-md tracking-wider uppercase font-semibold py-3 px-6 hover:opacity-60",children:"Master"})})]})]})}function p(){let[e,t]=(0,i.useState)(null),[n,r]=(0,i.useState)([]);return(0,s.jsx)("main",{className:"grid min-h-screen main-container place-content-center",children:e?(0,s.jsx)(u,{level:e,setLevel:t,board:n,setBoard:r}):(0,s.jsx)(m,{handleClick:function(e){t(e),r(c("master"===e?16:"intermediate"===e?12:8))}})})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(6006),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!o.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[667,488,744],function(){return e(e.s=5609)}),_N_E=e.O()}]);