import imgPlug from '../../images/hero-film/movie-3-612x612.jpg'

export default function renderFilmDetails(data) {
    const genres = data.genres.map(genre => {
        return genre.name
    })
    if (data.poster_path !== null) {
        const filmDetailMarkupRender = `
        <div class="picture-wrapper">
            <img class="modal-poster-img" src="${'https://image.tmdb.org/t/p/w500' + data.poster_path}" alt="${data.original_title}">
        </div>
            <div class="info-modal-card">
                <h2 class="film-title">${data.original_title}</h2>
                <div class="lists-wrapper">
                    <ul class="properties-list">
                        <li class="properties-list__item">Vote / Votes</li>
                        <li class="properties-list__item">Popularity</li>
                        <li class="properties-list__item">Original Title</li>
                        <li class="properties-list__item">Genre</li>
                    </ul>
                    <ul class="values-list">
                        <li class="values-list__item"><span class="values-list__item-vote">${data.vote_average}</span><span class="vote-separator"> /  </span>${data.vote_count}</li>
                        <li class="values-list__item">${data.popularity}</li>
                        <li class="values-list__item">${data.original_title}</li>
                        <li class="values-list__item">${genres}</li>
                    </ul > </div>
                    <h3 class="about-title">ABOUT</h3>
                        <p class="film-description">${data.overview}</p>
                <ul class="modal-buttons__list">
                    <li class="modal-buttons__item">
                        <button class="watched-btn"><span class="modal-btn__text">ADD TO WATCHED</span></button>
                    </li>
                    <li class="modal-buttons__item">
                        <button class="queue-btn"><span class="modal-btn__text">ADD TO QUEUE</span></button>
                    </li>
                </ul> 
            </div>
        `
        const renderThumb = document.querySelector('.film-detail-modal-wrapper');
        renderThumb.innerHTML = '';
        renderThumb.insertAdjacentHTML('beforeend', filmDetailMarkupRender);
    }
    else {
        const filmDetailMarkupRender = `
        <div class="picture-wrapper">
            <img class="modal-poster-img" src="${imgPlug}" alt="${data.original_title}">
        </div>
            <div class="info-modal-card">
                <h2 class="film-title">${data.original_title}</h2>
                <div class="lists-wrapper">
                    <ul class="properties-list">
                        <li class="properties-list__item">Vote / Votes</li>
                        <li class="properties-list__item">Popularity</li>
                        <li class="properties-list__item">Original Title</li>
                        <li class="properties-list__item">Genre</li>
                    </ul>
                    <ul class="values-list">
                        <li class="values-list__item"><span class="values-list__item-vote">${data.vote_average}</span><span class="vote-separator"> /  </span>${data.vote_count}</li>
                        <li class="values-list__item">${data.popularity}</li>
                        <li class="values-list__item">${data.original_title}</li>
                        <li class="values-list__item">${genres}</li>
                    </ul > </div>
                    <h3 class="about-title">ABOUT</h3>
                        <p class="film-description">${data.overview}</p>
                <ul class="modal-buttons__list">
                    <li class="modal-buttons__item">
                        <button class="watched-btn"><span class="modal-btn__text">ADD TO WATCHED</span></button>
                    </li>
                    <li class="modal-buttons__item">
                        <button class="queue-btn"><span class="modal-btn__text">ADD TO QUEUE</span></button>
                    </li>
                </ul> 
            </div>
        `
        const renderThumb = document.querySelector('.film-detail-modal-wrapper');
        renderThumb.innerHTML = '';
        renderThumb.insertAdjacentHTML('beforeend', filmDetailMarkupRender);
    }
}

//     ///Зразок рендеру
// const dataHits = [{ id: 53633 }, { id: 576655 }];
// refs.cardContainer.insertAdjacentHTML('beforeend', modalFilmTpl(dataHits));
// /////////////////////
