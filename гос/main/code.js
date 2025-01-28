document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let slideWidth = slides[0].offsetWidth + 20; // Ширина слайдов + отступ
    let position = 0; // Начальная позиция
    let isTransitioning = false;

    // Клонируем первый и последний слайды
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    // Обновляем положение
    position = -slideWidth;
    track.style.transform = `translateX(${position}px)`;
    

    // Обработчики кнопок
    nextButton.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        position -= slideWidth;
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(${position}px)`;

        track.addEventListener(
            'transitionend',
            () => {
                isTransitioning = false;

                if (Math.abs(position) >= slideWidth * slides.length) {
                    track.style.transition = 'none';
                    position = -slideWidth; // Возвращаемся к первому реальному слайду
                    track.style.transform = `translateX(${position}px)`;
                }
            },
            { once: true }
        );
    });

    prevButton.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        position += slideWidth;
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(${position}px)`;

        track.addEventListener(
            'transitionend',
            () => {
                isTransitioning = false;

                if (position === 0) {
                    track.style.transition = 'none';
                    position = -slideWidth * slides.length; // Возвращаемся к последнему реальному слайду
                    track.style.transform = `translateX(${position}px)`;
                }
            },
            { once: true }
        );
    });

    // Обновляем размеры при изменении ширины экрана
    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth + 20; 
        position = -slideWidth;
        track.style.transition = 'none';
        track.style.transform = `translateX(${position}px)`;
    });
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


