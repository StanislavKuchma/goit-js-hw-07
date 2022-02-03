import { galleryItems } from './gallery-items.js';

const container = document.querySelector(`div[class="gallery"]`);

const imageMarkup = createImageItem(galleryItems);

container.insertAdjacentHTML(`beforeend`, imageMarkup);

container.addEventListener(`click`, onClick);

function createImageItem(item) {
   return item
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    >
    </a>
    </div>`
        })
        .join(``);
 }

function onClick(evt) { 
     evt.preventDefault();
    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
    }


const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show(() => { window.addEventListener(`keydown`, onEskKeyPress) });

function onEskKeyPress(evt) {
    if (evt.code === `Escape`) {
        instance.close(() => {window.removeEventListener(`keydown`, onEskKeyPress)}) 
      }
  }
 }

