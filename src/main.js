import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPixabay } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
console.log(refs.loader);
refs.form.addEventListener('submit', onSubmit);

function loaderDisplay() {
  refs.loader.style.display = 'block';
}

function loaderHiden() {
  refs.loader.style.display = 'none';
}

function onSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();

  if (query === '') {
    refs.gallery = null;
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      color: '#ef4040',
      position: 'topRight',
    });
    return;
  }

  refs.gallery.innerHTML = '';
  loaderDisplay();

  fetchPixabay(query)
    .then(data => {
      setTimeout(() => {
        if (data.hits.length === 0) {
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          renderImages(data.hits, refs.gallery);
        }
      }, 300);

      loaderHiden();
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      refs.form.reset();
    });
}
