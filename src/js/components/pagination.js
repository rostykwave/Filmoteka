import {Pagination} from '../functions/pagination-api'

const allPages = 15;
const step = 5;
const galleryEl = document.querySelector('.pagination-wrap');

const homePagePagination = new Pagination('home');

homePagePagination.create({
  prelink: galleryEl,
  totalPages: allPages,
  step: step,
  arrows: true,
  dots: true,
});

homePagePagination.addPaginationEvent(getMovies);

function getMovies() {
  console.log(`Здесь могла быть ваша функция, страница ${homePagePagination.page}.`);
}