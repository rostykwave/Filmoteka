// import { filmApiService } from "./ApiService";
import { refs } from "./getRefs";
import { onFetchError } from "./onFetchError";
import { renderFilmCardModal } from "./renderFilmCardModal";
import defaultPoster from '../images/poster-plug.jpg';
import playerLogo from '../images/youtube-img.png';
import movieTrailer  from 'movie-trailer';
import { fetchFilmInfo } from "./ApiService";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { startLoader, stopLoader } from './loaderSpinner';

export function getFilmInfo(id) {

    startLoader();
        fetchFilmInfo(id)
        .then(data => {
            data.genres = data.genres.map((g) => g["name"]).join(", ");
            data.trailer = movieTrailer(data.original_title, { id: true })
                .then(result => {
                    data.youtube_video_id = result;
                    data.player_logo = playerLogo;
                    if (data.poster_path === null) {
                        data.new_poster_path = defaultPoster;
                    } else {
                        data.new_poster_path = `https://image.tmdb.org/t/p/w500${data.poster_path}`
                    }
                        stopLoader();
                        renderFilmCardModal(data);
                        refs.backdrop.classList.toggle('is-modal-hidden');
                        refs.body.classList.toggle('overflow-hidden');
                        refs.modalCloseButton.addEventListener('click', onCloseButtonClick);
                        refs.backdrop.addEventListener('click', onEmptySpaceClick);
                        addEventListener('keydown', onEscClose);
                        
                    // YOUTUBE TRAILER
                    const pictureWrapper = document.querySelector('.picture-wrapper');
                    const iframeWrapper = document.querySelector('.modal-movie-trailer-is-hidden');
                    const movieTrailerBackdrop = document.querySelector('.movie-trailer-backdrop');
                    const playerL = document.querySelector('.player-logo');
                        if (result === null || result === NaN) {
                            playerL.remove();
                        }
                    pictureWrapper.addEventListener('click', onIframeWrapperClick);
                    function onIframeWrapperClick() {
                        
                        if (result !== null) {
                            movieTrailerBackdrop.classList.toggle('is-modal-hidden');
                            iframeWrapper.classList.remove('modal-movie-trailer-is-hidden');
                            iframeWrapper.classList.add('modal-movie-trailer-is-active');
                        } else {
                            Notify.failure('Sorry, trailer not found :(', {
                                timeout: 1500,
                                position: "right-top",
                                opacity: 0.95,
                                background: "#ff6b08",
                                cssAnimationStyle: "zoom",
                                cssAnimationDuration: 600,
                                borderRadius: "25px",
                                fontSize: "16px",
                            });
                            }
                    }
                    movieTrailerBackdrop.addEventListener('click', iframeWrapperClose);
                            function iframeWrapperClose() {
                                iframeWrapper.classList.remove('modal-movie-trailer-is-active');
                                iframeWrapper.classList.add('modal-movie-trailer-is-hidden');
                                movieTrailerBackdrop.classList.toggle('is-modal-hidden');
                            }
                            addEventListener('keydown', onEscTrailerClose);
                            function onEscTrailerClose(event) {
                                if (event.key === "Escape" && !iframeWrapper.classList.contains('modal-movie-trailer-is-hidden')) { 
                                    iframeWrapperClose(); 
                                }
                    }
                    
    function onCloseButtonClick() {
        onModalClose();
    }

        function onEmptySpaceClick(e) {
        
        if (e.target === e.currentTarget && iframeWrapper.classList.contains('modal-movie-trailer-is-hidden')) {
            onModalClose();
        } else if (e.target === e.currentTarget && iframeWrapper.classList.contains('modal-movie-trailer-is-active')) {
                iframeWrapper.classList.remove('modal-movie-trailer-is-active');
                iframeWrapper.classList.add('modal-movie-trailer-is-hidden');
                movieTrailerBackdrop.classList.toggle('is-modal-hidden');
            }
        }

    function onEscClose(event) {
        if (event.key === "Escape" && !refs.backdrop.classList.contains('is-hidden') && iframeWrapper.classList.contains('modal-movie-trailer-is-hidden')) { 
            onModalClose();
            }      
        }
    
    function onModalClose() {
        refs.body.classList.remove('overflow-hidden');
        refs.backdrop.classList.toggle('is-modal-hidden');
        refs.modalCloseButton.removeEventListener('click', onCloseButtonClick);
        refs.backdrop.removeEventListener('click', onEmptySpaceClick);
        removeEventListener('keydown', onEscClose);
    }
            })
        })
        .catch(onFetchError);
};