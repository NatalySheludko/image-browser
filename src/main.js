import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createImgGallery } from "./js/render-functions";
import { getImgGallery } from "./js/pixabay-api";
import { perPage } from "./js/pixabay-api";

const refs = {
  imgGalleryForm: document.querySelector(".gallery-form"),
  galleryContainer: document.querySelector(".gallery"),
  loadMoreBtn: document.querySelector("#load-more"),
  loader: document.querySelector(".loader"),
};

let page = 1;
let images;
let totalPages = 0;
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

refs.imgGalleryForm.addEventListener("submit", onHandleSubmit);
refs.loadMoreBtn.addEventListener("click", onLoadMoreClick);
hiddenLoading();

async function onHandleSubmit(e) {
  e.preventDefault();

  images = e.target.elements.imgName.value;

  refs.galleryContainer.innerHTML = "";
  page = 1;

  if (!images) {
    showDataStatusError();
    return;
  }

  try {
    showLoading();
    hiddenLoadMoreBtn();
    const data = await getImgGallery(images, page);
    totalPages = Math.ceil(data.totalHits / perPage);

    if (data.hits.length === 0) {
      showDataStatusError();
      e.target.reset();
      return;
    }

    const markupGallery = createImgGallery(data.hits);
    refs.galleryContainer.insertAdjacentHTML("beforeend", markupGallery);
    gallery.refresh();
  } catch (error) {
    console.log(error);
  }

  hiddenLoading();
  checkLoadBtnStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  showLoading();
  try {
    const data = await getImgGallery(images, page);
    const markupGallery = createImgGallery(data.hits);
    refs.galleryContainer.insertAdjacentHTML("beforeend", markupGallery);
    gallery.refresh();
    displayScroll();
  } catch (error) {
    console.log(error);
  }

  hiddenLoading();
  checkLoadBtnStatus();
}

function showDataStatusError() {
  hiddenLoadMoreBtn();
  iziToast.error({
    position: "topRight",
    backgroundColor: "#e4a5ac",
    close: true,
    messageColor: "#774144",
    message:
      "❗Sorry, there are no images matching your search query. Please try again!",
  });
  hiddenLoading();
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove("visually-hidden");
}

function hiddenLoadMoreBtn() {
  refs.loadMoreBtn.classList.add("visually-hidden");
}

function showLoading() {
  refs.loader.style.display = "block";
}

function hiddenLoading() {
  refs.loader.style.display = "none";
}

function checkLoadBtnStatus() {
  if (page >= totalPages) {
    hiddenLoadMoreBtn();
    iziToast.error({
      position: "topRight",
      backgroundColor: "#e4a5ac",
      close: true,
      messageColor: "#774144",
      message: "❗We're sorry, but you've reached the end of search results.",
    });
    refs.loadMoreBtn.classList.add("visually-hidden");
  } else {
    showLoadMoreBtn();
  }
}

function displayScroll() {
  const height =
    refs.galleryContainer.firstChild.getBoundingClientRect().height;
  scrollBy({
    top: height * 2,
    behavior: "smooth",
  });
}
