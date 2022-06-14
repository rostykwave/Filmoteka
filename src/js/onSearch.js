import { refs } from './getRefs';
import { getSearchFilms } from './getFilmsOnSearchQuery';
import { setConfigState } from './components/savedPageConfig';

refs.searchForm.addEventListener('submit', onSearch);

export let queryCurr = '';

export function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    errNotificationShow('Please, fill the search query and try again.', 3000);
    return;
  }
  let pattern = /^[a-z0-9-\s]+$/i;
  if (!pattern.test(query)) {
    errNotificationShow('Please, enter the correct movie name and try again.', 3000);
    return;
  }
  queryCurr = query;

  setConfigState({ funcName: 'onSearch', q: queryCurr });

  getSearchFilms(queryCurr);
}

export function errNotificationShow(message, showTime) {
  refs.searchForm.insertAdjacentHTML('beforeend', '<p class="form-alert is-hidden"></p>');
  const formAlert = document.querySelector('.form-alert');
  formAlert.textContent = `${message}`;
  formAlert.classList.toggle('is-hidden');
  setTimeout(() => {
    formAlert.classList.toggle('is-hidden');
  }, showTime);
}
