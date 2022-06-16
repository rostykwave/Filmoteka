import { fetchPopularFilms } from './ApiService';
import { Pagination } from './components/pagination-api';
import { startLoader, stopLoader } from './loaderSpinner';
import { renderFilmGallery } from './renderFilmGallery';

const homePaginationEl = document.querySelector('.pagination-wrap');

export const popularFilmPagination = new Pagination('popular');

export function getPopularFilms() {
  startLoader();

  fetchPopularFilms({ page: popularFilmPagination.page }).then(data => {
    // console.log(data);
    stopLoader();

    // console.log('fetchPopularFilms');
    // console.log(data.total_pages);
    renderFilmGallery(data);
    popularFilmPagination.create({
      prelink: homePaginationEl,
      totalPages: data.total_pages,
      currentEvent: getPopularMovie,
    });
  });
}

function getPopularMovie() {
  startLoader();
  fetchPopularFilms({ page: popularFilmPagination.page }).then(data => {
    // console.log(data);
    stopLoader();
    // console.log('getPopularMovie');
    renderFilmGallery(data);
  });
}
// import { filmApiService } from './ApiService';
// import { onFetchError } from './onFetchError';
// import { renderFilmGallery } from './renderFilmGallery';
// import {startLoader, stopLoader} from './loaderSpinner'
// // import { renderFilmGallery } from './renderFilmGallery';

// // console.log('startLoader :>> ', startLoader);

// export function getPopularFilms() {

//     console.log('getPopularFilms');

//     filmApiService.setProps('day');
//     //Loader start
//     startLoader();

//     filmApiService.fetchCards('popularFilm')
//         .then(data => {
//             console.log(data);

//             //Loader stop
//             stopLoader();

//             renderFilmGallery(data);

//     })
//         .catch(onFetchError)
//         .finally(console.log('fetch popularFilm done'));
// };
