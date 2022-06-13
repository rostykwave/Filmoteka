import { myLibraryPageLoader } from "../..";
import { getPopularFilms } from "../getPopularFilms";

function setConfigState(reloadActionName) {
    //
    console.log('setConfigState');
    console.log(reloadActionName);
   
    localStorage.setItem('reloadAction', reloadActionName);
}

function getConfigState() {
    //
    console.log('getConfigState');
    let reloadAction = 'getPopularFilms';
    const data = localStorage.getItem('reloadAction');

    if (data) {
        reloadAction = data;
    }
    
    if (reloadAction === 'getPopularFilms') {
        getPopularFilms();
    } else if (reloadAction === 'myLibraryPageLoader'){
        myLibraryPageLoader()
    }

}

export{ setConfigState, getConfigState };