//Templates
import photoCardTpl from './templates/film-card.hbs';

///BackEnd API///
import FilmApiService from './js/ApiService';
const filmApiService = new FilmApiService();

///Refs
import getRefs from './js/getRefs';
const refs = getRefs();
/////////////

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

function onHomePageLoad () {
    filmApiService.fetchCards('popularFilm', 'day')
    .then(data => {
        console.log(data);
        // console.log(data.dataResults);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(console.log('Fetched'));
}

onHomePageLoad();

//Кожний fetch огортаємо в функцію
//onSearch(e) передавтиме 'searchQuerry' і рядок запиту
//onHomePageLoad передавтиме 'popularFilm' і рядок day або week
//onFilmDetails передавтиме filmInfo' і рядок з id фільму у форматі '738229'ж
 




//hero.js: обробка кліку по кнопці
// Функція onSearch - колбек

//Функція onSearch - приймає event,
// перевіряє чи є вміст(повідомлення як ні Notifix) <
//передає запит інпута в API
//скидає вміст з карочками
//скидає облік сторінок
//запускає fetchCards

//Функція FetchCards
//звертається до APiService, робить запит
//викликає renderFilmCards

//Функція renderFilmCards
//отримує фото, назву, жанр, рік
//рендерить по шаблону




///Зразок рендеру
const dataHits = [{ id: 53633 }, { id: 576655 }];
refs.cardContainer.insertAdjacentHTML('beforeend', photoCardTpl(dataHits));
/////////////////////

