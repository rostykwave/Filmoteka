// import axios from 'axios';
// console.log('before');
// const axios = require('axios').default;
// console.log('after');

const BASE_URL = 'https://api.themoviedb.org/3';
const QUERY_TYPE = '/search/movie';
// /trending/all/day
// /movie/{movie_id}
// /search/movie

const KEY = '8f517ea939a3e5bbc59bc55f9e33cbf1';
// const PER_PAGE = 40;


export default class FilmApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchCards() {
        const url = `${BASE_URL}${QUERY_TYPE}?api_key=${KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}`;

        console.log(url);

        return await fetch(url)
            .then(response => response.json()).then((data) => {
            
                console.log(data);
  
            this.incrementPage();

            const currentPage = this.page - 1;
            const dataResults = data.results;
            const totalResults = data.total_results;
            const totalPages = data.total_pages;
        
            return { dataResults, totalResults, totalPages, currentPage };
            ;
        });

        // return await axios.get(url).then(({ data }) => {
  
        //     this.incrementPage();

        //     const currentPage = this.page - 1;
        //     const dataHits = data.hits;
        //     const totalHits = data.totalHits;
        
        //     return { dataHits, totalHits, PER_PAGE, currentPage };
        // });

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
