import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';
import { checkIfFilmIsSaved, modalQueueStorage, modalWatchedStorage } from "./components/LibraryStorage";



export function renderFilmCardModal(data) {
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
    const modalBtnWatched = document.querySelector('.watched-btn');
    const modalBtnQueue = document.querySelector('.queue-btn');
    modalBtnWatched.addEventListener('click', modalWatchedStorage);
    modalBtnQueue.addEventListener('click', modalQueueStorage);

    ///Check чи є фільм в local Watched
    const filmInfo = document.querySelector('.filmCardModal-container');
    const id = filmInfo.querySelector('.movie-id-inModal').textContent;
 
     if (checkIfFilmIsSaved(id, 'watched') && checkIfFilmIsSaved(id, 'queue')) {
         modalBtnWatched.textContent = 'Added to watched';
         modalBtnQueue.textContent = 'Added to queue';
         return;
    }
     if (checkIfFilmIsSaved(id, 'watched')) {
        return modalBtnWatched.textContent = 'Added to watched';
    }
     if (checkIfFilmIsSaved(id, 'queue')) {
        return modalBtnQueue.textContent = 'Added to queue';
    }
}
