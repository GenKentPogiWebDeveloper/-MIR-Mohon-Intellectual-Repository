// script.js
document.getElementById('passcode-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const passcode = document.getElementById('passcode').value;
    const errorMessage = document.getElementById('error-message');
    const validPasscode = 'kentpogi'; // Replace with your actual passcode

    if (passcode === validPasscode) {
        errorMessage.textContent = 'way kiss? haha!';
        errorMessage.style.color = 'green';
        window.location.href = 'index.htm';// Redirect or perform other actions upon success
    } else {
        errorMessage.textContent = 'Wrong pangayo password ni Genkent Pagnanawon on fb';
        errorMessage.style.color = 'red';
    }
});
