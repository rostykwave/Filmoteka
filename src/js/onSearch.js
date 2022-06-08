import { filmApiService } from "./ApiService";
import { refs } from "./getRefs";
import { startLoader, stopLoader } from "./loaderSpinner";
import { onFetchError } from "./onFetchError";
import { renderFilmGallery } from "./renderFilmGallery";

refs.searchForm.addEventListener('submit', onSearch);

export function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.searchQuery.value;

  filmApiService.resetPage();

    filmApiService.setProps(query);

     refs.filmGallery.innerHTML = '';
       //Loader start
       startLoader();
    
    filmApiService.fetchCards('searchQuery')
        .then(data => {
            console.log('searchQuery', data);

            //Loader stop
            stopLoader();

        renderFilmGallery(data);
    })
        .catch(onFetchError)
        .finally(console.log('fetch searchQuery done'));
}