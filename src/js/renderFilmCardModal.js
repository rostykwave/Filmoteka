import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';



export function renderFilmCardModal(data) {
    const genre = data.genres.map((g) => g["name"]).join(", ")
    console.log(data);

    // const dataHits
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
}