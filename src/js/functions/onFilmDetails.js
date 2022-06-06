import renderFilmDetails from './renderFilmDetails'
import FilmApiService from './ApiService';
const filmApiService = new FilmApiService();

export default function onFilmDetails() { 
    filmApiService.resetPage();
    filmApiService.fetchCards('filmInfo', '744')
        .then(data => {
        renderFilmDetails(data);
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
//  32478