const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '8f517ea939a3e5bbc59bc55f9e33cbf1';

//окремі функції для fetch

//Популярні
export async function fetchPopularFilms({ page, props = 'day' }) {
    const url = `${BASE_URL}/trending/movie/${props}?api_key=${KEY}&page=${page}`;
    return await fetch(url)
        .then(response => response.json());
}

//Пошук по запиту в інпут
export async function fetchFilmsOnSearch({page, query}) {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}`;
    
    return await fetch(url)
        .then(response => response.json());
}

//Пошук по id , для модалки карточки
export async function fetchFilmInfo(filmId) {
    const url = `${BASE_URL}/movie/${filmId}?api_key=${KEY}&language=en-US`;
    
    return await fetch(url)
        .then(response => response.json());
}




/////Застарілий код (буде видалений)
//метод filmApiService.fetchCards приймає два рядки: тип запиту (popular, searchQuery, filmInfo) і пропси(відповідно day або week, рядок із запитом, id фільму)

//На виході отримуємо Проміс, який треба перетворювати в json, обробити then і catch

//При кожному запиті номер сторінки буде зростати на 1, тому не забуваємо метод resetPage() при "нових запитах"


// class FilmApiService{
//     constructor(){
//         this.page = 1;
//         this.props = '';
//     }

//     async fetchCards(fetchType) {
//         let url = '';

//         if (fetchType === 'searchQuery') {
//             console.log('fetchType: ', 'searchQuery');
//                url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${this.props}&page=${this.page}`;
//         }

//         if (fetchType === 'popularFilm') {
//             console.log('fetchType: ', 'popularFilm');
//                url = `${BASE_URL}/trending/movie/${this.props}?api_key=${KEY}&page=${this.page}`;
//         }
 
//         if (fetchType === 'filmInfo') {
//             console.log('fetchType: ', 'filmInfo');
//                url = `${BASE_URL}/movie/${this.props}?api_key=${KEY}&language=en-US`;
//         }

//         // console.log('url:', url);

//         return await fetch(url)
//             .then(response => response.json()).then((data) => {
            
//                 // console.log(data);
  
//                 this.incrementPage();
//                 return data;            ;
//         });

//     }

//     incrementPage() {
//         this.page += 1;
//     }

//     resetPage() {
//         this.page = 1;
//     }

//     setPage(newPage) {
//       this.page = newPage;  
//     }

//     setProps(newProp) {
//         this.props = newProp;
//     }
// }

// export const filmApiService = new FilmApiService();


//Axios чомусь видає помилку

//Приклади:
// filmApiService.fetchCards('searchQuery', 'i')
// 'popularFilm', 'day'
// 'searchQuery', 'fast'
// 'filmInfo', '738229'
