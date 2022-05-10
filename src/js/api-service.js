const BASE_URL = 'https://pixabay.com/api';
const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFE_SEARCH = 'true';


// function fetchPhotoCards(photoName) {
//     return fetch(`${BASE_URL}/?key=${KEY}&q=${photoName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}`)
//         .then(reponse => reponse.json());
// }

// export default { fetchPhotoCards };

export default class PhotoApiService{
    constructor(){
        this.searchQuery = '';
    }


    fetchCards() {
        const url = `${BASE_URL}/?key=${KEY}&q=${this.searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}`;

        return fetch(url)
            .then(response => response.json())
            .then((cards) => {
                return cards;
            });
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

