import { homePageLoader, myLibraryPageLoader } from "../..";
import { getSearchFilms } from "../getFilmsOnSearchQuery";
import { getPopularFilms } from "../getPopularFilms";
import { refs } from "../getRefs";
import { onQueueBtnClick, onWatchedBtnClick } from "../getSavedFilms";
import { onLibraryPage } from "../header";
import { onSearch } from "../onSearch";

function setConfigState(reloadActionName) {
    const data = reloadActionName;
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('reloadAction', dataJSON);
}

function getConfigState() {
    let reloadAction = 'getPopularFilms';
    const dataJSON = localStorage.getItem('reloadAction');
    let searchQuery = '';
    const searchInput = document.querySelector('.header-input');


    if (dataJSON) {
        const data = JSON.parse(dataJSON);
        reloadAction = data;
        searchQuery = data.q;
    }
    

    switch (reloadAction.funcName) {
 
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
        case 'onSearch':
            searchInput.value = searchQuery;
            refs.searchForm.addEventListener('submit', onSearch);
            refs.searchForm.requestSubmit();
           
            break;
    
        default:
            getPopularFilms();
            break;
    }

}

function getNameOfCurrentPageFunction() {
    const currenPageJSON = localStorage.getItem('reloadAction');
    return JSON.parse(currenPageJSON).funcName;
}

export{ setConfigState, getConfigState,getNameOfCurrentPageFunction };