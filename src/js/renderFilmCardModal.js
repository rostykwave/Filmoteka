import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';

export function renderFilmCardModal(data) {
    console.log(renderFilmCardModal);
    console.log(data);
    // const dataHits
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
}