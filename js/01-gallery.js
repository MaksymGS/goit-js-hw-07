import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handlerImageClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
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
    return;
  }

  const source = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <div class="modal">
      <img src="${source}" width = "100%"/>
          </div>
`,
    {
      onShow: () => {
        document.addEventListener("keydown", handlerKey);
      },
    }
  );
  instance.show();
  function handlerKey(evt) {
       if (evt.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handlerKey);
    }
  }
}
