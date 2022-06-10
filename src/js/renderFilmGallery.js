import  genres  from '../json/genres.json'
import { refs } from './getRefs';
import filmCardTpl from '../templates/film-card.hbs';
import { onFilmCardClick } from './onFilmCardClick';

export function renderFilmGallery(data) {

    const dataHits = data.results;
    function getGalleryCardsData() {

        const film = dataHits.map(hit => {
            const newDate = new Date(hit.release_date);
            const filmYear = newDate.getFullYear(); 
            hit.release_date = filmYear;

            let genresContent = hit.genre_ids.map(genreId => 
            {let genreToFind = genreId; 
                return genres.find(genre => genre.id === genreToFind).name;
            });
            if(genresContent.length>2){
                genresContent = [genresContent[0], genresContent[1], 'Other'];
            }
            hit.genres = genresContent.join(', ');
            
                return hit;
        })
        refs.filmGallery.innerHTML = '';
        refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTpl(film));
    }
    getGalleryCardsData(dataHits)

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