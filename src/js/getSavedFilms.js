import { refs } from './getRefs';
import { renderFilmGallery } from './renderFilmGallery';
import { Pagination } from './components/pagination-api';
import { setConfigState } from './components/savedPageConfig';

const searchPaginationEl = document.querySelector('.pagination-wrap');
let filmsLIstOnCurrentPage = null;
let filmsPerPage = 20;
let currentPage = 1;
let startRenderFilm = null;
let endRenderFilm = null;

function getSavedFilms(storageKey) {
  const dataJSON = localStorage.getItem(storageKey);
  const data = JSON.parse(dataJSON);

  if (!data || data.results.length === 0) {
    return (refs.filmGallery.innerHTML = `No saved movies in ${storageKey}.`);
  }

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
  setConfigState('onQueueBtnClick');
  getSavedFilms('queue');
}

function onWatchedBtnClick() {
    setConfigState('onWatchedBtnClick');
  getSavedFilms('watched');
}

export { onQueueBtnClick, onWatchedBtnClick };
