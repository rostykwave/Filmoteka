import genres from '../../json/genres.json';


export function modalWatchedStorage(e) {
    const filmInfo = document.querySelector('.filmCardModal-container');
    const id = filmInfo.querySelector('.movie-id-inModal').textContent;
    
    if (checkIfFilmIsSaved(id, 'watched')) {
        return;
    }

        console.log('Adding');
         //Формуєм новий об'єкт з інфо фільму
  const filmObject = getAllInfoFromCard();
  console.log(filmObject);
  
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

    //Зміна тексту кнопки після додавання
    const modalBtnWatched = document.querySelector('.watched-btn');
    modalBtnWatched.textContent = 'Added to watched';
};


 

// function setWWatchedStorage(id) {
//   localStorage.setItem(`Watched-${id}`, JSON.stringify(filmAdded));
// }
// function removeWWatchedStorage(id) {
//   localStorage.removeItem(`Watched-${id}`, JSON.stringify(filmAdded));
// }

// export function modalQueueStorage(e) {
 
// }


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
export function checkIfFilmIsSaved(filmID, localStorrageKey) {

    const rawsavedData = localStorage.getItem(localStorrageKey);
    if (!rawsavedData) {
        return false;
    }
  const savedData = JSON.parse(rawsavedData).results;
  
const isFilmInLocal = savedData.find(option=>option.id === filmID);
  if (isFilmInLocal) {
      console.log('Film is here');
      return true;
  } else {
      console.log('There is no film here');
      return false;
  }
}

// checkIfFilmIsSaved('705861', 'watched');

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