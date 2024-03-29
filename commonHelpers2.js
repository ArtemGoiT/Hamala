(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".timer-time"),l="14 April 2024";let a;const d=()=>{const s=new Date().getTime(),r=(new Date(l).getTime()-s)/1e3,i=Math.floor(r/60/60/24),e=Math.floor(r/60/60%24),t=Math.floor(r/60%60);c.innerHTML=`
    <div class="timer-count">${i}<span>дней</span></div>
    <div class="timer-sep">:</div>
    <div class="timer-count">${(""+e).padStart(2,"0")}<span>часов</span></div>
    <div class="timer-sep">:</div>
    <div class="timer-count">${(""+t).padStart(2,"0")}<span>минут</span></div>`,r<=0&&(clearInterval(a),c.textContent="акция закончилась")};d();a=setInterval(d,500);
//# sourceMappingURL=commonHelpers2.js.map
