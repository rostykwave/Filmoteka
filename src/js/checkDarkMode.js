export function checkDarkMode() {
  console.log('checkDarkMode');
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const inputEl = document.querySelector('.theme-switch__toggle');
  const bodyEl = document.querySelector('body');
  const svgUse = document.querySelector('.theme-switch__icon1');
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



    

    if (inputEl.checked) {
      console.log("LIGHT!!!!!!!!!!!!");
      //light theme


      const svgArray = Array.from(svgUse.children);

      svgArray.map((element, i) => {
        setTimeout(() => {
          element.classList.remove('loader-hidden');
          if (i+1 != svgUse.children.length){
            setTimeout(() => {
              element.classList.add('loader-hidden');
            }, 50);
          }
        }, i*50);

      })



    } else {
      console.log("DARK!!!!!!!!!!!!");

      const svgArray = Array.from(svgUse.children);
      const reversedSvgArray = svgArray.reverse();

      reversedSvgArray.map((element, i) => {
        setTimeout(() => {
          element.classList.remove('loader-hidden');
          if (i+1 != svgUse.children.length){
            setTimeout(() => {
              element.classList.add('loader-hidden');
            }, 50);
          }
        }, i*50);

      })

    }
    




  }


  


  

  if (inputEl.checked) {
      svgUse.children[3].classList.remove('loader-hidden');
  } else {
    svgUse.children[0].classList.remove('loader-hidden');
  }

}







// svgUse.addEventListener('click', () => {

// })


