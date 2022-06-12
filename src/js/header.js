import { refs } from './getRefs';
import { onQueueBtnClick, onWatchedBtnClick } from './getSavedFilms';


function onHomePage() {
  console.log('клик по кнопке HOME');
  refs.searchForm.classList.remove('is-hidden');
  refs.hederLibraryPage.classList.add('is-hidden');
  refs.header.classList.remove('library');
  refs.header.classList.add('home');
  refs.homeCurrentPage.classList.add('current-page');
  refs.libraryCurrentPage.classList.remove('current-page');

}

function onLibraryPage() {
  console.log('клик по кнопке Library');
  refs.header.classList.remove('home');
  refs.header.classList.add('library');
  refs.hederLibraryPage.classList.remove('is-hidden');
  refs.searchForm.classList.add('is-hidden');
  refs.hederLibraryPage.classList.add('hero-library-container');
  refs.homeCurrentPage.classList.remove('current-page');
  refs.libraryCurrentPage.classList.add('current-page');
  refs.libraryWatchedButton.addEventListener('click', onWatchedBtnClick);
  refs.libraryQueueButton.addEventListener('click', onQueueBtnClick);
}



export { onLibraryPage, onHomePage };
