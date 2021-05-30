import defaultExport from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup (defaultExport);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup (images) {
    return images.map(({preview, original, description}) => {
     return `
            <li class="gallery__item">
                <a
                    class="gallery__link"
                    href= "#"
                >
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </li> 
         `;
        }).join('');
}

//================================открыть модалку ========================================
 // href="${original}"
//клик по картинке
// galleryContainer.addEventListener('click', onGalleryContainerClick);

// function onGalleryContainerClick(event) {
//     const isGallerySwatch = event.target.classList.contains('gallery__item');
    
//     if(!isGallerySwatch){
//         return;
//     }
//     //console.log(event.target)
// }

//================================открыть модалку ========================================

const openModalImage = document.querySelector('.js-lightbox');
const lightboxImage = openModalImage.querySelector('.lightbox__image');
const closeModalImage = document.querySelector('[data-action="close-lightbox"]'); 
//const closeModalBtn = document.querySelector('.lightbox__button');

//класс is-open на модальное окно
galleryContainer.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    openModalImage.classList.add('is-open');

    lightboxImage.src = event.target.dataset.source;
    lightboxImage.alt = event.target.alt;
}

//================================звакрыть модалку ========================================

closeModalImage.addEventListener('click', onCloseModal);

function onCloseModal() {
    openModalImage.classList.remove('is-open');
     
    lightboxImage.src = '';
    lightboxImage.alt = '';
}

//================================пролистывание изображений ========================================


const arrayImages = [];

document.addEventListener('keydown', event => {
    let newIndex;
    const swipeGalleryImage = arrayImages.indexOf(lightboxImage.src);
    if (event.key === 'ArrowLeft') {
        if (swipeGalleryImage > -1) {
            newIndex = swipeGalleryImage - 1;
            if (newIndex === -1) {
                newIndex = arrayImages.length - 1;
            }    
        }
    }
})