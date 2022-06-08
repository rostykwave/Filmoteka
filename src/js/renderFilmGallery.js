import { refs } from './getRefs';
import filmCardTpl from '../templates/film-card.hbs';
import { onFilmCardClick } from './onFilmCardClick';

export function renderFilmGallery(data) {
//     //
    console.log(data.results);
    const dataHits = data.results;

    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTpl(dataHits));

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