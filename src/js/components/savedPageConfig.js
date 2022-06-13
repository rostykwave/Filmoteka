import { homePageLoader, myLibraryPageLoader } from "../..";
import { getPopularFilms } from "../getPopularFilms";
import { onQueueBtnClick, onWatchedBtnClick } from "../getSavedFilms";
import { onLibraryPage } from "../header";

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
        case 'onQueueBtnClick':
            onLibraryPage();
            onQueueBtnClick();
            break;
        case 'onWatchedBtnClick':
            onLibraryPage();
            onWatchedBtnClick();
            break;
    
        default:
            getPopularFilms();
            break;
    }

}

export{ setConfigState, getConfigState };