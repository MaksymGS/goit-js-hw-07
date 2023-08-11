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

function handlerImageClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    console.log(evt.target);
    console.log(evt.currentTarget);
    return;
  }

  const source = evt.target.dataset.source;
  console.log(evt.target);

  const modalAlt = evt.target.getAttribute("alt");
  console.log(modalAlt);
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${source}" alt=${modalAlt} width = "100%"/>
          </div>
`);
  instance.show();
  document.addEventListener("keydown", (evt) => {
    console.log(evt);
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
