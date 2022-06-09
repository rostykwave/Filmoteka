import { getFilmInfo } from "./getFilmInfo";


export function onFilmCardClick(e) {
    e.preventDefault();

    if (e.currentTarget.id) {
        const filmId = e.currentTarget.id;
        getFilmInfo(filmId);
    }
}