import { refs } from "./getRefs";


export function onClearLbr (){
   
    const currentFunction=JSON.parse(localStorage.getItem('reloadAction')).funcName;
    console.log(currentFunction);
    let localStorageKey='queue';


    if (currentFunction==='onWatchedBtnClick'){
        localStorageKey='watched';
    }
   
    refs.filmGallery.innerHTML = `No saved movies in ${localStorageKey}.`;
//   hidelbrBtn();

    // clear local storage 
    const data={
        results: [],
      }
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    
}


export function showLbrBtn(){
refs.clearLibraryBtn.classList.remove('invisible');
}

export function hidelbrBtn(){
refs.clearLibraryBtn.classList.add('invisible');
}