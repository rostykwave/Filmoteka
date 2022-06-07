export default function modalFooterGoITStudents(){
  console.log('HEllo frrm modalFooterGoITStudents');
}


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
  // delay: function(el, i) { return i * 200 },
  // scale: function(el, i) { return i * 1 },
  duration: 500, // Can be inherited
  // easing: 'easeOutExpo', // Can be inherited
  easing: 'spring',
  // translateY: function(el, i) { 
  //   return  anime.random(-10, -20) + 'rem';},

    translateY: function(el, i) {
      return el.getAttribute('data-y') + 'rem';
    },

  // translateX: function(el, i) { 
  //   return  anime.random(-15, 15) + 'rem';},
  scale: [0, 1.2],
  autoplay: false,
  // direction: 'alternate', // Is not inherited
  // loop: true, // Is not inherited
  opacity: 1,
  
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  // borderRadius: function() { return ['50%', anime.random(10, 135) + '%']; },
  // duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },


});