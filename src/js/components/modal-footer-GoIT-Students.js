export default function modalFooterGoITStudents(){
    console.log('HEllo frrm modalFooterGoITStudents');
}



// import anime from './node_modules/animejs/lib/anime.es.js';



document.querySelector('.team-popup').onclick = function() {
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
    delay: function(el, i) { return i * 200 },
    // scale: function(el, i) { return i * 1 },
    duration: 500, // Can be inherited
    // easing: 'easeOutExpo', // Can be inherited
    easing: 'spring',
    translateY: function(el, i) { 
      return  anime.random(-10, -20) + 'rem';},
    translateX: function(el, i) { 
      return  anime.random(-15, 15) + 'rem';},
    scale: [0, 2],
    autoplay: false,
    // direction: 'alternate', // Is not inherited
    // loop: true, // Is not inherited
    opacity: 1,
    
  });