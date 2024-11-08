


const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Show success message using popup
        showPopup('Login Successful');
        
        // Delay the redirection so the user can see the message
        setTimeout(() => {
            window.location.href = "homepage.html"; // Redirect to the dashboard page
        }, 2000); // Adjust the time as needed (2000ms = 2 seconds)
        
    } else {
        // Show error message using popup
        showPopup('Invalid email or password. Please try again.');
    }
});

// Popup function for displaying messages
function showPopup(message) {
    document.getElementById("popupText").textContent = message;
    document.getElementById("popupMessage").classList.remove("hidden");

    // Hide the popup automatically after 3 seconds
    setTimeout(closePopup, 300000);
}

function closePopup() {
    document.getElementById("popupMessage").classList.add("hidden");
}

