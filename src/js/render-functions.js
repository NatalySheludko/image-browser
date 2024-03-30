export function createImgGallery(images) {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
			}) => `<li class="gallery-item">			
			<div class="img-wrap">
			<a class="img-link" href="${largeImageURL}">
			<img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
			</a></div>			
			<ul class="data-wrapper">
				<li class="wrap-item">
					<p class="wrap-title">Likes</p>
					<span class="wrap-text">${likes}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Views</p>
					<span class="wrap-text">${views}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Comments</p>
					<span class="wrap-text">${comments}</span> </li>
				<li class="wrap-item">
					<p class="wrap-title">Downloads</p>
					<span class="wrap-text">${downloads}</span> </li>				
			</ul>
			</li>`
    )
    .join("");
}
