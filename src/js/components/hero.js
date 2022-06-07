//Пишіть свій код всередині функції

import getRefs from "../functions/getRefs";

export { renderHomeHero, renderLibraryHero};


  const refs = getRefs();
  
  
  function renderHomeHero() {
    clearHero();
    const heroHomeMarcup = `<div class="hero-home-container">
        <form class="search-form" id="search-form">
          <div class="input-wrap">
            <input
              class="input"
              type="text"
              name="searchQuery"
              autocomplete="off"
              placeholder="Search films..."
            />
            <button class="button" type="submit">
              <svg class="search" width="15" height="15">
                <use href="./images/symbol-defs.svg#icon-search"></use>
              </svg>
            </button>
          </div>
        </form>
      </div>`;
    refs.hero.insertAdjacentHTML('beforeend', heroHomeMarcup);
  }

  // function renderHomePage() {
  //   clearHero();
  //   refs.hero.insertAdjacentHTML('beforeend', heroHome);
  // }

  function renderLibraryHero() {
    //   clearHero();
    refs.hero.innerHTML = `<div class="hero-library-container">
        <div class="library-btn-wrap">
          <button class="hero-watched-button hero-library-btn" type="button">WATCHED</button>
          <button class="hero-queue-button hero-library-btn" type="button">QUEUE</button>
        </div>
      </div>`;
  }

  function clearHero() {
    refs.hero.innerHTML = '';
  }

