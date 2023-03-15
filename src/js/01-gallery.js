// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallerySelect = document.querySelector('.gallery');
const imagesToAdd = galleryItems
  .map(
    galleryItem =>
      `<div class ="gallery__item"><a class ="gallery__link" href ="${galleryItem.original}"><img class= "gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join('');
gallerySelect.insertAdjacentHTML('beforeend', imagesToAdd);

let gallery = new SimpleLightbox('.gallery a', {
  caption: 'true',
  captionsData: 'alt',
  captionDelay: 100,
  captionPosition: 'bottom',
});
