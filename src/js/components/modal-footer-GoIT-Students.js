import { refs } from '../getRefs';

const animeElArray = [...refs.animeEl];


document.querySelector('.footer-team-popup').onclick = function(e) {
  refs.spanToggle.classList.toggle('cls-anime');

  if(refs.spanToggle.classList.contains('cls-anime')){
    animationStudentsStart();
  }
  else {
    animationStudentsReverse();
    }
}

function animationStudentsStart() {
  animation.restart();
  animeElArray.map(el => el.classList.remove('anime-pointer-off'));
  animeElArray.map(el => el.classList.add('anime-pointer-on'));

  setTimeout(() => {
    refs.body.addEventListener('click', closeStudentsOnWrongClick);
  }, 10);
}

function animationStudentsReverse() {
  animationR.restart();
  animeElArray.map(el => el.classList.remove('anime-pointer-on'));
  animeElArray.map(el => el.classList.add('anime-pointer-off'));
  
}

function closeStudentsOnWrongClick(e) {
  
  if (refs.spanToggle.classList.contains('cls-anime')) {
    
    if (!e.target.classList.contains('student')){
      animationStudentsReverse();
      refs.spanToggle.classList.remove('cls-anime');
      refs.body.removeEventListener('click', closeStudentsOnWrongClick);
    }

  } else {
    refs.body.removeEventListener('click', closeStudentsOnWrongClick);
  }
  
}

const animation = anime({
  targets: '.footer-wrap .anime',
    duration: 500,
    easing: 'spring',
    translateY: [0, function(el, i) {
      return el.getAttribute('data-y') + 'px';
    }],
    scale: [0, 20],
    autoplay: false,
    opacity: 1,
    translateX: [0, function(el) {
      return el.getAttribute('data-x');
    }],
    delay: function() { return anime.random(400, 0); },
});

const animationR = anime({
  targets: '.footer-wrap .anime',
    duration: 500,
    easing: 'spring',
    translateY: [function(el, i) {
      return el.getAttribute('data-y') + 'px';
    }, 0],
    scale: [20, 0],
    autoplay: false,
    translateX: [function(el) {
      return el.getAttribute('data-x');
    }, 0],
    delay: function() { return anime.random(0, 400); },
});
