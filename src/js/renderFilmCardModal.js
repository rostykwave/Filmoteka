import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';



export function renderFilmCardModal(data) {
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
    
}
