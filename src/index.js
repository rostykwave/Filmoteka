//Templates
import photoCardTpl from './templates/film-card.hbs';


///Example that templates works
const refs = {
    cardContainer: document.querySelector('.gallery'), 
}
const dataHits = [{ id: 53633 }, { id: 576655 }];
refs.cardContainer.insertAdjacentHTML('beforeend', photoCardTpl(dataHits));
/////////////////////