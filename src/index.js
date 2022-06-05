//Templates
import filmCardTpl from './templates/film-card.hbs';
import modalFilmTpl from './templates/modal-film-description';

///BackEnd API///
import FilmApiService from './js/functions/ApiService';
const filmApiService = new FilmApiService();

///Refs
import getRefs from './js/functions/getRefs';
const refs = getRefs();
/////////////

//
import whatTheme from './js/functions/whatTheme';
import setStorrage from './js/functions/setStorrage';
import getStorrage from './js/functions/getStorrage';
import goItStudents from './js/functions/goItStudents';
//
import renderFilmCards from './js/functions/renderFilmCards';
import renderFilmDetails from './js/functions/renderFilmDetails'

///Функції, які покладаються на API, всередині вони передають методу filmApiService.fetchCards потрібні запити на популярні фільми, інфо (пошук по id) та пошук фільмів по ключовому слову(query)
import onHomePageLoad from './js/functions/onHomePageLoad';
import onSearch from './js/functions/onSearch';
import onFilmDetails from './js/functions/onFilmDetails';
//Кожний fetch огортаємо в функцію
//onSearch(e) передавтиме 'searchQuerry' і рядок запиту
//onHomePageLoad передавтиме 'popularFilm' і рядок day або week
//onFilmDetails передавтиме filmInfo' і рядок з id фільму у форматі '738229'


///Components import
import example from './js/components/example';
import loader from './js/components/Loader';
import pageHeader from './js/components/page-header';
import hero from './js/components/hero';
import cardsContainer from './js/components/cards-container';
import localStorage from './js/components/local-storage';
import pagination from './js/components/pagination';
import modalFilmDescription from './js/components/modal-film-description';
import pageFooter from './js/components/page-footer';
import modalFooterGoITStudents from './js/components/modal-footer-GoIT-Students';

const car = 'Lexus';
example(car);



//Виклики функцій
whatTheme()
onHomePageLoad();
//
// getStorrage();
// setStorrage();
// goItStudents();
// onSearch();
//Components
loader();
pageHeader();
hero();
cardsContainer();
localStorage();
pagination();
modalFilmDescription();
pageFooter();
modalFooterGoITStudents();

///////
//зроблений імпорт, тобто це ваша одиниця коду, де можна вільно писати
//щоб використовувати функції їх потрібно заімпортувати в свій файл
// Для використання змінних їх необхідно "передати " функції
