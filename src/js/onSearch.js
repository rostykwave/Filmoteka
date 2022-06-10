import { filmApiService } from "./ApiService";
import { refs } from "./getRefs";
import { startLoader, stopLoader } from "./loaderSpinner";
import { onFetchError } from "./onFetchError";
import { renderFilmGallery } from "./renderFilmGallery";
import { Pagination } from './components/pagination-api';

refs.searchForm.addEventListener('submit', onSearch);
//////////////old version//////////////////////////////
// export function onSearch(e) {
//   e.preventDefault();

//   const query = e.currentTarget.elements.searchQuery.value.trim();
//   console.log(query);

//   if(query === ''){
//     return Notify.failure('Please, fill the search query and try again.');   
//   }

//   let pattern = /[-a-zA-Z0-9]/ig;
//   if (!pattern.test(query)){
//     return Notify.failure('Please, enter the correct movie name and try again.');       
//   } 
//   console.log(query);

//   filmApiService.setProps(query);

//   startLoader();
    
//     filmApiService.fetchCards('searchQuery')
//         .then(films => {
//             console.log('searchQuery', films);
//             //Loader stop
//             stopLoader();
//             if (films.total_results === 0){
//               return Notify.failure('Search result not successful. Enter the correct movie name and try again.');
//               }
//                 console.log('RENDER');
//                 renderFilmGallery(films);
//     })
//         .catch(onFetchError)
//         .finally(console.log('fetch searchQuery done'));
//   }
const searchPaginationEl = document.querySelector('.pagination-wrap');
const searchPagination = new Pagination('search'); 
let resultTotalPages = 0;

export function onSearch(e) {
  e.preventDefault();

refs.searchForm.insertAdjacentHTML('beforeend', '<p class="form-alert is-hidden"></p>');
const formAlert = document.querySelector('.form-alert');
filmApiService.resetPage();
searchPagination.resetPage();

  const query = e.currentTarget.elements.searchQuery.value.trim();
  console.log(query);

  if(query === ''){
formAlert.textContent = 'Please, fill the search query and try again.';
formAlert.classList.toggle('is-hidden');
setTimeout(() => {
  formAlert.classList.toggle('is-hidden');
}, 3000);
    return;   
  }
  let pattern = /[-a-zA-Z0-9]/ig;
  if (!pattern.test(query)){
    formAlert.textContent = 'Please, enter the correct movie name and try again.';
formAlert.classList.toggle('is-hidden');
setTimeout(() => {
  formAlert.classList.toggle('is-hidden');
}, 3000);
    return; 
  } 
  console.log(query);

  filmApiService.setProps(query);

  startLoader();
    
    filmApiService.fetchCards('searchQuery')
        .then(films => {
            console.log('searchQuery', films);
            //Loader stop
            stopLoader();
            if (films.total_results === 0){
              formAlert.textContent = 'Search result not successful. Enter the correct movie name and try again.';
              formAlert.classList.toggle('is-hidden');
              setTimeout(() => {
                formAlert.classList.toggle('is-hidden');
              }, 5000);
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
        .finally(console.log('fetch searchQuery done'));
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