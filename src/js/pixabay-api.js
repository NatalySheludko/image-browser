import axios from "axios";

export const perPage = 15;

export async function getImgGallery(images, page) {
  try {
    const res = await axios.get("https://pixabay.com/api/", {
      params: {
        key: "42911891-070dc2b99870cce1062cd0bc6",
        q: images,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: perPage,
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
