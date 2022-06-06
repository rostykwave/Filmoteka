import getRefs from './js/functions/getRefs';
import currentPage from './js/functions/currentPage';
import { renderHomeHero, renderLibraryHero } from './js/components/hero';


const refs = getRefs();
const newCurrentPage = new currentPage();

///______ Первая загрузка страницы ______///

indexPageLoading();

///________ Слушатели событий ________///

refs.btnHome.addEventListener('click', indexPageLoading);
refs.btnLibrary.addEventListener('click', LibraryPageLoading);

///________ Загрузка index.html по нажатию на Home ______///

function indexPageLoading() {
    newCurrentPage.currentHome();
    renderHomeHero()
    //// функция которая рендерит main секцию для основной страницы//////
    //// функция которая открывает модалку по нажатию на карточку в Home ////
}

///________ Загрузка страницы по нажатию на Library ______///

function LibraryPageLoading() {
    newCurrentPage.currentLibrary();
    renderLibraryHero()
    //// функция которая рендерит main секцию  для Library по нажатию на кнопки Watched и queue//////
    //// функция которая открывает модалку по нажатию на карточку в Library ////
}

////______ Открытие модалки в Footer ______////

function modalFooter() {
    //// функции для открытия модалки Footer /////
}