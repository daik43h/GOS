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





// Находим все изображения и модальные окна
const images = document.querySelectorAll('.category_img');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Открытие модального окна
images.forEach(img => {
  img.addEventListener('click', () => {
    const modalId = img.dataset.modal; 
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Закрытие модального окна
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal; 
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  });
});

// Закрытие при клике на фон
modals.forEach(modal => {
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


function showModal(icon) {
  // Делаем иконку белой
  icon.classList.toggle('active');

  // Показать или скрыть модальное окно
  var modal = document.getElementById('modal');
  if (modal.style.display === 'flex') {
      modal.style.display = 'none';
  } else {
      modal.style.display = 'flex';
  }
}


