

const filmDetailModalWrapper = document.querySelector('.film-detail-modal-wrapper');
filmDetailModalWrapper.addEventListener('click', changeTextContent)


let filmWatched = [];
let filmQueue = [];
let watchedTextContent = "Add to watched";
let queueTextContent = "Add to queue";
let watchedFilmId = "";
let queueFilmId = "";


export function watchedStorage(data, modalBtnWatched) {
    
    watchedFilmId = data

    if (localStorage.getItem("filmWatched") === null) {
        localStorage.setItem("filmWatched", JSON.stringify(filmWatched));
        modalBtnWatched.textContent = watchedTextContent
        localStorage.setItem("watchedTextContent", JSON.stringify(watchedTextContent));

    }
    if (localStorage.getItem("filmWatched") !== null) {
        const getStorage = localStorage.getItem("filmWatched");
        const storageArray = JSON.parse(getStorage)
        watchedTextContent = localStorage.getItem("watchedTextContent");
        if (storageArray.includes(watchedFilmId)) {
            watchedTextContent = `Added`
            modalBtnWatched.textContent = watchedTextContent
            localStorage.setItem("watchedTextContent", JSON.stringify(watchedTextContent));
        }

        
    }
}

function changeTextContent(e) {
    if (e.target.name === "watched") {
        if (e.target.textContent === "Add to watched") {
            e.target.textContent = "Added"
            watchedTextContent = e.target.textContent
            localStorage.setItem("watchedTextContent", JSON.stringify(watchedTextContent));
            AddToWatched()
        }
        else {
            e.target.textContent = "Add to watched"
            watchedTextContent = e.target.textContent
            localStorage.setItem("watchedTextContent", JSON.stringify(watchedTextContent));
            RemoveWatched()
        }
    } if (e.target.name === "queue") {
        console.log("queue");
        if (e.target.textContent === "Add to queue") {
            e.target.textContent = "Queued"
            queueTextContent = e.target.textContent
            localStorage.setItem("queueTextContent", JSON.stringify(queueTextContent));
            AddToQueue()
        } else {
            e.target.textContent = "Add to queue"
            queueTextContent = e.target.textContent
            localStorage.setItem("queueTextContent", JSON.stringify(queueTextContent));
            RemoveQueue()
        }
    }
        
    }

    function AddToWatched() {
        filmWatched.push(watchedFilmId)
        localStorage.setItem("filmWatched", JSON.stringify(filmWatched));
    }
    
    function RemoveWatched() {
        const getStorage = localStorage.getItem("filmWatched");
        const storageArray = JSON.parse(getStorage)
        const numerOfElement = storageArray.indexOf(watchedFilmId)
        storageArray.splice(numerOfElement, 1);
        filmWatched = storageArray;
        localStorage.setItem("filmWatched", JSON.stringify(filmWatched));
    }

    export function queueStorage(data, modalBtnQueue) {
    
        queueFilmId = data.id
    
        if (localStorage.getItem("filmQueue") === null) {
            localStorage.setItem("filmQueue", JSON.stringify(filmQueue));
            modalBtnQueue.textContent = queueTextContent
            localStorage.setItem("queueTextContent", JSON.stringify(queueTextContent));

        }
        if (localStorage.getItem("filmQueue") !== null) {
            const getStorage = localStorage.getItem("filmQueue");
            const storageArray = JSON.parse(getStorage)
            queueTextContent = localStorage.getItem("queueTextContent");
            if (storageArray.includes(queueFilmId)) {
                queueTextContent = `Queued`
                modalBtnQueue.textContent = queueTextContent
                localStorage.setItem("queueTextContent", JSON.stringify(queueTextContent));
            }
        }
}


function AddToQueue() {
        filmQueue.push(queueFilmId)
        localStorage.setItem("filmQueue", JSON.stringify(filmQueue));
    }
    
    function RemoveQueue() {
        const getStorage = localStorage.getItem("filmQueue");
        const storageArray = JSON.parse(getStorage)
        const numerOfElement = storageArray.indexOf(queueFilmId)
        storageArray.splice(numerOfElement, 1);
        filmQueue = storageArray;
        localStorage.setItem("filmQueue", JSON.stringify(filmQueue));
    }