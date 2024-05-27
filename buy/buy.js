window.addEventListener('scroll', () => {
    const carTables = document.querySelectorAll('.car-table');

    carTables.forEach(carTable => {
        const tablePosition = carTable.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (tablePosition < screenPosition) {
            carTable.classList.add('show');
        } else {
            carTable.classList.remove('show');
        }
    });
});
