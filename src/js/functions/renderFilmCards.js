//імпорт всіх потрібних функцій
///Refs
import getRefs from './getRefs';
const refs = getRefs();
import filmCardTpl from '../../templates/film-card.hbs';


export default function renderFilmCards() {
    console.log('renderFilmCards');
    ///
    //спирається на дані з коду вище (картинка, назва, жанри, рік, id)
    //рендерить розмітку за допомогою handlebars
    //В розмітці має бути обгортка карточки тегом а, повинен зберігатись id

//     ///Зразок рендеру
// const dataHits = [{ id: 53633 }, { id: 576655 }];
// refs.cardContainer.insertAdjacentHTML('beforeend', filmCardTpl(dataHits));
// /////////////////////
}