import onFilmDetails from "../functions/onFilmDetails";
import renderFilmDetails from '../functions/renderFilmDetails';

export default function modalFilmDescription() {
    const refs = {
        filmTesList: document.querySelector('.film-test-list'),
        modalCloseButton: document.querySelector('.modal-close_button'),
        modalCardDetail: document.querySelector('.film-detail-modal'),
        backdrop: document.querySelector('.backdrop')
    };

    refs.filmTesList.addEventListener('click', onCardClick)
    function onCardClick(e) {
        e.preventDefault();
        refs.backdrop.classList.toggle('is-hidden');
        onFilmDetails();
    }

    refs.modalCloseButton.addEventListener('click', onCloseButtonClick)
    function onCloseButtonClick(e) {
        e.preventDefault();
        refs.backdrop.classList.toggle('is-hidden');
    }
}


// movie_id="${data.id}"