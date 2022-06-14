import { getFilmInfo } from "./getFilmInfo";
import { cardLocalStorage } from "./localStorage";


export function onFilmCardClick(e) {
    e.preventDefault();

    if (e.currentTarget.id) {
        const filmId = e.currentTarget.id;
        getFilmInfo(filmId);
        cardLocalStorage(filmId)
    }
}