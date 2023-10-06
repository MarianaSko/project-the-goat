(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function T(n){if(Array.isArray(n)){for(var e=0,o=Array(n.length);e<n.length;e++)o[e]=n[e];return o}else return Array.from(n)}var y=!1;if(typeof window<"u"){var h={get passive(){y=!0}};window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}var s=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),l=[],u=!1,p=-1,c=void 0,d=void 0,a=void 0,g=function(e){return l.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},f=function(e){var o=e||window.event;return g(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},P=function(e){if(a===void 0){var o=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(o&&i>0){var t=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);a=document.body.style.paddingRight,document.body.style.paddingRight=t+i+"px"}}c===void 0&&(c=document.body.style.overflow,document.body.style.overflow="hidden")},w=function(){a!==void 0&&(document.body.style.paddingRight=a,a=void 0),c!==void 0&&(document.body.style.overflow=c,c=void 0)},M=function(){return window.requestAnimationFrame(function(){if(d===void 0){d={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,i=e.scrollX,t=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var r=t-window.innerHeight;r&&o>=t&&(document.body.style.top=-(o+r))})},300)}})},b=function(){if(d!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=d.position,document.body.style.top=d.top,document.body.style.left=d.left,window.scrollTo(o,e),d=void 0}},A=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},O=function(e,o){var i=e.targetTouches[0].clientY-p;return g(e.target)?!1:o&&o.scrollTop===0&&i>0||A(o)&&i<0?f(e):(e.stopPropagation(),!0)},x=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!l.some(function(t){return t.targetElement===e})){var i={targetElement:e,options:o||{}};l=[].concat(T(l),[i]),s?M():P(o),s&&(e.ontouchstart=function(t){t.targetTouches.length===1&&(p=t.targetTouches[0].clientY)},e.ontouchmove=function(t){t.targetTouches.length===1&&O(t,e)},u||(document.addEventListener("touchmove",f,y?{passive:!1}:void 0),u=!0))}},E=function(){s&&(l.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),u&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),u=!1),p=-1),s?b():w(),l=[]},S=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}l=l.filter(function(o){return o.targetElement!==e}),s&&(e.ontouchstart=null,e.ontouchmove=null,u&&l.length===0&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),u=!1)),s?b():w()};const I=Object.freeze(Object.defineProperty({__proto__:null,disableBodyScroll:x,clearAllBodyScrollLocks:E,enableBodyScroll:S},Symbol.toStringTag,{value:"Module"})),L=document.querySelector(".js-menu-container"),v=document.querySelector(".js-open-menu"),k=document.querySelector(".js-close-menu"),B=()=>{const n=v.getAttribute("aria-expanded")==="true"||!1;v.setAttribute("aria-expanded",!n),L.classList.toggle("is-open"),I[n?"enableBodyScroll":"disableBodyScroll"](document.body)};v.addEventListener("click",B);k.addEventListener("click",B);window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(L.classList.remove("is-open"),v.setAttribute("aria-expanded",!1),S(document.body))});