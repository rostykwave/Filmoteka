import renderFilmDetails from './renderFilmDetails'
import FilmApiService from './ApiService';
const filmApiService = new FilmApiService();

export default function onFilmDetails() { 
    filmApiService.resetPage();
    filmApiService.fetchCards('filmInfo', '32478')
        .then(data => {
            console.log(data);
            console.log(data.poster_path);
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