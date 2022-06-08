export function checkDarkMode() {
  console.log('checkDarkMode');
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const inputEl = document.querySelector('.theme-switch__toggle');
  const bodyEl = document.querySelector('body');
  inputEl.addEventListener('change', onInputChange);

  const THEME_KEY = 'theme-color';
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme) {
    bodyEl.classList.add(savedTheme);
    if (bodyEl.classList.contains(Theme.DARK)) {
      inputEl.checked = true;
    }
  } else {
    bodyEl.classList.add(Theme.LIGHT);
  }
  function onInputChange() {
    if (inputEl.checked) {
      bodyEl.classList.remove(Theme.LIGHT);
      bodyEl.classList.add(Theme.DARK);
    } else {
      bodyEl.classList.remove(Theme.DARK);
      bodyEl.classList.add(Theme.LIGHT);
    }
    localStorage.setItem(THEME_KEY, bodyEl.classList);
  }
}
