import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';
import { modalQueueStorage, modalWatchedStorage } from "./components/LibraryStorage";



export function renderFilmCardModal(data) {
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
    const modalBtnWatched = document.querySelector('.watched-btn');
    const modalBtnQueue = document.querySelector('.queue-btn');
    modalBtnWatched.addEventListener('click', modalWatchedStorage);
    modalBtnQueue.addEventListener('click', modalQueueStorage);
}
