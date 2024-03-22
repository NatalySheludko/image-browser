export default function getImgGallery(imagesEl) {
  const BASE_URL = "https://pixabay.com/api/";
  const params = new URLSearchParams({
    key: "42911891-070dc2b99870cce1062cd0bc6",
    q: imagesEl,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res =>
    res.json().catch(error => {
      console.log(error);
    })
  );
}
