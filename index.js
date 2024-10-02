import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",d="46242953-36a889fc8768a1b98d790c67f";function f(a){const t=`${u}?key=${d}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()})}const m=new l(".gallery a",{captionsData:"alt",captionDelay:200});function y({webformatURL:a,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:s}){return`
    <div class="card">
      <div class="card-image">
        <a href="${t}" class="gallery-item-link">
          <img src="${a}" alt="${o}" />
        </a>
      </div>
      <div class="card-body">
        <p class="card-text">Likes ${n}</p>
        <p class="card-text">Views ${e}</p>
        <p class="card-text">Comments ${r}</p>
        <p class="card-text">Downloads ${s}</p>
      </div>
    </div>`}function p(a,t){const o=a.map(y).join("");t.innerHTML=o,m.refresh()}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};console.log(i.loader);i.form.addEventListener("submit",b);function g(){i.loader.style.display="block"}function h(){i.loader.style.display="none"}function b(a){a.preventDefault();const t=a.currentTarget.elements.query.value.trim();if(t===""){c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",position:"topRight"});return}i.gallery.innerHTML="",g(),f(t).then(o=>{setTimeout(()=>{o.hits.length===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):p(o.hits,i.gallery)},300),h()}).catch(o=>{c.show({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{i.form.reset()})}
//# sourceMappingURL=index.js.map
