import  genres  from '../json/genres.json'
import { refs } from './getRefs';
import filmCardTpl from '../templates/film-card.hbs';
import { onFilmCardClick } from './onFilmCardClick';

export function renderFilmGallery(data) {
<<<<<<< Updated upstream
//     //
=======
>>>>>>> Stashed changes
    const dataHits = data.results;
    console.log(dataHits);
    function getGalleryCardsData() {
        const movieGenresIds = genres.map(genre => {
            return genre.id
        })
        const movieGenres = genres.map(genre => {
            return genre.name
        })
        console.log(movieGenresIds);
        console.log(movieGenres);
        const film = dataHits.map(hit => {
            const newDate = new Date(hit.release_date);
            const filmYear = newDate.getFullYear(); 
            hit.release_date = filmYear;
                return hit
        })
        refs.filmGallery.innerHTML = '';
        refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTpl(film));
    }
    getGalleryCardsData(dataHits)
    console.log(data);
    // refs.filmGallery.addEventListener('click', onFilmCardClick);
    const refsfilmGallery = refs.filmGallery.querySelectorAll('li');

    console.log(refsfilmGallery);

    refsfilmGallery.forEach(item => {
        // console.log(item.firstElementChild);
        item.firstElementChild.addEventListener('click', onFilmCardClick)
    })

//     const gal = refs.filmGallery;

//     for (let i = 0; i < gal.children.length; i++) {
//   console.log(gal.children[i].id);
// }

  
//     console.log(refs.filmGallery.children);

}