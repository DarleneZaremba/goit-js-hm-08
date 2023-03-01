// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

let gallery = document.querySelector('.gallery');

function galleryElemets(elements) {
  return elements
    .map(
      element => `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
    )
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', galleryElemets(galleryItems));

gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: 0.5,
});
