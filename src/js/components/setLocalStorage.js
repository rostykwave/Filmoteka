import { filmApiService } from '../ApiService';

const filmAdded = {};
export const textBtn = {};

export function modalWatchedStorage(e) {

  //Дані фільму беремо з розмітки Модалки без Fetch запросів
  const filmInfo = document.querySelector('.filmCardModal-container');
  // console.log(filmInfo);
  const title = filmInfo.querySelector('.film-title').textContent;
  const img = filmInfo.querySelector('.modal-poster-img').src.replace('https://image.tmdb.org/t/p/w500', '');//підганяємо посилання на зображення до такого яку дає API
  const genres = filmInfo.querySelector('#genres').textContent;
  console.log(genres);

//зразок записаного в локал файлу(його структура)
  // const watched = {
  //   results: [],
  // }

//Записуємо всі дані фільму в один об'єкт
  const filmObject = {
    title: title,
    genres: genres,
    poster_path: img,
    release_date:2020,
  }

  //Дістаєм збережений об'єкт з масивом резудьтатів
   const watchedJSONLocal = localStorage.getItem('watched');
  const watched = JSON.parse(watchedJSONLocal);

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

  //   if (e.target.textContent === 'Add to watched') {
  //     localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn));
  //     e.target.textContent = 'Added';
  //     localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn));
  //     console.log(textContent);
  //     setWWatchedStorage(idFilm);
  //   }
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
