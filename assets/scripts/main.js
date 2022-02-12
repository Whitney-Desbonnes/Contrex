// changer de bloc header
let bloc1 = document.querySelector('.bloc1');
let bloc2 = document.querySelector('.bloc2');

function changeBloc () {
    if (window.innerWidth >= 768) {
        bloc1.classList.remove('hidden');
        bloc2.classList.add('hidden');

    }
    else if (window.innerWidth <= 768) {
        bloc1.classList.add('hidden');
        bloc2.classList.remove('hidden');

    }
}
window.addEventListener('resize', changeBloc);
window.addEventListener('load', changeBloc);


// swiper
let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

// swiper off
let swiperSlide = document.querySelectorAll('.swiper-slide');

function resizeSwiper () {
    if (window.innerWidth >= 768) {
        for (i=0; i < swiperSlide.length; i++) {
            swiperSlide[i].classList.remove('swiper-slide');
            swiperSlide[i].classList.add('swiper-slide--off');
        }
    }
    else if (window.innerWidth <= 767) {
        for (i=0; i < swiperSlide.length; i++) {
            swiperSlide[i].classList.add('swiper-slide');
            swiperSlide[i].classList.remove('swiper-slide--off');
        }
    }
}
window.addEventListener('resize', resizeSwiper);
window.addEventListener('load', resizeSwiper);