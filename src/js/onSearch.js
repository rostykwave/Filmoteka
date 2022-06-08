import { filmApiService } from "./ApiService";
import { refs } from "./getRefs";
import { startLoader, stopLoader } from "./loaderSpinner";
import { onFetchError } from "./onFetchError";
import { renderFilmGallery } from "./renderFilmGallery";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs.searchForm.addEventListener('submit', onSearch);

export function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.searchQuery.value.trim();
  console.log(query);

  const validQuery = queryValidation(query);
  console.log(validQuery);

    filmApiService.setProps(validQuery);

       //Loader start
       startLoader();
    
    filmApiService.fetchCards('searchQuery')
        .then(films => {
            console.log('searchQuery', films);
            //Loader stop
            stopLoader();
            if (films.total_results === 0){
              Notify.failure('Search result not successful. Enter the correct movie name and try again.');
              return;}

        renderFilmGallery(films);
    })
        .catch(onFetchError)
        .finally(console.log('fetch searchQuery done'));

    function queryValidation(query){
          if(query === ''){
              Notify.failure('Please, fill the search query and try again.');
              return;   
          }
          let pattern = /[-a-zA-Z0-9]/ig;
          if(!pattern.test(query)){
              Notify.failure('Please, enter the correct movie name and try again.');
              return;   
          }
          const validQuery = query;
          return validQuery;
      }
}









