import { refs } from "./getRefs";
import modalFilmTpl from '../templates/modal-film-description.hbs';
// import { modalWatchedStorage, modalQueueStorage } from "./components/setLocalStorage";


export function renderFilmCardModal(data) {
    refs.filmCardModalWrap.innerHTML = "";
    refs.filmCardModalWrap.insertAdjacentHTML('beforeend', modalFilmTpl(data));
    const modalBtnWatched = document.querySelector('.watched-btn');
    const modalBtnQueue = document.querySelector('.queue-btn');
    modalBtnWatched.addEventListener('click', modalWatchedStorage);
    modalBtnQueue.addEventListener('click', modalQueueStorage);
}






import { filmApiService } from "./ApiService";

const filmAdded = [];
export const textBtn = {};


// https://api.themoviedb.org/3/movie/?api_key=8f517ea939a3e5bbc59bc55f9e33cbf1&language=en-US  <-- Твой запрос приходит без movie_id.

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US <-- Такой должен быть запрос.



export function modalWatchedStorage(e) {
    // filmApiService.fetchCards('filmInfo')
    console.log("fetch!!!");
    fetch('https://api.themoviedb.org/3/movie/92782?api_key=8f517ea939a3e5bbc59bc55f9e33cbf1&language=en-US').then((response) => {
        return response.json();
      }).then(data => {
        filmAdded.push(data);
        console.log('data :>> ', data);
        console.log('filmAdded :>> ', filmAdded);
        const idFilm = data.id
        localStorage.getItem(`${e.target.textContent}`, JSON.stringify(textBtn))
        const textContent = e.target.textContent;
        
        if (e.target.textContent === "Add to watched") {


            
            // localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn))
            
            console.log("added!!!!");
            console.log('filmAdded :>> ', filmAdded);
            console.log('JSON.stringify(filmAdded) :>> ', JSON.stringify(filmAdded));
            e.target.textContent = "Added"

            const parseStorajeWatched = JSON.parse(localStorage.getItem(`Watched`))
            localStorage.setItem(`Watched`, JSON.stringify(filmAdded));
            console.log('parseStorajeWatched :>> ', parseStorajeWatched);
            if (localStorage.getItem(`Watched`)) {
                
            }
            
            
            setWWatchedStorage(idFilm)





            // localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn))
            // e.target.textContent = "Added"
            // localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn))
            // console.log(textContent);
            // setWWatchedStorage(idFilm)
        } if (textContent === "Added") {
            localStorage.removeItem(`${e.target.textContent}`, JSON.stringify(textBtn))
            e.target.textContent = "Add to watched";
            localStorage.setItem(`${e.target.textContent}`, JSON.stringify(textBtn))
            removeWWatchedStorage(idFilm)
        }
        })
}


function setWWatchedStorage(id) {
    localStorage.setItem(`Watched-${id}`, JSON.stringify(filmAdded))
}
function removeWWatchedStorage(id) {
    localStorage.removeItem(`Watched-${id}`, JSON.stringify(filmAdded))
}


export function modalQueueStorage(e) {
    filmApiService.fetchCards('filmInfo').then(data => {
        filmAdded[data.id] = data;
        const filmId =  data.id
        console.log(filmId);
        const textContent = e.target.textContent
        if (textContent === "Add to queue") {
            e.target.textContent = "Queued up";
            localStorage.setItem(`Queue-${filmId}`, JSON.stringify(filmAdded))
        } if (textContent === "Queued up") {
            e.target.textContent = "Add to queue";
            localStorage.removeItem(`Queue-${filmId}`, JSON.stringify(filmAdded))
        }
        })
}