// console.log('onHomePageLoad');
import FilmApiService from './ApiService';
const filmApiService = new FilmApiService();
import renderFilmCards from './renderFilmCards';


export default function onHomePageLoad() {
    ///API
//методу fetchCards передаємо:
///тип запиту: popular, searchQuerry, filmInfo
//Додаткові параметри
//popularFilm (time_window=day/week)
//searchQuerry(query)
//filmInfo(movie_id)
//В залежності від першого параметра всередині класу вибиратиметься потрібний конструктор url
filmApiService.resetPage();
// 'popularFilm', 'day'
// 'searchQuerry', 'inter'
// 'filmInfo', '738229'
    
    filmApiService.fetchCards('popularFilm', 'day')
    .then(data => {
        console.log(data);
        // console.log(data.dataResults);
        /////Рендеримо розмітку тут///////////
         renderFilmCards(data)
    })
    .catch(error => {
        console.log(error);
    })
        .finally(console.log('Fetched'));
    
   
}



///Особливістю роботи з функціями є те, що потрібно в цей файл імпортувати всі потрібні функції (APIservice в цьому випадку та експортувати функцію )
