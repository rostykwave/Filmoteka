
//метод filmApiService.fetchCards приймає два рядки: тип запиту (popular, searchQuerry, filmInfo) і пропси(відповідно day або week, рядок із запитом, id фільму)

//На виході отримуємо Проміс, який треба перетворювати в json, обробити then і catch

//При кожному запиті номер сторінки буде зростати на 1, тому не забуваємо метод resetPage() при "нових запитах"

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '8f517ea939a3e5bbc59bc55f9e33cbf1';


export default class FilmApiService{
    constructor(){
        this.page = 1;
    }

    async fetchCards(fetchType, props) {
        let url = '';

        if (fetchType === 'searchQuerry') {
            console.log('fetchType: ', 'searchQuerry');
               url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${props}&page=${this.page}`;
        }

        if (fetchType === 'popularFilm') {
            console.log('fetchType: ', 'popularFilm');
               url = `${BASE_URL}/trending/movie/${props}?api_key=${KEY}&page=${this.page}`;
        }
 
        if (fetchType === 'filmInfo') {
            console.log('fetchType: ', 'filmInfo');
               url = `${BASE_URL}/movie/${props}?api_key=${KEY}&language=en-US`;
        }

        // console.log('url:', url);

        return await fetch(url)
            .then(response => response.json()).then((data) => {
            
                // console.log(data);
  
                this.incrementPage();
                return data;            ;
        });

    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

}










//Axios чомусь видає помилку

//Приклади:
// filmApiService.fetchCards('searchQuerry', 'i')
// 'popularFilm', 'day'
// 'searchQuerry', 'fast'
// 'filmInfo', '738229'
