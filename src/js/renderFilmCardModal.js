import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';



export function renderFilmCardModal(data) {
    data.genres = data.genres.map((g) => g["name"]).join(", ")
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
}