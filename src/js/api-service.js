const BASE_URL = 'https://pixabay.com/api';
const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFE_SEARCH = 'true';


function fetchPhotoCards(photoName) {
    return fetch(`${BASE_URL}/?key=${KEY}&q=${photoName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}`)
        .then(reponse => reponse.json());
}

export default { fetchPhotoCards };

