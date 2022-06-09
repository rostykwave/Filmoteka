// import { Pagination } from './pagination-api';

// const allPages = 15;
// const step = 5;
// const homePaginationEl = document.querySelector('.pagination-wrap');

// const homepagePagination = new Pagination('home');

homepagePagination.create({
  prelink: homePaginationEl,
  totalPages: allPages,
  currentEvent: getMovies,
});

function getMovies() {
  console.log(`Здесь могла быть ваша функция, страница ${homepagePagination.page}.`);
}
