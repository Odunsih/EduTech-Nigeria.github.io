let confirmPassword = document.getElementById("confirmPassword");
let password = document.getElementById("password");
let username = document.getElementById("username");
let email = document.getElementById("email");

//function reg() {
  //  if (!username.value && email.value && password.value && confirmPassword.value)
    //    alert("please, fill in all the field");
//}


function reg() {
    if (password.value !== confirmPassword.value)
         alert("password does not match" );
    //else
    //alert("Successfully sign up");
    
}

const form = document.getElementById('reg');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('Registration Successful!');
});
