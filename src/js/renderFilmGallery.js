import  genres  from '../json/genres.json'
import { refs } from './getRefs';
import filmCardTpl from '../templates/film-card.hbs';
import { onFilmCardClick } from './onFilmCardClick';
import posterPlug from '../images/poster-plug.jpg';

export function renderFilmGallery(data) {
// console.log(data);
    const dataHits = data.results;
    function getGalleryCardsData() {

        const film = dataHits.map(hit => {
            const newDate = new Date(hit.release_date);
            const filmYear = newDate.getFullYear(); 
            hit.release_date = filmYear;
            
            // console.log(Number.isNaN(filmYear));
            // console.log(hit);

            if (Number.isNaN(filmYear)){
                hit.release_date='';
            }

            let genresContent = hit.genre_ids.map(genreId => 
            {return genres.find(genre => genre.id === genreId).name;
            });
            if(genresContent.length>2){
                genresContent = [genresContent[0], genresContent[1], 'Other'];
            }
            hit.genres = genresContent.join(', ');
           
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
    getGalleryCardsData(dataHits)

    const refsfilmGallery = refs.filmGallery.querySelectorAll('li');


    refsfilmGallery.forEach(item => {
        item.firstElementChild.addEventListener('click', onFilmCardClick)
    })

}