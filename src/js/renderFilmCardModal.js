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
 
     if (checkIfFilmIsSaved(id, 'watched')) {
        modalBtnWatched.classList.add('btn--active');
        modalBtnWatched.textContent = 'Added to watched/remove';
    }
     if (checkIfFilmIsSaved(id, 'queue')) {
        modalBtnQueue.classList.add('btn--active');
         modalBtnQueue.textContent = 'Added to queue/remove';
    }
}