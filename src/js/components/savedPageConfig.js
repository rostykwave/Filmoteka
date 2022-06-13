import { homePageLoader, myLibraryPageLoader } from "../..";
import { getPopularFilms } from "../getPopularFilms";

function setConfigState(reloadActionName) {
    localStorage.setItem('reloadAction', reloadActionName);
}

function getConfigState() {
    let reloadAction = 'getPopularFilms';
    const data = localStorage.getItem('reloadAction');

    if (data) {
        reloadAction = data;
    }
    

    switch (reloadAction) {
 
        case 'myLibraryPageLoader':
            myLibraryPageLoader();
            break;
        case 'homePageLoader':
            homePageLoader();
            break;
    
        default:
            getPopularFilms();
            break;
    }

}

export{ setConfigState, getConfigState };