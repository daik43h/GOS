document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentDiv = document.querySelector('.content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const contentType = this.dataset.content;
            let content = '';

            switch (contentType) {
                case 'obzor':
                    content = '<h2>Обзор</h2><p>Информация об обзоре личного кабинета.</p>';
                    break;
                case 'notifications':
                    content = '<h2>Уведомления</h2><p>Здесь будут ваши уведомления.</p>';
                    break;
                case 'documents':
                    content = '<h2>Документы</h2><p>Ваши документы.</p>';
                    break;
                case 'payment':
                    content = '<h2>Карты оплаты</h2><p>Информация о ваших картах.</p>';
                    break;
                case 'settings':
                    content = '<h2>Настройки</h2>';
                    break;
                default:
                    content = '<p>Выберите раздел.</p>';
            }

            contentDiv.innerHTML = content;
        });
    });
});
