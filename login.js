const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login Successful');
        window.location.href = "homepage.html"; // Redirect to the dashboard page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
