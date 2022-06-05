//імпорт всіх потрібних функцій
///Refs
import getRefs from './getRefs';
const refs = getRefs();
import filmCardTpl from '../../templates/film-card.hbs';


export default function renderFilmCards(data) {
    console.log('renderFilmCards');
    ///
    //рендерить розмітку за допомогою handlebars
    //В розмітці має бути обгортка карточки тегом а, повинен зберігатись id

//     ///Зразок рендеру
// const dataHits = [{ id: 53633 }, { id: 576655 }];
// refs.cardContainer.insertAdjacentHTML('beforeend', filmCardTpl(dataHits));
// /////////////////////
}

//взяти з data масив об'єктів фільмів
//передати його в шаблон handlebars
//закинути в шаблон розмітку, налаштувати її
//додати атрибути id тегу a