function getFilmInfo(id) {

    FilmApiService.fetchCards('filmInfo', id)
        .then(data => {
        renderFilmCardModal(data);
    })
        .catch(onFetchError)
        .finally(console.log('fetch getFilmInfo done'));
};