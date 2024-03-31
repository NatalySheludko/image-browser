import{a as C,S as M,i as g}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function m(t){return t.map(({largeImageURL:r,webformatURL:s,tags:n,likes:e,views:a,comments:l,downloads:v})=>`<li class="gallery-item">			
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
					<span class="wrap-text">${v}</span> </li>				
			</ul>
			</li>`).join("")}const y=15;async function f(t,r){try{return(await C.get("https://pixabay.com/api/",{params:{key:"42911891-070dc2b99870cce1062cd0bc6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:r}})).data}catch(s){console.log(s)}}const o={imgGalleryForm:document.querySelector(".gallery-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector(".loader")};let i=1,c,h=0,w=new M(".gallery a",{captionsData:"alt",captionDelay:250});o.imgGalleryForm.addEventListener("submit",S);o.loadMoreBtn.addEventListener("click",B);d();async function S(t){if(t.preventDefault(),c=t.target.elements.imgName.value,o.galleryContainer.innerHTML="",i=1,!c){p();return}try{L(),u();const r=await f(c,i);if(h=Math.ceil(r.totalHits/y),r.hits.length===0){p(),t.target.reset();return}const s=m(r.hits);o.galleryContainer.insertAdjacentHTML("beforeend",s),w.refresh()}catch(r){console.log(r)}d(),b(),t.target.reset()}async function B(){i+=1,L();try{const t=await f(c,i),r=m(t.hits);o.galleryContainer.insertAdjacentHTML("beforeend",r),w.refresh(),x()}catch(t){console.log(t)}d(),b()}function p(){u(),g.error({position:"topRight",backgroundColor:"#e4a5ac",close:!0,messageColor:"#774144",message:"❗Sorry, there are no images matching your search query. Please try again!"}),d()}function q(){o.loadMoreBtn.classList.remove("visually-hidden")}function u(){o.loadMoreBtn.classList.add("visually-hidden")}function L(){o.loader.style.display="block"}function d(){o.loader.style.display="none"}function b(){i>=h?(u(),g.error({position:"topRight",backgroundColor:"#e4a5ac",close:!0,messageColor:"#774144",message:"❗We're sorry, but you've reached the end of search results."}),o.loadMoreBtn.classList.add("visually-hidden")):q()}function x(){const t=o.galleryContainer.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
