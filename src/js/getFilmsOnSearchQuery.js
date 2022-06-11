import { renderFilmGallery } from "./renderFilmGallery";
import { startLoader, stopLoader } from "./loaderSpinner";
import { onFetchError } from "./onFetchError";
import { fetchFilmsOnSearch } from "./ApiService";
import { Pagination } from './components/pagination-api';
import {queryCurr, errNotificationShow} from './onSearch';

const searchPaginationEl = document.querySelector('.pagination-wrap');
export const searchPagination = new Pagination('search'); 

export function getSearchFilms(queryCurr) {
    startLoader();

    fetchFilmsOnSearch({page:searchPagination.page, query:queryCurr})
        .then(films => {
          if (films.total_results === 0){
            errNotificationShow('Search result not successful. Enter the correct movie name and try again.', 5000)
            return;
            }
          renderFilmGallery(films);
          searchPagination.create({ 
            prelink: searchPaginationEl,   
            totalPages: films.total_pages,
            currentEvent: getSearchMovies,
          });
    })
        .catch(onFetchError)
        .finally(stopLoader)
  }
function getSearchMovies() {
    startLoader();
    fetchFilmsOnSearch({page:searchPagination.page, query:queryCurr})
      .then(films => {
        renderFilmGallery(films);
      })
      .catch(onFetchError)
      .finally(stopLoader)
  }