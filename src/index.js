import { refs } from './js/getRefs';//

import { getPopularFilms, popularFilmPagination } from './js/getPopularFilms';
import { onSearch } from './js/onSearch';
import { onLibraryPage, onHomePage } from './js/header';
import { checkDarkMode } from './js/checkDarkMode';

import { modalFooterGoITStudents } from './js/components/modal-footer-GoIT-Students';
import { Pagination } from './js/components/pagination-api';
import { onWatchedBtnClick } from './js/getSavedFilms';


checkDarkMode(); //якщо є об'єкт в local storeage то застосовує клас темної теми
getPopularFilms();

refs.homeButton.addEventListener('click', homePageLoader);
refs.logo.addEventListener('click', onLogoResetPageNumber);
refs.libraryButton.addEventListener('click', myLibraryPageLoader);


///Main functions//
function homePageLoader() {
  console.log('homePageLoader');
  onHomePage();
  getPopularFilms();
}

function myLibraryPageLoader() {
  console.log('myLibrary');
  onLibraryPage();
  onWatchedBtnClick();
}

function onLogoResetPageNumber() {
  popularFilmPagination.resetPage();
  homePageLoader();
}
