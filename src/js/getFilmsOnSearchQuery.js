import { onFetchError } from "./onFetchError";
import { filmApiService } from "./ApiService";
import { renderFilmGallery } from './renderFilmGallery';

export function getFilmsOnSearchQuery(query) {

    filmApiService.fetchCards('searchQuery', query)
        .then(data => {
            console.log('searchQuery', data);
        renderFilmGallery(data);
    })
        .catch(onFetchError)
        .finally(console.log('fetch searchQuery done'));
};