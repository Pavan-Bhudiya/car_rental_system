document.addEventListener('DOMContentLoaded', function() {
    const paymentMethod = document.getElementById('paymentmethod');
    const cardNumberField = document.getElementById('card-number');
    const bankAccountField = document.getElementById('bank-account');
    const mpesaField = document.getElementById('MPESA');
    const installmentsGroup = document.getElementById('installments-group');

    // Constant account number for bank transfer
    const bankAccountNumber = 'Transfer to account: 1234567890';
    // Constant phone number for MPESA
    const mpesaPhoneNumber = 'MPESA to: 0712345678';

    // Function to hide all fields
    function hideAllFields() {
        cardNumberField.style.display = 'none';
        bankAccountField.style.display = 'none';
        mpesaField.style.display = 'none';
        installmentsGroup.style.display = 'none';
    }

    paymentMethod.addEventListener('change', function() {
        const selectedMethod = paymentMethod.value;

        // Hide all fields first
        hideAllFields();

        // Display the corresponding field based on the selected method
        if (selectedMethod === 'card') {
            cardNumberField.style.display = 'block';
        } else if (selectedMethod === 'bank') {
            bankAccountField.style.display = 'block';
            bankAccountField.value = bankAccountNumber;
        } else if (selectedMethod === 'installments') {
            installmentsGroup.style.display = 'block';
        } else if (selectedMethod === 'MPESA') {
            mpesaField.style.display = 'block';
            mpesaField.value = mpesaPhoneNumber;
        }
    });

    // Redirect to contact.html when "Buy Now" is clicked
    document.querySelector('.buy-now').addEventListener('click', function() {
        alert('Booked successfully! Visit our contact page for pick-up station.');
        window.location.href = 'contact.html';
    });
});
