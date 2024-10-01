import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});

export function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <div class="card">
      <div class="card-image">
        <a href="${largeImageURL}" class="gallery-item-link">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
      </div>
      <div class="card-body">
        <p class="card-text">Likes ${likes}</p>
        <p class="card-text">Views ${views}</p>
        <p class="card-text">Comments ${comments}</p>
        <p class="card-text">Downloads ${downloads}</p>
      </div>
    </div>`;
}

export function renderImages(images, container) {
  const imagesMarkup = images.map(createMarkup).join('');
  container.innerHTML = imagesMarkup;

  lightbox.refresh();
}
