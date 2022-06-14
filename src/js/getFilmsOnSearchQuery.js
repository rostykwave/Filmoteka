import { renderFilmGallery } from './renderFilmGallery';
import { startLoader, stopLoader } from './loaderSpinner';
import { onFetchError } from './onFetchError';
import { fetchFilmsOnSearch } from './ApiService';
import { Pagination } from './components/pagination-api';
import { queryCurr, errNotificationShow } from './onSearch';
import { setConfigState } from './components/savedPageConfig';

const searchPaginationEl = document.querySelector('.pagination-wrap');
const localSavedQuery = JSON.parse(localStorage.getItem('reloadAction'));

let lastQuery = localSavedQuery?.q || '';

export function getSearchFilms(queryCurr) {
  const searchPagination = new Pagination('search');

  if (queryCurr !== lastQuery) {
    searchPagination.resetPage();
  }

  lastQuery = queryCurr;

  startLoader();

  getSearchMovies()
    .then(films => {
      searchPagination.create({
        prelink: searchPaginationEl,
        totalPages: films.total_pages,
        currentEvent: getSearchPerPageMovies,
      });
    })
    .catch(onFetchError)
    .finally(stopLoader);

  function getSearchPerPageMovies() {
    startLoader();
    getSearchMovies().catch(onFetchError).finally(stopLoader);
  }

  function getSearchMovies() {
    return fetchFilmsOnSearch({ page: searchPagination.page, query: queryCurr }).then(films => {
      if (films.total_results === 0) {
        errNotificationShow(
          'Search result not successful. Enter the correct movie name and try again.',
          5000,
        );
        return;
      }
      renderFilmGallery(films);
      return films;
    });
  }
}
