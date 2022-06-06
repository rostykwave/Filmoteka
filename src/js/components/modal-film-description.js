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
        onFilmDetails();
        refs.backdrop.classList.toggle('is-hidden');
        refs.modalCloseButton.addEventListener('click', onCloseButtonClick);
        refs.backdrop.addEventListener('click', onEmptySpaceClick);
        addEventListener('keydown', onEscClose);
    }

    function onCloseButtonClick(e) {
        onModalClose();
    }

    function onEmptySpaceClick(e) {
        if (e.target === e.currentTarget) {
                onModalClose();
            }
        }

    function onEscClose(event) {
        if (event.key === "Escape" & !refs.backdrop.classList.contains('is-hidden')) { 
                onModalClose();
            }      
        }
    
    function onModalClose() {
        refs.backdrop.classList.toggle('is-hidden');
        refs.modalCloseButton.removeEventListener('click', onCloseButtonClick);
        refs.backdrop.removeEventListener('click', onEmptySpaceClick);
        removeEventListener('keydown', onEscClose);
    }
} 
// movie_id="${data.id}"