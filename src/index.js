import { refs } from './js/getRefs';
///BackEnd API///
import { filmApiService } from './js/ApiService';

import { getPopularFilms } from './js/getPopularFilms';
import { getFilmsOnSearchQuery } from './js/getFilmsOnSearchQuery';

import { homeHeroVisible, myLibraryHeroVisible } from './js/header-hero-visibility';
import { checkDarkMode } from './js/checkDarkMode';
import { loaderSpinner } from './js/loaderSpinner';
import { modalFooterGoITStudents } from './js/components/modal-footer-GoIT-Students';
import { getWatchedFilms } from './js/getWatchedFilms';


checkDarkMode()//якщо є об'єкт в local storeage то застосовує клас темної теми

filmApiService.resetPage();
getPopularFilms();

let paginationGetFunction = getPopularFilms;//для pagination посилання на функцію, котра бере запит в конкретний час

refs.homeButton.addEventListener('click', homePageLoader);
refs.logo.addEventListener('click', homePageLoader);
refs.myLibraryButton.addEventListener('click', myLibraryPageLoader);
refs.searchInput.addEventListener('submit', onSearch);
// refs.themeToggle.addEventListener('click', onThemeModeToggle);
refs.pagination.addEventListener('click', onPaginationClick);


///Main functions///Do not touch//
function homePageLoader(){

console.log('homePageLoader');
    homeHeroVisible();
    loaderSpinner();
    paginationGetFunction = getPopularFilms;//для pagination посилання на функцію, котра бере запит в конкретний час
    filmApiService.resetPage();
    getPopularFilms();
    // console.log(paginationGetFunction );
}


function myLibraryPageLoader(){
    console.log('myLibrary');
    myLibraryHeroVisible();
    loaderSpinner()
//     paginationGetFunction = getWatchedFilms();//для pagination посилання на функцію, котра бере запит в конкретний час
   getWatchedFilms()//from local storage

}



export function onSearch(e) {
    e.preventDefault();

    const query = e.currentTarget.elements.searchQuery.value;
    paginationGetFunction = getFilmsOnSearchQuery;//для pagination посилання на функцію, котра бере запит в конкретний час

    filmApiService.resetPage();
    getFilmsOnSearchQuery(query);
}


function onPaginationClick(e) {

    let queryPageNumber = null;

    if (e.target.id) {
        queryPageNumber = Number(e.target.id);
        console.log(queryPageNumber);
        filmApiService.setPage(queryPageNumber);   
        paginationGetFunction();
    } 
}
























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