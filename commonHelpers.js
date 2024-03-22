import{S as c,i as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(o){return o.map(({largeImageURL:r,webformatURL:a,tags:s,likes:e,views:t,comments:i,downloads:n})=>`<li class="gallery-item">
			<div class="img-wrap">
			<a class="img-link" href="${r}">
			<img class="gallery-image" src="${a}" alt="${s}" />
			</a></div>	
			<ul class="data-wrapper">
				<li class="wrap-item">
					<p class="wrap-title">Likes</p>
					<span class="wrap-text">${e}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Views</p>
					<span class="wrap-text">${t}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Comments</p>
					<span class="wrap-text">${i}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Downloads</p>
					<span class="wrap-text">${n}</span> </li>				
			</ul>
			</li>`).join("")}function u(o){const r="https://pixabay.com/api/",a=new URLSearchParams({key:"42911891-070dc2b99870cce1062cd0bc6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${r}?${a}`;return fetch(s).then(e=>e.json().catch(t=>{console.log(t)}))}const l={imgGalleryForm:document.querySelector(".gallery-form"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.loader.style.display="none";const d=new c(".gallery a",{captionsData:"alt",captionDelay:250});l.imgGalleryForm.addEventListener("submit",o=>{o.preventDefault(),l.loader.style.display="block";const r=o.target.elements.imgName.value;u(r).then(a=>{if(!r||a.hits.length===0){p.error({position:"topRight",backgroundColor:"#e4a5ac",close:!0,messageColor:"#774144",message:"❗Sorry, there are no images matching your search query. Please try again!"}),l.loader.style.display="none";return}else{const s=m(a.hits);l.galleryContainer.insertAdjacentHTML("beforeend",s),d.refresh(),l.loader.style.display="none"}}).catch(a=>{console.log(a)}),l.imgGalleryForm.reset(),l.galleryContainer.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
