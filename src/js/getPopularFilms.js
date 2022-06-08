import { filmApiService } from './ApiService';
import { onFetchError } from './onFetchError';
import { renderFilmGallery } from './renderFilmGallery';
import {startLoader, stopLoader} from './loaderSpinner'
// import { renderFilmGallery } from './renderFilmGallery';

// console.log('startLoader :>> ', startLoader);

export function getPopularFilms() {

    console.log('getPopularFilms');

    filmApiService.setProps('day');
    //Loader start
    startLoader();

    filmApiService.fetchCards('popularFilm')
        .then(data => {
            console.log(data);

            //Loader stop
            stopLoader();
            
            renderFilmGallery(data);
            
        
    })
        .catch(onFetchError)
        .finally(console.log('fetch popularFilm done'));
};