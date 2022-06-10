import { fetchFilmsOnSearch } from "./ApiService";
import { refs } from "./getRefs";
import { startLoader, stopLoader } from "./loaderSpinner";
import { onFetchError } from "./onFetchError";
import { renderFilmGallery } from "./renderFilmGallery";
import { Pagination } from './components/pagination-api';

refs.searchForm.addEventListener('submit', onSearch);

const searchPaginationEl = document.querySelector('.pagination-wrap');
const searchPagination = new Pagination('search'); 
let resultTotalPages = 0;

export function onSearch(e) {
  e.preventDefault();

searchPagination.resetPage();

  const query = e.currentTarget.elements.searchQuery.value.trim();
  console.log(query);

  if(query === ''){
    errNotificationShow('Please, fill the search query and try again.', 3000)
    return;   
  }
  let pattern = /^[a-z0-9-\s]+$/i;
  if (!pattern.test(query)){
    errNotificationShow('Please, enter the correct movie name and try again.', 3000)
    return; 
  } 
console.log(query);
const page = 1;

  startLoader();
    
  fetchFilmsOnSearch({page, query})
        .then(films => {
            console.log('searchQuery', films);

            if (films.total_results === 0){
              errNotificationShow('Search result not successful. Enter the correct movie name and try again.', 5000)
              return;
              }
                resultTotalPages = films.total_pages;
 
                searchPagination.create({ 
                  prelink: searchPaginationEl,   
                  totalPages: resultTotalPages,
                });
                console.log('RENDER');
                renderFilmGallery(films);
                searchPagination.addPaginationEvent(getSearchMovies);
    })
        .catch(onFetchError)
        .finally(()=>{
          stopLoader();
          console.log('fetch searchQuery done');});
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
  function getSearchMovies() {
    filmApiService.setPage(searchPagination.page)
    startLoader();
    filmApiService.fetchCards('searchQuery')
        .then(films => {
            stopLoader();
                console.log('RENDER');
                renderFilmGallery(films);
    })
        .catch(onFetchError)
  }