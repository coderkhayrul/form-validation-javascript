const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Error Outline Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}
// Show Success Outline Message
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Check Email Is Valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Event Listen
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Username
    if (username.value === '') {
        showError(username,'Username Is Required');
    } else {
        showSuccess(username);
    }

    // Email
    if (email.value === '') {
        showError(email,'Email Is Required');
    }
    else if (!isValidEmail(email.value)){
        showError(email,'Email Is Not Valid');
    }else {
        showSuccess(email);
    }

    // Password
    if (password.value === '') {
        showError(password,'Password Is Required');
    } else {
        showSuccess(password);
    }

    // Confirm Password
    if (password2.value === '') {
        showError(password2,'Password Is Required');
    } else {
        showSuccess(password2);
    }
});