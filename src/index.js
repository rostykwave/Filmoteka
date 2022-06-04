//Templates
import photoCardTpl from './templates/film-card.hbs';


///Example that templates works
const refs = {
    cardContainer: document.querySelector('.gallery'), 
}
const dataHits = [{ id: 53633 }, { id: 576655 }];
refs.cardContainer.insertAdjacentHTML('beforeend', photoCardTpl(dataHits));
/////////////////////



///BackEnd///
import FilmApiService from './js/ApiService';
const filmApiService = new FilmApiService();

filmApiService.query = 'Spider';

filmApiService.resetPage();

filmApiService.fetchCards()
    .then(data => {
        console.log(data);
        console.log(data.dataResults);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(console.log('Fetched'));