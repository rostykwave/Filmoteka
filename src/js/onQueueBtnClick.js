import { refs } from "./getRefs";
import { renderFilmGallery } from "./renderFilmGallery";

export function onQueueBtnClick(){
    //
    console.log('onQueueBtnClick');

      const queueJSON = localStorage.getItem('queue');
    const queue = JSON.parse(queueJSON);

        if (queue) {
        renderFilmGallery(queue);
    } else {
        refs.filmGallery.innerHTML = "Відсутні збережені фільми";
    }
}