const BASE_URL = 'https://pixabay.com/api';
const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFE_SEARCH = 'true';
const PER_PAGE = 40;


// function fetchPhotoCards(photoName) {
//     return fetch(`${BASE_URL}/?key=${KEY}&q=${photoName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}`)
//         .then(reponse => reponse.json());
// }

// export default { fetchPhotoCards };

export default class PhotoApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }


    fetchCards() {
        const url = `${BASE_URL}/?key=${KEY}&q=${this.searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}&page=${this.page}&per_page=${PER_PAGE}`;

        ///hits - ключ до масиву з фото
        return fetch(url)
            .then(response => response.json())
            .then(({hits}) => {
                this.incrementPage();
                return hits;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

