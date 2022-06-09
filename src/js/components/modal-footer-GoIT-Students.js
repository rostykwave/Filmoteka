document.querySelector('.footer-team-popup').onclick = function() {
  toggleStudents();
}


function toggleStudents() {
    
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

  scale: [0, 12],
  autoplay: false,
  opacity: 1,
  translateX: [0, function(el) {
    return el.getAttribute('data-x');
  }],
  delay: function() { return anime.random(0, 400); },


});




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