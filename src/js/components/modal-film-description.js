import onFilmDetails from "../functions/onFilmDetails";
import renderFilmDetails from '../functions/renderFilmDetails';

export default function modalFilmDescription() {
    const filmItem = document.querySelector('.film-test');
    const modalCloseButton = document.querySelector('.modal-close_button');
    const modalCardDetail = document.querySelector('.film-detail-modal');

    filmItem.addEventListener('click', onCardClick)
    function onCardClick(e) {
        e.preventDefault();
        modalCardDetail.classList.remove('is-hidden');
        onFilmDetails();
    }

    modalCloseButton.addEventListener('click', onCloseButtonClick)
    function onCloseButtonClick(e) {
        modalCardDetail.classList.add('is-hidden');
    }
}


// movie_id="${data.id}"