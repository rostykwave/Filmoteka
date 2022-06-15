import { refs } from './js/getRefs';//

import { getPopularFilms, popularFilmPagination } from './js/getPopularFilms';
import { onSearch } from './js/onSearch';
import { onLibraryPage, onHomePage } from './js/header';
import { checkDarkMode } from './js/checkDarkMode';

import { modalFooterGoITStudents } from './js/components/modal-footer-GoIT-Students';
import { Pagination } from './js/components/pagination-api';
import { onWatchedBtnClick } from './js/getSavedFilms';
import { getConfigState, setConfigState } from './js/components/savedPageConfig';
import { hidelbrBtn, onClearLbr } from './js/clear-library';


checkDarkMode(); //якщо є об'єкт в local storeage то застосовує клас темної теми
// перевіряє поточну сторінку, яку зберегли в local
getConfigState();

refs.homeButton.addEventListener('click', homePageLoader);
refs.logo.addEventListener('click', onLogoResetPageNumber);
refs.libraryButton.addEventListener('click', myLibraryPageLoader);
// ===
refs.clearLibraryBtn.addEventListener('click', onClearLbr);
// ===

///Main functions//
export function homePageLoader() {
  // console.log('homePageLoader');
   setConfigState({funcName:'homePageLoader'});
  onHomePage();
  getPopularFilms();
}

export function myLibraryPageLoader() {
  // console.log('myLibrary');
  setConfigState({funcName:'myLibraryPageLoader'});
  onLibraryPage();
  onWatchedBtnClick();
}

function onLogoResetPageNumber() {
  popularFilmPagination.resetPage();
  homePageLoader();
  const searchInput = document.querySelector('.header-input');
   searchInput.value = '';
}
