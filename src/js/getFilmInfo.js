import { filmApiService } from "./ApiService";
import { refs } from "./getRefs";
import { onFetchError } from "./onFetchError";
import { renderFilmCardModal } from "./renderFilmCardModal";

export function getFilmInfo(id) {

    filmApiService.setProps(id);

    filmApiService.fetchCards('filmInfo')
        .then(data => {
            renderFilmCardModal(data);
                  refs.backdrop.classList.toggle('is-hidden');
        refs.modalCloseButton.addEventListener('click', onCloseButtonClick);
        refs.backdrop.addEventListener('click', onEmptySpaceClick);
        addEventListener('keydown', onEscClose);
    })
        .catch(onFetchError)
        .finally(console.log('fetch getFilmInfo done'));
};

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