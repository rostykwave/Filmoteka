import modalBtnTpl from "../templates/modalBtn.hbs";
import { fetchFilmInfo } from "./ApiService";


export function cardLocalStorage(id) {
    fetchFilmInfo(id).then(data => { 
        const currentFilm = data;
                            // {
                            // filmData: data,
                            // //     filmId: data.id,
                            // }
        localStorage.setItem("currentFilm", JSON.stringify(currentFilm))
    })
}

export function checkBtnTextWatched() {
    const currentFilmStorage = localStorage.getItem("currentFilm")
    const currentFilm = JSON.parse(currentFilmStorage);
    const watchedFilmsStorage = localStorage.getItem("watched")
    const watchedFilms = JSON.parse(watchedFilmsStorage);
    if (watchedFilms === null) {
        const btnTextWatched = "Add to watched"
        localStorage.setItem("btnTextWatched", JSON.stringify(btnTextWatched))
    } if (watchedFilms !== null) {
        
        const currentFilmId = currentFilm.id
        const filmCheck = watchedFilms.find(watchedFilm => watchedFilm.id === currentFilmId)
        console.log(filmCheck);
        if (filmCheck) { 
                watchedFilms.forEach(element => { 
                if (element.id === currentFilm.id) {
                    const btnTextWatched = "Added"
                    localStorage.setItem("btnTextWatched", JSON.stringify(btnTextWatched))
                }
            })
        } else {
            const btnTextWatched = "Add to watched"
            localStorage.setItem("btnTextWatched", JSON.stringify(btnTextWatched))
        }
    
    }
}
function checkBtnTextQueue() {
    const currentFilmStorage = localStorage.getItem("currentFilm")
    const currentFilm = JSON.parse(currentFilmStorage);
    const queueFilmsStorage = localStorage.getItem("queue")
    const queueFilms = JSON.parse(queueFilmsStorage);
    if (queueFilms === null) {
        const btnTextQueue = "Add to queue"
        localStorage.setItem("btnTextQueue", JSON.stringify(btnTextQueue))
    } if (queueFilms !== null) {
        
        const currentFilmId = currentFilm.id
        const filmCheck = queueFilms.find(queueFilm => queueFilm.id === currentFilmId)
        console.log(filmCheck);
        if (filmCheck) { 
                queueFilms.forEach(element => { 
                if (element.id === currentFilm.id) {
                    const btnTextQueue = "Queue"
                    localStorage.setItem("btnTextQueue", JSON.stringify(btnTextQueue))
                }
            })
        } else {
            const btnTextQueue = "Add to queue"
            localStorage.setItem("btnTextQueue", JSON.stringify(btnTextQueue))
        }
    
    }
}

export function renderBtnList(modalBtnList) {
    checkBtnTextWatched()
    checkBtnTextQueue()
    const btnTextWatchedStorage = localStorage.getItem("btnTextWatched")
    const btnTextWatched = JSON.parse(btnTextWatchedStorage)
    const btnTextQueueStorage = localStorage.getItem("btnTextQueue")
    const btnTextQueue = JSON.parse(btnTextQueueStorage)
    const btnText = {
        watchedText: btnTextWatched,
        queue: btnTextQueue

    }
    modalBtnList.insertAdjacentHTML('beforeend', modalBtnTpl(btnText));
    return modalBtnList

}

export function storageWatched(e) {
    const currentFilmStorage = localStorage.getItem("currentFilm")
    const currentFilm = JSON.parse(currentFilmStorage);
    const watchedFilmsStorage = localStorage.getItem("watched")
    const watchedFilms = JSON.parse(watchedFilmsStorage);
    if (watchedFilms === null) {
            const watchedFilms = [];
        watchedFilms.push(currentFilm)
        e.target.textContent = "Added"
        const btnTextWatched = "Added"
        localStorage.setItem("btnTextWatched", JSON.stringify(btnTextWatched))
        localStorage.setItem("watched", JSON.stringify(watchedFilms))
    } else {
        console.log(currentFilm);
        const checkFilm = watchedFilms.find(watchedFilm => watchedFilm.id === currentFilm.id)
        if (checkFilm) {
            e.target.textContent = "Add to watched"
            const btnTextWatched = "Add to watched"
            localStorage.setItem("btnTextWatched", JSON.stringify(btnTextWatched))
            watchedFilms.forEach(element => { 
                if (element.id === currentFilm.id) {
                    const indexOfCurrentFilm = watchedFilms.indexOf(element)
                    watchedFilms.splice(indexOfCurrentFilm, 1)
                    localStorage.setItem("watched", JSON.stringify(watchedFilms))
                }
            })
        } else {
            e.target.textContent = "Added"
            const btnTextWatched = "Added"
            localStorage.setItem("btnTextWatched", JSON.stringify(btnTextWatched))
            watchedFilms.push(currentFilm)
            localStorage.setItem("watched", JSON.stringify(watchedFilms))
        }
        }
}

export function modalQueueStorage(e) {
    const currentFilmStorage = localStorage.getItem("currentFilm")
    const currentFilm = JSON.parse(currentFilmStorage);
    const queueFilmsStorage = localStorage.getItem("queue")
    const queueFilms = JSON.parse(queueFilmsStorage);
    if (queueFilms === null) {
            const queueFilms = [];
        queueFilms.push(currentFilm)
        e.target.textContent = "Queue"
        const btnTextQueue = "Queue"
        localStorage.setItem("btnTextQueue", JSON.stringify(btnTextQueue))
        localStorage.setItem("queue", JSON.stringify(queueFilms))
    } else {
        if (queueFilms.find(queueFilm => queueFilm.id === currentFilm.id)) {
            e.target.textContent = "Add to queue"
            const btnTextQueue = "Add to queue"
            localStorage.setItem("btnTextQueue", JSON.stringify(btnTextQueue))
            queueFilms.forEach(element => { 
                if (element.id === currentFilm.id) {
                    const indexOfCurrentFilm = queueFilms.indexOf(element)
                    queueFilms.splice(indexOfCurrentFilm, 1)
                    localStorage.setItem("queue", JSON.stringify(queueFilms))
                }
            })
        } else {
            e.target.textContent = "Queue"
            const btnTextQueue = "Queue"
            localStorage.setItem("btnTextQueue", JSON.stringify(btnTextQueue))
            queueFilms.push(currentFilm)
            localStorage.setItem("queue", JSON.stringify(queueFilms))
        }
        }
}