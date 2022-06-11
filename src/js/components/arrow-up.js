'use strict';
const sttElem = document.querySelector('.stt'),
  screanHeight = window.innerHeight,
  sttScroll = function () {
    document.addEventListener('scroll', function (t) {
      //   console.log('screanHeight:>> ', screanHeight);
      //   console.log(' window.scrollY :>> ', window.scrollY);
      const scrollValue = screanHeight + window.scrollY - 200;
      //   console.log('scrollValue :>> ', scrollValue);
      screanHeight <= scrollValue
        ? sttElem.classList.add('stt__active')
        : t.target.scrollingElement.scrollTop <= screanHeight &&
          (sttElem.classList.remove('stt__active'), (sttElem.style.pointerEvents = 'auto'));
    });
  },
  sttClick = function () {
    sttElem.addEventListener('click', onPageUp);
  },
  onPageUp = function () {
    let t = window.scrollY,
      e = 0,
      n = t;
    sttElem.style.pointerEvents = 'none';
    requestAnimationFrame(function t() {
      (n -= 5 * (e += 1)), window.scrollTo(0, n), n > 0 && requestAnimationFrame(t);
    });
  },
  sttFunc = function () {
    sttScroll(), sttClick();
  };
document.addEventListener('DOMContentLoaded', sttFunc);
