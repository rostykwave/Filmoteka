import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';
<<<<<<< Updated upstream


=======
import { storageWatched, modalQueueStorage, renderBtnList} from "./localStorage"
>>>>>>> Stashed changes

export function renderFilmCardModal(data) {
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
<<<<<<< Updated upstream
    
=======
    const modalBtnList = document.querySelector(".modal-buttons__list")
    renderBtnList(modalBtnList)
    const modalBtnWatched = document.querySelector('.watched-btn');
    const modalBtnQueue = document.querySelector('.queue-btn');
    modalBtnWatched.addEventListener('click', storageWatched);
    modalBtnQueue.addEventListener('click', modalQueueStorage);

>>>>>>> Stashed changes
}

