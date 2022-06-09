import { refs } from './js/getRefs';
///BackEnd API///
import { fetchPopularFilms, filmApiService } from './js/ApiService';

import { getPopularFilms } from './js/getPopularFilms';
import { onSearch } from './js/onSearch';
import { onLibraryPage, onHomePage } from './js/header';
import { checkDarkMode } from './js/checkDarkMode';
import { loaderSpinner, startLoader, stopLoader } from './js/loaderSpinner';
import { modalFooterGoITStudents } from './js/components/modal-footer-GoIT-Students';
import { getWatchedFilms } from './js/getWatchedFilms';
import pagination from './js/components/pagination';
import { Pagination } from './js/components/pagination-api';
import { renderFilmGallery } from './js/renderFilmGallery';



checkDarkMode(); //якщо є об'єкт в local storeage то застосовує клас темної теми


// filmApiService.resetPage();
getPopularFilms();


refs.homeButton.addEventListener('click', homePageLoader);
refs.logo.addEventListener('click', homePageLoader);
refs.libraryButton.addEventListener('click', myLibraryPageLoader);

///Main functions///Do not touch//
function homePageLoader() {
  console.log('homePageLoader');
  
  onHomePage();


  // filmApiService.resetPage();
  getPopularFilms();
 
}

function myLibraryPageLoader() {
  console.log('myLibrary');
 
  onLibraryPage();
 
  getWatchedFilms(); //from local storage
}

///


// import getRefs from './js/js/functions/getRefs';
// import currentPage from './js/js/functions/currentPage';
// import { renderHomeHero, renderLibraryHero } from './js/js/components/hero';

// const refs = getRefs();
// const newCurrentPage = new currentPage();

// ///______ Первая загрузка страницы ______///

// indexPageLoading();

// ///________ Слушатели событий ________///

// refs.btnHome.addEventListener('click', indexPageLoading);
// refs.btnLibrary.addEventListener('click', LibraryPageLoading);

// ///________ Загрузка index.html по нажатию на Home ______///

// function indexPageLoading() {
//     newCurrentPage.currentHome();
//     renderHomeHero()
//     //// функция которая рендерит main секцию для основной страницы//////
//     //// функция которая открывает модалку по нажатию на карточку в Home ////
// }

// ///________ Загрузка страницы по нажатию на Library ______///

// function LibraryPageLoading() {
//     newCurrentPage.currentLibrary();
//     renderLibraryHero()
//     //// функция которая рендерит main секцию  для Library по нажатию на кнопки Watched и queue//////
//     //// функция которая открывает модалку по нажатию на карточку в Library ////
// }

// ////______ Открытие модалки в Footer ______////

// function modalFooter() {
//     //// функции для открытия модалки Footer /////
// }
