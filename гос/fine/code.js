// Update total payment amount dynamically
const checkboxes = document.querySelectorAll('.fine-checkbox');
const paymentAmountElement = document.querySelector('.summary p:nth-child(3)');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let totalAmount = 0;

        checkboxes.forEach(cb => {
            if (cb.checked) {
                const fineRow = cb.closest('tr');
                totalAmount += parseInt(fineRow.dataset.amount, 10);
            }
        });

        paymentAmountElement.textContent = `${totalAmount},00 ₽ — Оплатить все`;
    });
});

// Pay All functionality
document.getElementById('pay-all').addEventListener('click', () => {
    alert('Оплата всех штрафов выполнена!');
    
    checkboxes.forEach(cb => cb.checked = true);
});

// Export functionality
document.getElementById('export-csv').addEventListener('click', () => {
    alert('Экспорт в CSV выполнен!');
});

document.getElementById('export-excel').addEventListener('click', () => {
    alert('Экспорт в Excel выполнен!');
});

// Filters functionality
document.querySelectorAll('.filters input[type=checkbox]').forEach(filterCheckbox => {
    filterCheckbox.addEventListener('change', () => {
        const statusFilter = filterCheckbox.id.replace('filter-', '');

        document.querySelectorAll('#fines-table tr').forEach(row => {
            if (filterCheckbox.checked && row.dataset.status !== statusFilter) {
                row.style.display = 'none';
            } else if (!filterCheckbox.checked) {
                row.style.display = '';
            }
        });
    });
});
