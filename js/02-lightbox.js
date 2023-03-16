import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img 
           class="gallery__image" 
           src="${preview}" 
           alt="${description}" />
        </a>
     </li>`;
    }).join('');
};
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);  
const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250 });
console.log(galleryItems);



