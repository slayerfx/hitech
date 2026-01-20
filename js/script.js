// On initialise d'abord les miniatures (le petit en bas)
var swiperThumbs = new Swiper(".thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 5, // Affiche les 5 petites images
  freeMode: true,
  watchSlidesProgress: true,
});
// On initialise le grand et on lui dit que ses "thumbs" sont dans swiperThumbs
var swiperMain = new Swiper(".main-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});
