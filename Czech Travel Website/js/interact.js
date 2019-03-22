var elSubscribe = document.getElementById('subscribe');
var elEnter = document.getElementById('entermail');
var elMsg = document.getElementById('feedback');
var elButton = document.getElementById('button');

console.log('before event listener');

elEnter.addEventListener('blur', function (event) {
    event.preventDefault();
    isValid = elEnter.checkValidity();

    if (isValid) {
        elMsg.innerHTML='Thank you for subscription!';
        elButton.style.display="none";

    } else {
        elMsg.innerHTML='Enter a valid e-mail'
    }
});

elButton.addEventListener('click', function (event) {
    elSubscribe.submit();
});
