import { refs } from "./getRefs";
import { renderFilmGallery } from "./renderFilmGallery";

function getSavedFilms(localStorrageKey) {
          const dataJSON = localStorage.getItem(localStorrageKey);
    const data = JSON.parse(dataJSON);

        if (data) {
        renderFilmGallery(data);
    } else {
        refs.filmGallery.innerHTML = `Відсутні збережені фільми в ${localStorrageKey}`;
    }
}

function onQueueBtnClick(){
    //
    console.log('onQueueBtnClick');

    getSavedFilms('queue');
}

function onWatchedBtnClick(){
    //
    console.log('onWatchedBtnClick');

    getSavedFilms('watched');
    // const watchedJSON = localStorage.getItem('watched');
    // const watched = JSON.parse(watchedJSON);

    // if (watched) {
    //     renderFilmGallery(watched);
    // } else {
    //     refs.filmGallery.innerHTML = "Відсутні збережені фільми";
    // }
    
}

export { onQueueBtnClick, onWatchedBtnClick };