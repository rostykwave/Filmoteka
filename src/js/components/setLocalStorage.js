// import { filmApiService } from '../ApiService';

// const filmAdded = {};
// export const textBtn = {};

// export function modalWatchedStorage(e) {
//   filmApiService.fetchCards('filmInfo').then(data => {
//     filmAdded[data.id] = data;
//     const idFilm = data.id;
//     localStorage.getItem(`${e.target.textContent}`, JSON.stringify(textBtn));
//     const textContent = e.target.textContent;

//     if (e.target.textContent === 'Add to watched') {
//       localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn));
//       e.target.textContent = 'Added';
//       localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn));
//       console.log(textContent);
//       setWWatchedStorage(idFilm);
//     }
//     if (textContent === 'Added') {
//       localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn));
//       e.target.textContent = 'Add to watched';
//       localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn));
//       removeWWatchedStorage(idFilm);
//     }
//   });
// }

// function setWWatchedStorage(id) {
//   localStorage.setItem(`Watched-${id}`, JSON.stringify(filmAdded));
// }
// function removeWWatchedStorage(id) {
//   localStorage.removeItem(`Watched-${id}`, JSON.stringify(filmAdded));
// }

// export function modalQueueStorage(e) {
//   filmApiService.fetchCards('filmInfo').then(data => {
//     filmAdded[data.id] = data;
//     const filmId = data.id;
//     console.log(filmId);
//     const textContent = e.target.textContent;
//     if (textContent === 'Add to queue') {
//       e.target.textContent = 'Queued up';
//       localStorage.setItem(`Queue-${filmId}`, JSON.stringify(filmAdded));
//     }
//     if (textContent === 'Queued up') {
//       e.target.textContent = 'Add to queue';
//       localStorage.removeItem(`Queue-${filmId}`, JSON.stringify(filmAdded));
//     }
//   });
// }
