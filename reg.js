

let confirmPassword = document.getElementById("confirmPassword");
let password = document.getElementById("password");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
const form = document.getElementById('reg');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if all fields are filled
    if (!firstname.value || !lastname.value || !email.value || !password.value || !confirmPassword.value) {
        showPopup("Please fill in all the fields");
        return;
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        showPopup("Passwords do not match");
        return;
    }

    // Save user data in localStorage
    const user = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    
    showPopup("Registration Successful!");

    // Redirect to login after 2 seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
});

// Popup function for displaying messages
function showPopup(message) {
    document.getElementById("popupText").textContent = message;
    document.getElementById("popupMessage").classList.remove("hidden");

    // Hide the popup automatically after 3 seconds
    setTimeout(closePopup, 3000);
}

function closePopup() {
    document.getElementById("popupMessage").classList.add("hidden");
}
