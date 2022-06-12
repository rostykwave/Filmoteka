import genres from '../../json/genres.json';
import { checkIfFilmIsSaved } from './checkIfFilmIsSaved';

//Функція, яка виклмкається при кліку на кнопку в модалці
export function modalWatchedStorage(e) {
  const id = document.querySelector('.movie-id-inModal').textContent;
   const modalBtnWatched = document.querySelector('.watched-btn');
    
  operateWithLocalStorage('watched', id, modalBtnWatched)
  //   if (checkIfFilmIsSaved(id, 'watched')) {
  //     removeFromLocal('watched', id);
  //     modalBtnWatched.textContent = 'Removed from watched';
      
  //   } else {
  //     addToLocal('watched');
  //   modalBtnWatched.textContent = 'Added to watched';
  // }
  // addToLocal('watched');
    //Зміна тексту кнопки після додавання
    // const modalBtnWatched = document.querySelector('.watched-btn');
    // modalBtnWatched.textContent = 'Added to watched';
};

export function modalQueueStorage(e) {
  addToLocal('queue');
      //Зміна тексту кнопки після додавання
    const modalBtnqueue = document.querySelector('.queue-btn');
    modalBtnqueue.textContent = 'Added to queue';

};

//Функція, яка додає в локал за ключем
function addToLocal(localStorrageKey) {
    //   const id = document.querySelector('.movie-id-inModal').textContent;
    
    // if (checkIfFilmIsSaved(id, localStorrageKey)) {
    //     return;
    // }
          console.log('Adding');
         //Формуєм новий об'єкт з інфо фільму
  const filmObject = getAllInfoFromCard();
  // console.log(filmObject);
  
//зразок записаного в локал файлу(його структура)
  let data = {
    results: [],
  }
  //Дістаєм збережений об'єкт з масивом резудьтатів
  const dataJSONLocal = localStorage.getItem(localStorrageKey);

  //Якщо є - перезаписуєм
  if (dataJSONLocal) {
    console.log('Local storage available');
    data = JSON.parse(dataJSONLocal);
  } 
  
//Записуємо в його масив новий об'єкт з фільмом
  data.results.push(filmObject);

  //Записуєм файл зі всім масивом queue фільмів в Local
  const dataJSON = JSON.stringify(data)
  localStorage.setItem(localStorrageKey, dataJSON);
}

function removeFromLocal(localStorrageKey, id){
  console.log('remove');
  console.log(id);
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
      
    } else {
      addToLocal(localStorrageKey);
    button.textContent = `Added to ${localStorrageKey}`;
  }
}


 



//Повертає об'єкт з данними одного фільму без fetch, на основі видимих і прихованих даних модалки
function getAllInfoFromCard() {
  //Дані фільму беремо з розмітки Модалки без Fetch запросів
  const id = document.querySelector('.movie-id-inModal').textContent;
  const title = document.querySelector('.film-title').textContent;
  const img = document.querySelector('.modal-poster-img').src.replace('https://image.tmdb.org/t/p/w500', '');//підганяємо посилання на зображення до такого яку дає API
  const releaseDate = document.querySelector('.movie-release-date-inModal').textContent;
  const voteAverage = document.querySelector('.values-list__item-vote').textContent;
  const genresName = document.querySelector('#genres').textContent.split(', ');

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
  return filmObject;
}

