import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';
import {modalQueueStorage, modalWatchedStorage } from "./components/LibraryStorage";
import { checkIfFilmIsSaved } from "./components/checkIfFilmIsSaved";



export function renderFilmCardModal(data) {
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
    const modalBtnWatched = document.querySelector('.watched-btn');
    const modalBtnQueue = document.querySelector('.queue-btn');
    modalBtnWatched.addEventListener('click', modalWatchedStorage);
    modalBtnQueue.addEventListener('click', modalQueueStorage);

    modalButtonsTextRender(modalBtnWatched,modalBtnQueue);
}




function modalButtonsTextRender(modalBtnWatched,modalBtnQueue) {
    const id = document.querySelector('.movie-id-inModal').textContent;
 
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