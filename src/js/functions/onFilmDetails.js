//імпорт всіх потрібних функцій
///Refs
import renderFilmDetails from './renderFilmDetails'
import FilmApiService from './ApiService';
const filmApiService = new FilmApiService();

import getRefs from './getRefs';
const refs = getRefs();


export default function onFilmDetails() { 
    filmApiService.resetPage();
    filmApiService.fetchCards('filmInfo', '744')
        .then(data => {
            console.log(data);
        renderFilmDetails(data);
        // console.log(data.dataResults);
        /////Рендеримо розмітку тут///////////
        // renderFilmCards(data)
    })
    .catch(error => {
        console.log(error);
    })
        .finally(console.log('Fetched'));
}

    ///
    //по кліку на картку (Event) бере в неї id
    //По цьому ID робить запит
    //Викликає функцію renderFilmDetails
