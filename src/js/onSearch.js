import { fetchFilmsOnSearch } from "./ApiService";
import { refs } from "./getRefs";
import { startLoader, stopLoader } from "./loaderSpinner";
import { onFetchError } from "./onFetchError";
import { renderFilmGallery } from "./renderFilmGallery";
import { Pagination } from './components/pagination-api';

refs.searchForm.addEventListener('submit', onSearch);

const searchPaginationEl = document.querySelector('.pagination-wrap');
const searchPagination = new Pagination('search'); 
let queryCurr = '';
export function onSearch(e) {
  e.preventDefault();

  searchPagination.resetPage();

  const query = e.currentTarget.elements.searchQuery.value.trim();

  if(query === ''){
    errNotificationShow('Please, fill the search query and try again.', 3000)
    return;   
  }
  let pattern = /^[a-z0-9-\s]+$/i;
  if (!pattern.test(query)){
    errNotificationShow('Please, enter the correct movie name and try again.', 3000)
    return; 
  } 
  queryCurr = query;
  getSearchFilms(queryCurr)
}
 
function errNotificationShow (message, showTime){
  refs.searchForm.insertAdjacentHTML('beforeend', '<p class="form-alert is-hidden"></p>');
  const formAlert = document.querySelector('.form-alert');
  formAlert.textContent = `${message}`;
  formAlert.classList.toggle('is-hidden');
  setTimeout(() => {
    formAlert.classList.toggle('is-hidden');
    }, showTime);
}

function getSearchFilms(queryCurr) {
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