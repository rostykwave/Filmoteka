import { refs } from './getRefs';
import { renderFilmGallery } from './renderFilmGallery';
import { Pagination } from './components/pagination-api';
import { setConfigState } from './components/savedPageConfig';
import { hidelbrBtn, showLbrBtn } from './clear-library';

const searchPaginationEl = document.querySelector('.pagination-wrap');
let filmsLIstOnCurrentPage = null;
let filmsPerPage = 20;
let currentPage = 1;
let startRenderFilm = null;
let endRenderFilm = null;

export function getSavedFilms(storageKey) {
  const dataJSON = localStorage.getItem(storageKey);
  const data = JSON.parse(dataJSON);

  if (!data || data.results.length === 0) {
  hidelbrBtn();
  refs.filmGallery.innerHTML = `No saved movies in ${storageKey}.`;
    return
  }
showLbrBtn();

  const filmsPagination = new Pagination(storageKey);

  filmsPagination.create({
    prelink: searchPaginationEl,
    totalPages: Math.ceil(data.results.length / filmsPerPage),
    currentEvent: onPaginationEvent,
  });

  function onPaginationEvent() {
    currentPage = filmsPagination.page;
    getFilmsOnCurrentPage(data);
    renderFilmGallery(filmsLIstOnCurrentPage);
  }

  onPaginationEvent();
}

function getFilmsOnCurrentPage({ results }) {
  startRenderFilm = currentPage * filmsPerPage - filmsPerPage;
  endRenderFilm = currentPage * filmsPerPage;
  filmsLIstOnCurrentPage = { results: results.slice(startRenderFilm, endRenderFilm) };
}

function onQueueBtnClick() {

  refs.libraryQueueButton.classList.add('btn--active');
  refs.libraryWatchedButton.classList.remove('btn--active');
 
  setConfigState({funcName:'onQueueBtnClick'});
  getSavedFilms('queue');
}

function onWatchedBtnClick() {
  refs.libraryWatchedButton.classList.add('btn--active');
  refs.libraryQueueButton.classList.remove('btn--active');
 
  setConfigState({funcName:'onWatchedBtnClick'});
  getSavedFilms('watched');
}

export { onQueueBtnClick, onWatchedBtnClick };
