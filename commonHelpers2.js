(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".timer-time"),l="29 Mar 2024";let a;const d=()=>{const i=new Date().getTime(),r=(new Date(l).getTime()-i)/1e3,n=Math.floor(r/60/60/24),e=Math.floor(r/60/60%24),t=Math.floor(r/60%60);c.innerHTML=`
    <div class="timer-count">${n}<span>дни</span></div>
    <div class="timer-sep">:</div>
    <div class="timer-count">${(""+e).padStart(2,"0")}<span>часы</span></div>
    <div class="timer-sep">:</div>
    <div class="timer-count">${(""+t).padStart(2,"0")}<span>минуты</span></div>`,r<=0&&(clearInterval(a),c.textContent="акция закончилась")};d();a=setInterval(d,500);
//# sourceMappingURL=commonHelpers2.js.map
