document.querySelector('.footer-team-popup').onclick = function() {
  toggle();
}

function toggle() {
  
  if (animation.began) {
    animation.reverse()
    
    if (animation.progress === 100 && animation.direction === 'reverse') {
      animation.completed = false
    }
  }

  if (animation.paused) {
    animation.play()
  }
}

const animation = anime({
  targets: '.footer-wrap .anime',
  duration: 500,
  easing: 'spring',
  translateY: [0, function(el, i) {
    return el.getAttribute('data-y') + 'px';
  }],

  scale: [0, 1.2],
  autoplay: false,
  opacity: 1,

  translateX: [0, function(el) {
    return el.getAttribute('data-x');
  }],
  delay: function() { return anime.random(0, 400); },


});