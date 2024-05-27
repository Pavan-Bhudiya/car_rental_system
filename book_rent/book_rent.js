document.addEventListener('DOMContentLoaded', function () {
    const rentOption = document.getElementById('rent-option');
    const dayOption = document.getElementById('day-option');
    const weekOption = document.getElementById('week-option');
    const monthOption = document.getElementById('month-option');
    const paymentMethod = document.getElementById('payment-method');
    const cardInfo = document.getElementById('card-info');
    const bankInfo = document.getElementById('bank-info');
    const totalCost = document.getElementById('total-cost');
    const form = document.getElementById('booking-form');
    const calculateButton = document.querySelector('.book-now-button[type="submit"]');

    rentOption.addEventListener('change', function () {
        const selectedOption = this.value;
        dayOption.classList.add('hidden');
        weekOption.classList.add('hidden');
        monthOption.classList.add('hidden');

        if (selectedOption === 'day') {
            dayOption.classList.remove('hidden');
        } else if (selectedOption === 'week') {
            weekOption.classList.remove('hidden');
        } else if (selectedOption === 'month') {
            monthOption.classList.remove('hidden');
        }
    });

    paymentMethod.addEventListener('change', function () {
        const selectedMethod = this.value;
        cardInfo.classList.add('hidden');
        bankInfo.classList.add('hidden');

        if (selectedMethod === 'card') {
            cardInfo.classList.remove('hidden');
        } else if (selectedMethod === 'bank-transfer') {
            bankInfo.classList.remove('hidden');
        }
    });

    calculateButton.addEventListener('click', function (e) {
        e.preventDefault();
        const rentOption = document.getElementById('rent-option').value;
        let amount = parseFloat(document.getElementById('amount').value);
        let total = 0;

        if (rentOption === 'day') {
            const days = document.getElementById('days').value;
            total = amount * days;
        } else if (rentOption === 'week') {
            const weeks = document.getElementById('weeks').value;
            total = amount * weeks;
        } else if (rentOption === 'month') {
            const months = document.getElementById('months').value;
            total = amount * months;
        }

        totalCost.innerText = `Total Cost: $${total.toFixed(2)}`;
    });

    document.getElementById('book-now').addEventListener('click', function () {
        alert('Booked successfully! Collect your car from the nearest picking station.');
    });
});
