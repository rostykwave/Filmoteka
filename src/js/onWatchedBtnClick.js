import { renderFilmGallery } from "./renderFilmGallery";

export function onWatchedBtnClick(){
    //
    console.log('onWatchedBtnClick');
    const watchedJSON = localStorage.getItem('watched');
    const watched = JSON.parse(watchedJSON);

    console.log(watched);
    renderFilmGallery(watched);
}