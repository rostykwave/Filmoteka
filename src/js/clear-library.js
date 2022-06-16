import { refs } from "./getRefs";
import { getSavedFilms, onQueueBtnClick } from "./getSavedFilms";


export function onClearLbr (){
   
    const currentFunction=JSON.parse(localStorage.getItem('reloadAction')).funcName;
    // console.log(currentFunction);
    let localStorageKey='queue';


    if (currentFunction==='onWatchedBtnClick'){
        localStorageKey='watched';
    }
   
   

    // clear local storage 
    const data={
        results: [],
      }
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    // refs.filmGallery.innerHTML = `No saved movies in ${localStorageKey}.`;
    getSavedFilms(localStorageKey); 
   
}


export function showLbrBtn(){
refs.clearLibraryBtn.classList.remove('invisible');
}

export function hidelbrBtn(){
refs.clearLibraryBtn.classList.add('invisible');
}
