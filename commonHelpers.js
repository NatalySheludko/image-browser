import{a as v,S as C,i as p}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function u(t){return t.map(({largeImageURL:r,webformatURL:s,tags:n,likes:e,views:a,comments:l,downloads:b})=>`<li class="gallery-item">			
			<div class="img-wrap">
			<a class="img-link" href="${r}">
			<img class="gallery-image" src="${s}" alt="${n}" loading="lazy" />
			</a></div>			
			<ul class="data-wrapper">
				<li class="wrap-item">
					<p class="wrap-title">Likes</p>
					<span class="wrap-text">${e}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Views</p>
					<span class="wrap-text">${a}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Comments</p>
					<span class="wrap-text">${l}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Downloads</p>
					<span class="wrap-text">${b}</span> </li>				
			</ul>
			</li>`).join("")}const g=15;async function m(t,r){try{return(await v.get("https://pixabay.com/api/",{params:{key:"42911891-070dc2b99870cce1062cd0bc6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:r}})).data}catch(s){console.log(s)}}const o={imgGalleryForm:document.querySelector(".gallery-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector(".loader")};let i=1,c,y=0,f=new C(".gallery a",{captionsData:"alt",captionDelay:250});o.imgGalleryForm.addEventListener("submit",M);o.loadMoreBtn.addEventListener("click",S);d();async function M(t){if(t.preventDefault(),c=t.target.elements.imgName.value,o.galleryContainer.innerHTML="",i=1,!c){p.error({position:"topRight",backgroundColor:"#e4a5ac",close:!0,messageColor:"#774144",message:"❗Sorry, there are no images matching your search query. Please try again!"}),d(),h();return}try{w();const r=await m(c,i);y=Math.ceil(r.totalHits/g);const s=u(r.hits);o.galleryContainer.insertAdjacentHTML("beforeend",s),f.refresh()}catch(r){console.log(r)}d(),L(),t.target.reset()}async function S(){i+=1,w();try{const t=await m(c,i),r=u(t.hits);o.galleryContainer.insertAdjacentHTML("beforeend",r),f.refresh(),q()}catch(t){console.log(t)}d(),L()}function B(){o.loadMoreBtn.classList.remove("visually-hidden")}function h(){o.loadMoreBtn.classList.add("visually-hidden")}function w(){o.loader.style.display="block"}function d(){o.loader.style.display="none"}function L(){i>=y?(h(),p.error({position:"topRight",backgroundColor:"#e4a5ac",close:!0,messageColor:"#774144",message:"❗We're sorry, but you've reached the end of search results."}),o.loadMoreBtn.classList.add("visually-hidden")):B()}function q(){const t=o.galleryContainer.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
