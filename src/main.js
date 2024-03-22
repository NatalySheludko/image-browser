import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createImgGallery from "./js/render-functions";
import getImgGallery from "./js/pixabay-api";

const refs = {
  imgGalleryForm: document.querySelector(".gallery-form"),
  galleryContainer: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
};

refs.loader.style.display = "none";

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

refs.imgGalleryForm.addEventListener("submit", e => {
  e.preventDefault();

  refs.loader.style.display = "block";

  const imagesEl = e.target.elements.imgName.value;

  getImgGallery(imagesEl)
    .then(data => {
      if (!imagesEl || data.hits.length === 0) {
        iziToast.error({
          position: "topRight",
          backgroundColor: "#e4a5ac",
          close: true,
          messageColor: "#774144",
          message:
            "❗Sorry, there are no images matching your search query. Please try again!",
        });

        refs.loader.style.display = "none";

        return;
      } else {
        const createCollection = createImgGallery(data.hits);

        refs.galleryContainer.insertAdjacentHTML("beforeend", createCollection);

        gallery.refresh();

        refs.loader.style.display = "none";
      }
    })
    .catch(error => {
      console.log(error);
    });

  refs.imgGalleryForm.reset();
  refs.galleryContainer.innerHTML = "";
});
