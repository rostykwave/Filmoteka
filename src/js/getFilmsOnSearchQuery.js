import { onFetchError } from "./onFetchError";
import { filmApiService } from "./ApiService";
import { renderFilmGallery } from './renderFilmGallery';
import {startLoader, stopLoader} from './loaderSpinner'
import { refs } from "./getRefs";

export function getFilmsOnSearchQuery(query) {

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
};