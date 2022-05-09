import './sass/main.scss';
//Notifix
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//Templates
import photoCardTpl from './templates/photo-card.hbs'



///BackEnd
import API from './js/api-service';
//Refs
import getRefs from './js/getRefs';
const refs = getRefs();



refs.form.addEventListener('submit', onSearch);


///Functions
function onSearch(e){
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const searchQuery = formElements.searchQuery.value;

    API.fetchPhotoCards(searchQuery)
        .then(renderPhotoCard)
        .catch(onFetchError)
        .finally(console.log('fetch done'));

    console.log(searchQuery);

    // refs.form.reset();
}

function renderPhotoCard(photo) {

    console.log(photo.hits[0]);
    console.log(photo.hits.length);
    console.log(photo.hits[0].webformatURL);
    // const markup = photoCardTpl(photo);


    ///Створення пустого масиву
    const markup = [];

    ////Ітерація по масиву стільки разів, скільки прийшло відповіді з бекенду
    for (let i = 0; i < photo.hits.length; i += 1) {
        //додавання згенерованого HTML-карток в масив
    markup.push(photoCardTpl(photo.hits[i]));
    }

    ///Об'єднання масиву в один рядок
    const markupList = markup.join('');
    ///Вставлення списку HTML всіх згенерованих карток в галерею
    refs.cardContainer.innerHTML = markupList;
}

function onFetchError(error) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
}