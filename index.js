import{S as d,i as p}from"./assets/vendor-CNpq9t8i.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(i){const s=r=>{let e=document.createElement("div");return e.innerHTML=r.trim(),e.firstChild};let a=new DocumentFragment;return i.length>0?i.forEach(r=>{const{largeImageURL:e,webformatURL:t,likes:o,views:n,comments:l,downloads:c}=r;a.appendChild(s(`
        <div class="gallery-item">
              <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  src="${t}"
                />
              </a>
              <div class="bottom-panel">
                <div class="like-chip">
                  <span class="material-symbols-outlined">thumb_up</span>
                  <p class="like-number chip-text">${o}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">visibility</span>
                  <p class="like-number chip-text">${n}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">chat</span>
                  <p class="like-number chip-text">${l}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">download</span>
                  <p class="like-number chip-text">${c}</p>
                </div>
              </div>
        </div>`))}):a.appendChild(s(`
        <div class="not-found">
              <span class="material-symbols-outlined">search_off</span>
              <p>Sorry, there are no images matching your search query. Please try again!</p>
        </div>`)),a}const m=document.querySelector(".btn-search-text"),h=document.querySelector(".loader");let f=new d(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1});function y(i,s="flower",a){const r=new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"portrait",safesearch:"true"});console.log(`https://pixabay.com/api/?${r}`);const e={headers:{Accept:"application/json"}};fetch(`https://pixabay.com/api/?${r}`,e).then(t=>t.json()).then(t=>{setTimeout(()=>{console.log(t),a.innerHTML="",a.appendChild(u(t.hits)),window.scrollTo({top:0,behavior:"smooth"}),f.refresh(),m.classList.remove("hidden"),h.classList.add("hidden")},500)}).catch(t=>{p.error({title:t.message})})}let g=document.querySelector(".gallery");const b=document.querySelector(".btn-search"),v=document.querySelector(".input-search"),S=document.querySelector(".btn-search-text"),L=document.querySelector(".loader");b.addEventListener("click",i=>{const s=v.value;s.length>0&&(S.classList.add("hidden"),L.classList.remove("hidden"),y("46528220-f321f8a91f42a85f9ca952d44",s,g))});
//# sourceMappingURL=index.js.map
