const axios = require('axios');

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFE_SEARCH = 'true';
const PER_PAGE = 40;

// const url = `${BASE_URL}?key=${KEY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}&page=${this.page}&per_page=${PER_PAGE}`
        //     BASE_URL, {
        //     params: {
        //         key: KEY,
        //         q: this.searchQuery,
        //         image_type: IMAGE_TYPE,
        //         orientation: ORIENTATION,
        //         safesearch: SAFE_SEARCH,
        //         page: this.page,
        //         per_page: PER_PAGE,
        
        //     }
        // 

export default class PhotoApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchCards() {
        const url = `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}&page=${this.page}&per_page=${PER_PAGE}`;
        
        return await axios.get(url).then(({ data }) => {
  
            this.incrementPage();

            const currentPage = this.page - 1;
            const dataHits = data.hits;
            const totalHits = data.totalHits;
        
            return { dataHits, totalHits, PER_PAGE, currentPage };
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

