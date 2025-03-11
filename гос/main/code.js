var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Количество видимых слайдов
  spaceBetween: 30, // Расстояние между слайдами в пикселях
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  loop: true, // Бесконечная прокрутка
});







