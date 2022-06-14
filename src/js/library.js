import { getGalleryCardsData } from "./renderFilmGallery";
import { fetchFilmInfo } from "./ApiService";
import { refs } from "./getRefs";
import filmCardTpl from '../templates/film-card.hbs';

export function getlibraryStorage() {
    const watchedFilmsStorage = localStorage.getItem("watched")
    const watchedFilms = JSON.parse(watchedFilmsStorage);
    const queueFilmsStorage = localStorage.getItem("queue")
    const queueFilms = JSON.parse(queueFilmsStorage);
    const libraryStorage = [...watchedFilms, ...queueFilms];
    let dataLibrary = libraryStorage.reduce((result, item) => {
        return result.includes(item.id) ? result : [...result, item];
    },[])
    console.log(dataLibrary);
    let Array = []
    dataLibrary.map(item => {
        Array.push(item.genres)
    })
    console.log(Array);
    console.log(dataLibrary.genres);
    const film = dataLibrary.map(hit => {
            const newDate = new Date(hit.release_date);
            const filmYear = newDate.getFullYear(); 
            hit.release_date = filmYear;

            // let genresContent = hit.genres.map(genreId => 
            // {return genres.find(genre => genre.id === genreId).name;
            // });
            // if(genresContent.length>2){
            //     genresContent = [genresContent[0], genresContent[1], 'Other'];
            // }
            // hit.genres = genresContent.join(', ');
           
            if (!hit.poster_path) {
                hit.poster_path = posterPlug;
            } else {
                const currentPath = hit.poster_path;
                hit.poster_path = `https://image.tmdb.org/t/p/w500${currentPath}`
            }
                return hit;
        })

        refs.filmGallery.innerHTML = '';
        refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTpl(film));
    
}



