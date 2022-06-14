import { refs } from './getRefs';
<<<<<<< Updated upstream
=======
import { hideAnimationStudents } from './components/modal-footer-GoIT-Students';
import { getlibraryStorage } from "./library";

>>>>>>> Stashed changes

// refs.homeButton.addEventListener('click', onHomePage);
// refs.libraryButton.addEventListener('click', onLibraryPage);

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
<<<<<<< Updated upstream
=======

  hideAnimationStudents();
  getlibraryStorage()
>>>>>>> Stashed changes
}

export { onLibraryPage, onHomePage };
