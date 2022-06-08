import { refs } from "./getRefs";

function homeHeroVisible(){
    console.log('heroVisibleToggle');
      refs.searchInput.classList.remove('is-hidden');
  //   refs.searchForm.classList.add('search-form');
  refs.heroLibraryContainer.classList.add('is-hidden');
  refs.header.classList.remove('library');
  refs.header.classList.add('home');
  refs.homeCurrentPage.classList.add('current-page');
  refs.libraryCurrentPage.classList.remove('current-page');
}

function myLibraryHeroVisible() {
    refs.header.classList.remove('home');
  refs.header.classList.add('library');
  refs.heroLibraryContainer.classList.remove('is-hidden');
  refs.searchInput.classList.add('is-hidden');
  refs.heroLibraryContainer.classList.add('hero-library-container');
  refs.homeCurrentPage.classList.remove('current-page');
  refs.libraryCurrentPage.classList.add('current-page');
}

export { homeHeroVisible, myLibraryHeroVisible };