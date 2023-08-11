import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
{
  /* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */
}
const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handlerImageClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join("");
}
const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`)