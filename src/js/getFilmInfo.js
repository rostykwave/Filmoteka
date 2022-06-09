import { filmApiService } from "./ApiService";
import { refs } from "./getRefs";
import { onFetchError } from "./onFetchError";
import { renderFilmCardModal } from "./renderFilmCardModal";
import movieTrailer  from 'movie-trailer';

export function getFilmInfo(id) {

    filmApiService.setProps(id);

    filmApiService.fetchCards('filmInfo')
        .then(data => {
            data.genres = data.genres.map((g) => g["name"]).join(", ");
            data.trailer = movieTrailer(data.original_title, { id: true })
                .then(result => {
                    data.youtube_video_id = result;
                        console.log(result);
                        renderFilmCardModal(data);
                        refs.backdrop.classList.toggle('is-hidden');
                        refs.body.classList.toggle('overflow-hidden');
                        refs.modalCloseButton.addEventListener('click', onCloseButtonClick);
                        refs.backdrop.addEventListener('click', onEmptySpaceClick);
                        addEventListener('keydown', onEscClose);
                        
                    
                    // YOUTUBE TRAILER
                    const pictureWrapper = document.querySelector('.picture-wrapper');
                    const iframeWrapper = document.querySelector('.modal-movie-trailer-is-hidden');
                    const movieTrailerBackdrop = document.querySelector('.movie-trailer-backdrop');

                        pictureWrapper.addEventListener('click', onIframeWrapperClick);
                        function onIframeWrapperClick() {
                            movieTrailerBackdrop.classList.toggle('is-hidden');
                            iframeWrapper.classList.remove('modal-movie-trailer-is-hidden');
                            iframeWrapper.classList.add('modal-movie-trailer-is-active');
                        }
                    
                        movieTrailerBackdrop.addEventListener('click', iframeWrapperClose);
                            function iframeWrapperClose() {
                                iframeWrapper.classList.remove('modal-movie-trailer-is-active');
                                iframeWrapper.classList.add('modal-movie-trailer-is-hidden');
                                movieTrailerBackdrop.classList.toggle('is-hidden');
                            }
                    addEventListener('keydown', onEscTrailerClose);
                    function onEscTrailerClose(event) {
                        if (event.key === "Escape" & !iframeWrapper.classList.contains('modal-movie-trailer-is-hidden')) { 
                            iframeWrapperClose();
                        }
                    }
                    
    function onCloseButtonClick() {
        onModalClose();
    }

    function onEmptySpaceClick(e) {
        if (e.target === e.currentTarget & iframeWrapper.classList.contains('modal-movie-trailer-is-hidden')) {
                onModalClose();
            }
        }

    function onEscClose(event) {
        if (event.key === "Escape" & !refs.backdrop.classList.contains('is-hidden') & iframeWrapper.classList.contains('modal-movie-trailer-is-hidden')) { 
            onModalClose();
            }      
        }
    
    function onModalClose() {
        refs.body.classList.remove('overflow-hidden');
        refs.backdrop.classList.toggle('is-hidden');
        refs.modalCloseButton.removeEventListener('click', onCloseButtonClick);
        refs.backdrop.removeEventListener('click', onEmptySpaceClick);
        removeEventListener('keydown', onEscClose);
    }
            })
        })
        .catch(onFetchError)
        .finally(console.log('fetch getFilmInfo done'));
};