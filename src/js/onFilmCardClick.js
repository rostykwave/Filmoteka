export function onFilmCardClick(e) {
    e.preventDefault();

    console.log('onFilmCardClick');
    // console.log(e.currentTarget.id);

    console.log('e.currentTarget', e.currentTarget);

    if (e.currentTarget.id) {
        console.log(e.currentTarget);
        const filmId = e.currentTarget.id;
        console.log(filmId);
    }
   
//     getFilmInfo(id)
//     //кнопка Escape...
//     //забрати доступ до подій під модалкою
//     //клік на бекдроп закриває модалку

//     refs.addToWatched.addEventListener('click', addToWatched);
//     refs.addToQueue.addEventListener('click', addToQueue);

//     //коли модалка відкрита додаються слухачі двох кнопок
// // addToWatched
// // addToQueue
// // коли закриваєм - знімаєм слухачів
}