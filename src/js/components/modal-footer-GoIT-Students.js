import { refs } from '../getRefs';

document.querySelector('.footer-team-popup').onclick = function(e) {
  
  if(e.target.classList.contains('.cls-anime')){
    console.log("start animationR");
    animationR.restart();
  }
  else {
    animation.restart();
    }
    
  e.target.classList.toggle('.cls-anime');
}




const animation = anime({

  targets: '.footer-wrap .anime',
    duration: 500,
    easing: 'spring',
    translateY: [0, function(el, i) {
      return el.getAttribute('data-y') + 'px';
    }],
    scale: [0, 12],
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
      console.log("object123");
      return el.getAttribute('data-y') + 'px';
    }, 0],
    scale: [12, 0],
    autoplay: false,
    translateX: [function(el) {
      return el.getAttribute('data-x');
    }, 0],

    delay: function() { return anime.random(0, 400); },
});

const animationStop = anime({
  targets: '.footer-wrap .anime',
    scale: 0,
    autoplay: false,
    opacity: 0,
    
    
});


function hideAnimationStudents(){
  if (refs.spanToggle.classList.contains('.cls-anime')) {
    animationStop.restart();
    refs.spanToggle.classList.remove('.cls-anime');
  } 
}


export {hideAnimationStudents}







// function toggleStudents(reverse = false) {
//   console.log('reverse :>> ', reverse);
//   if (reverse) {
//     animation.reverse()
//   } else {
//     if (animation.began) {
//       animation.reverse()
      
//       if (animation.progress === 100 && animation.direction === 'reverse') {
//         animation.completed = false
//       }
//     }
  
//     if (animation.paused) {
//       animation.play()
//     }

//   }
// }




// const animation = anime({
//   targets: '.footer-wrap .anime',
//   duration: 500,
//   easing: 'spring',
//   translateY: [0, function(el, i) {
//     return el.getAttribute('data-y') + 'px';
//   }],

//   scale: [0, 12],
//   autoplay: false,
//   opacity: 1,
//   translateX: [0, function(el) {
//     return el.getAttribute('data-x');
//   }],
//   delay: function() { return anime.random(0, 400); },

  

// });


// export {animation, toggleStudents}







// const closeStudentOnBgClick = (e) => {
  // console.log('animation.progress :>> ', animation.progress);
  // console.log('animation.direction :>> ', animation.direction);
  // console.log('animation.paused :>> ', animation.paused);

//   e.preventDefault();
//   const isClickOnStudent = e.target.classList.contains("student");
//   const isClickOnText = e.target.classList.contains("footer-team-popup");

//   console.log('!isClickOnStudent :>> ', !isClickOnStudent);
//   console.log('isClickOnText :>> ', isClickOnText);
//   console.log('!isClickOnStudent || isClickOnText :>> ', !isClickOnStudent || isClickOnText);
  

//   if (animation.progress === 100) {
//     if (!isClickOnStudent) {
//       animation.reverse()
//     }
//   }
// };