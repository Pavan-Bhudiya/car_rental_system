document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form input values
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.querySelector('#email').value;

    // Load existing users from local storage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Constructor function for user object
    function User(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email && user.username === username);
    if (!existingUser) {
        // Create new user object and add to users array
        let newUser = new User(email, username, password);
        users.push(newUser);

        // Save users array to local storage
        localStorage.setItem('users', JSON.stringify(users));

        alert("Account created successfully!");
        window.location.href = '/login/login.html';
    } else {
        alert(`${username} already exists`);
    }
});
