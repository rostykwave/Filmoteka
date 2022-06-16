import genres from '../../json/genres.json';
import { renderFilmGallery } from '../renderFilmGallery';
import { checkIfFilmIsSaved } from './checkIfFilmIsSaved';
import { getConfigState, getNameOfCurrentPageFunction } from './savedPageConfig';

//Функція, яка виклмкається при кліку на кнопку в модалці
export function modalWatchedStorage(e) {
  const id = document.querySelector('.movie-id-inModal').textContent;
   const modalBtnWatched = document.querySelector('.watched-btn');
    
  operateWithLocalStorage('watched', id, modalBtnWatched);
};

export function modalQueueStorage(e) {
   const id = document.querySelector('.movie-id-inModal').textContent;
  const modalBtnQueue = document.querySelector('.queue-btn');
  
  operateWithLocalStorage('queue', id, modalBtnQueue);

};




//Функції, які працюють з локал за ключем
function addToLocal(localStorrageKey) {
   //об'єкт з інфо фільму
  const filmObject = getAllInfoFromCard();

//зразок записаного в локал файлу(його структура)
  let data = {
    results: [],
  }
  //Дістаєм збережений об'єкт з масивом резудьтатів
  const dataJSONLocal = localStorage.getItem(localStorrageKey);

  //Якщо є - перезаписуєм
  if (dataJSONLocal) {
    // console.log('Local storage available');
    data = JSON.parse(dataJSONLocal);
  } 
  
//Записуємо в його масив новий об'єкт з фільмом
  data.results.push(filmObject);

  //Записуєм файл зі всім масивом queue фільмів в Local
  const dataJSON = JSON.stringify(data)
  localStorage.setItem(localStorrageKey, dataJSON);
}

function removeFromLocal(localStorrageKey, id){
  const dataJSONLocal = localStorage.getItem(localStorrageKey);
  const data = JSON.parse(dataJSONLocal);
  
  data.results = data.results.filter(film => film.id !== id);

  const dataJSON = JSON.stringify(data);
  localStorage.setItem(localStorrageKey, dataJSON);
}

function operateWithLocalStorage(localStorrageKey, id, button) {
      if (checkIfFilmIsSaved(id, localStorrageKey)) {
      removeFromLocal(localStorrageKey, id);
      button.textContent = `Removed from ${localStorrageKey}`;
      button.classList.remove('btn--active');


      
    } else {
      addToLocal(localStorrageKey);
    button.textContent = `Added to ${localStorrageKey}/remove`;
    button.classList.add('btn--active');
  }

  reRenderGalleryInLibrary(localStorrageKey);
 
}

//Відбувається рендер галереї якщо фільм зберігається або видаляється з watched/queue, але тільки тоді, коли знаходитмось в Library
function reRenderGalleryInLibrary(clickedOnWatchedOrQueue) {
 
  const currentPageFunction = getNameOfCurrentPageFunction();

  if (currentPageFunction === 'onWatchedBtnClick' || currentPageFunction === 'onQueueBtnClick') {

    let localStorrageKey = 'watched';
    if (currentPageFunction === 'onQueueBtnClick') {
      localStorrageKey = 'queue';
    }

    if (clickedOnWatchedOrQueue === localStorrageKey) { 
      const dataJSONLocal = localStorage.getItem(localStorrageKey);
      const data = JSON.parse(dataJSONLocal);
      renderFilmGallery(data);
    }
  }
}



//Повертає об'єкт з данними одного фільму без fetch, на основі видимих і прихованих даних модалки
function getAllInfoFromCard() {
  //Дані фільму беремо з розмітки Модалки без Fetch запросів
  const id = document.querySelector('.movie-id-inModal').textContent;
  const title = document.querySelector('.film-title').textContent;
  //підганяємо посилання на зображення до такого яку дає API
  let img = document.querySelector('.modal-poster-img').src;
  // if (img.includes('/poster-plug')) {
  //   img = null; 
  // } else {
  //   img = img.replace('https://image.tmdb.org/t/p/w500', '');
  // }
  img = img.includes('/poster-plug') ? null : img.replace('https://image.tmdb.org/t/p/w500', '');
  
  const releaseDate = document.querySelector('.movie-release-date-inModal').textContent;
  const voteAverage = document.querySelector('.values-list__item-vote').textContent;
  const genresName = document.querySelector('#genres').textContent;

  //Перетворення назв жанрів в їх ID
  let genresIDS = [];

   if (genresName) {
     const genresNameArray = genresName.split(', ');

  genresNameArray.map(genreName => {
     const genreID = genres.find(option => option.name === genreName).id;
    genresIDS.push(genreID);
  })
  }
  //Записуємо всі дані фільму в один об'єкт
  const filmObject = {
    id:id,
    title: title,
    genre_ids: genresIDS,
    poster_path: img,
    release_date: releaseDate,
    vote_average:voteAverage,
  }
  // console.log(filmObject);
  return filmObject;
}

