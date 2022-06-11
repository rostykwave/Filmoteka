import { filmApiService } from '../ApiService';
import genres from '../../json/genres.json';

// const filmAdded = {};
// export const textBtn = {};

export function modalWatchedStorage(e) {

  //Формуєм новий об'єкт з інфо фільму
  const filmObject = getAllInfoFromCard();
  
//зразок записаного в локал файлу(його структура)
  let watched = {
    results: [],
  }
  //Дістаєм збережений об'єкт з масивом резудьтатів
  const watchedJSONLocal = localStorage.getItem('watched');

  //Якщо є - перезаписуєм
  if (watchedJSONLocal) {
    console.log('Local storage available');
    watched = JSON.parse(watchedJSONLocal);
  } 
  
//Записуємо в його масив новий об'єкт з фільмом
  watched.results.push(filmObject);

  //Записуєм файл зі всім масивом watched фільмів в Local
  const watchedJSON = JSON.stringify(watched)
  localStorage.setItem('watched', watchedJSON);
  



  // filmApiService.fetchCards('filmInfo').then(data => {
  //   filmAdded[data.id] = data;
  //   const idFilm = data.id;
  //   localStorage.getItem(`${e.target.textContent}`, JSON.stringify(textBtn));
  //   const textContent = e.target.textContent;

    // if (e.target.textContent === 'Add to watched') {
    //   localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn));
    //   e.target.textContent = 'Added';
    //   localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn));
    //   console.log(textContent);
    //   setWWatchedStorage(idFilm);
    // }
  //   if (textContent === 'Added') {
  //     localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn));
  //     e.target.textContent = 'Add to watched';
  //     localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn));
  //     removeWWatchedStorage(idFilm);
  //   }
  // });
}

function setWWatchedStorage(id) {
  localStorage.setItem(`Watched-${id}`, JSON.stringify(filmAdded));
}
function removeWWatchedStorage(id) {
  localStorage.removeItem(`Watched-${id}`, JSON.stringify(filmAdded));
}

export function modalQueueStorage(e) {
  filmApiService.fetchCards('filmInfo').then(data => {
    filmAdded[data.id] = data;
    const filmId = data.id;
    console.log(filmId);
    const textContent = e.target.textContent;
    if (textContent === 'Add to queue') {
      e.target.textContent = 'Queued up';
      localStorage.setItem(`Queue-${filmId}`, JSON.stringify(filmAdded));
    }
    if (textContent === 'Queued up') {
      e.target.textContent = 'Add to queue';
      localStorage.removeItem(`Queue-${filmId}`, JSON.stringify(filmAdded));
    }
  });
}


//Повертає об'єкт з данними одного фільму без fetch, на основі видимих і прихованих даних модалки
function getAllInfoFromCard() {
  //Дані фільму беремо з розмітки Модалки без Fetch запросів
  const filmInfo = document.querySelector('.filmCardModal-container');
  // console.log(filmInfo);
  const id = filmInfo.querySelector('.movie-id-inModal').textContent;
  const title = filmInfo.querySelector('.film-title').textContent;
  const img = filmInfo.querySelector('.modal-poster-img').src.replace('https://image.tmdb.org/t/p/w500', '');//підганяємо посилання на зображення до такого яку дає API
  const releaseDate = filmInfo.querySelector('.movie-release-date-inModal').textContent;
  const voteAverage = filmInfo.querySelector('.values-list__item-vote').textContent;
  const genresName = filmInfo.querySelector('#genres').textContent.split(', ');

  //Перетворення назв жанрів в їх ID
  let genresIDS = [];
  genresName.map(genreName => {
     const genreID = genres.find(option => option.name === genreName).id;
    genresIDS.push(genreID);
  })

  //Записуємо всі дані фільму в один об'єкт
  const filmObject = {
    id:id,
    title: title,
    genre_ids: genresIDS,
    poster_path: img,
    release_date: releaseDate,
    vote_average:voteAverage,
  }

  console.log('filmObject', filmObject);

  return filmObject;
}

//Перевірка чи фільм є в LocalStorrage
//filmID - це string
function checkIfFilmIsSaved(filmID, localStorrageKey) {
  const savedData = JSON.parse(localStorage.getItem(localStorrageKey)).results;
const isFilmInLocal = savedData.find(option=>option.id === filmID)
    ;
  if (isFilmInLocal) {
    console.log('Film is here');
  } else {
    console.log('There is no film here');
  }
}

checkIfFilmIsSaved('705861', 'watched');

// різний атрибут для кнопки в стані add to watched і watched

//  add to watched - 

// -витягує ID, який прихований в самій модалці

// -викликає функцію яка перевіряє чи є даний фільм в Локалі checkIfFilmIsSaved(*filmID*, *localStorrageKey*)

// -збирає всю інфу по фільму з модалки getAllInfoFromCard()

// -const filmObject = getAllInfoFromCard();

// -завантажує дані  з локалу

// -пушить нові дані

// -віддає дані назад в локал

// Кнопка в стані watched:

// -підгружається тоді коли даний фільм є в Локалі checkIfFilmIsSaved(*filmID*, *localStorrageKey*)

// -при натисканні на неї завантажується дані з локалу і фільм видаляється з масиву, дані відправляються в локал

// -стан кнопки змінюється