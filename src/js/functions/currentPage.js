import getRefs from "./getRefs";

const refs = getRefs();

export default class currentPage {
    constructor() {
        this.btnHome = refs.btnHome;
        this.btnLibrary = refs.btnLibrary;
    }
    ///Выделяет текущюю страницу
    currentHome() {
    refs.btnLibrary.classList.remove('current-page');
    refs.btnHome.classList.add('current-page');
    }
    currentLibrary() {
    refs.btnHome.classList.remove('current-page');
    refs.btnLibrary.classList.add('current-page');
}
}