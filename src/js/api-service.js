const axios = require('axios');

// const BASE_URL = 'https://pixabay.com/api';
// const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
// const IMAGE_TYPE = 'photo';
// const ORIENTATION = 'horizontal';
// const SAFE_SEARCH = 'true';
// const PER_PAGE = 40;

export default class PhotoApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }


    async fetchCards() {
    
        return await axios.get('https://pixabay.com/api/', {
            params: {
                key: '27289011-631f37c1ff3a5cbdb3c134909',
                q: this.searchQuery,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: this.page,
                per_page: 40,
        
            }
        }).then(({ data }) => {
            this.incrementPage();
            return data.hits;
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

