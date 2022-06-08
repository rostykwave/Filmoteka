import { filmApiService } from './ApiService';
import { onFetchError } from './onFetchError';
import { renderFilmGallery } from './renderFilmGallery';
// import { renderFilmGallery } from './renderFilmGallery';



export function getPopularFilms() {

    console.log('getPopularFilms');

    filmApiService.setProps('day');


    filmApiService.fetchCards('popularFilm')
        .then(data => {
            console.log(data);
        renderFilmGallery(data);
        
    })
        .catch(onFetchError)
        .finally(console.log('fetch popularFilm done'));
};