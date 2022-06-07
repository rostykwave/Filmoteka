const wrapperEl = document.querySelector('.loader-wrapper');
    const numberOfEls = 90;
    const duration = 5000;
    const delay = duration / numberOfEls;

    let tl = anime.timeline({
      duration: delay,
      autoplay: false,
      complete: function() { tl.restart(); }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const rotate = (360 / numberOfEls) * i;
      const translateY = -20;
      const hue = Math.round(360 / numberOfEls * i);
      el.classList.add('loader-el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 80%)';
      el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
      tl.add({
        begin: function() {
          anime({
            targets: el,
            backgroundColor: ['hsl(' + hue + ', 40%, 80%)', 'hsl(' + hue + ', 90%, 50%)'],
            rotate: [rotate + 'deg', rotate + 10 +'deg'],
            translateY: [translateY + '%', translateY + 10 + '%'],
            scale: [1, 1.2],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * .1
          });
        }
      });
      wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) {
        createEl(i)
    };


    //Запуск лоадера. Вместо этого setTimeout поставить addEventListener кнопки поиска фильмов
    setTimeout(() => {
        const elem = document.querySelectorAll('.loader-el');
        console.log('elem :>> ', elem);
        elem.forEach((element, i) => {
            const hue = Math.round(360 / numberOfEls * i);
            element.style.backgroundColor = 'hsl(' + hue + ', 40%, 80%)'
            
        });
        wrapperEl.classList.remove('loader-hidden')
        tl.restart();
        
    }, 0);
    
    //Остановка лоадера. Вместо этого setTimeout поставить на finaly когда отрисовалась разметка.
    // setTimeout(() => {
    //     wrapperEl.classList.add('loader-hidden')
    //     tl.pause();
    // }, 1700);