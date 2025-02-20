// Здесь может быть ваш JavaScript-код.
// Например, для обработки событий, анимации,
// или динамического изменения контента.

// Пример: Добавление обработчика клика на вопросы FAQ
const faqItems = document.querySelectorAll('.faq li');

faqItems.forEach(item => {
    item.addEventListener('click', function() {
        // Добавьте логику для разворачивания/сворачивания ответа
        // Например, добавлять/удалять класс 'active' для показа/скрытия ответа
        console.log('Клик по вопросу: ' + this.textContent);
    });
});

