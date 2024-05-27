document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users'));
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const existingUser = users.find(user => user.email === email && user.password === password);

        if(existingUser) {
            if(existingUser.password === password){
                alert(`${existingUser.username} Logged in successfully`);
                window.location.href = '/dashboard/dashboard.html';
            } else {
                alert("Invalid email or password");
            }
        }  
        else {
            alert("This account is not yet registered");
        }
    });
});
