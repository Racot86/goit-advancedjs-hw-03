import './js/render-functions.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import injectElementsDataFromPixaBaySearch from './js/pixabay-api.js';
import iziToast from 'izitoast';

let gallery = document.querySelector('.gallery');
const inputBtn = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.input-search');
const btnSearchText = document.querySelector('.btn-search-text');
const loader = document.querySelector('.loader');

inputBtn.addEventListener('click', e => {
  const data = inputSearch.value;
  if (data.length > 0){
    btnSearchText.classList.add('hidden');
    loader.classList.remove('hidden');
    injectElementsDataFromPixaBaySearch('46528220-f321f8a91f42a85f9ca952d44', data, gallery);
  }

});

