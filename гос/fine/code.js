document.addEventListener('DOMContentLoaded', function() {
    const finesForm = document.getElementById('fines-form');
    const finesResults = document.getElementById('fines-results');

    finesForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        // Получаем данные из формы
        const gosNomer = document.getElementById('gos-nomer').value;
        const vuNumber = document.getElementById('vu').value;

        // Отправляем запрос на сервер (замените на ваш API)
        fetch('/api/check-fines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gosNomer: gosNomer,
                vuNumber: vuNumber
            })
        })
        .then(response => response.json())
        .then(data => {
            // Обрабатываем полученные данные
            if (data.success) {
                displayFines(data.fines);
            } else {
                finesResults.innerHTML = '<p>Штрафы не найдены.</p>';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            finesResults.innerHTML = '<p>Произошла ошибка при проверке штрафов.</p>';
        });
    });

    function displayFines(fines) {
        // Отображаем штрафы на странице
        let finesHtml = '<h3>Найденные штрафы:</h3><ul>';
        fines.forEach(fine => {
            finesHtml += `<li>
                             <strong>Номер постановления:</strong> ${fine.postanovlenie}<br>
                             <strong>Дата:</strong> ${fine.date}<br>
                             <strong>Сумма:</strong> ${fine.sum} руб.<br>
                             <strong>Статья:</strong> ${fine.article}<br>
                           </li>`;
        });
        finesHtml += '</ul>';
        finesResults.innerHTML = finesHtml;
    }
});
