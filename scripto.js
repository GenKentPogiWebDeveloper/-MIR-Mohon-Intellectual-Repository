// script.js
document.getElementById('passcode-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const passcode = document.getElementById('passcode').value;
    const errorMessage = document.getElementById('error-message');
    const validPasscode = 'CSS2024'; // Replace with your actual passcode

    if (passcode === validPasscode) {
        errorMessage.textContent = 'CORRECR!';
        errorMessage.style.color = 'green';
        window.location.href = 'index.htm';// Redirect or perform other actions upon success
    } else {
        errorMessage.textContent = 'Wrong Passcode!';
        errorMessage.style.color = 'red';
    }
});
