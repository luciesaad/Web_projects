var elMobSubscribe = document.getElementById('subscribeMobile');
var elMobEnter = document.getElementById('entermailMobile');
var elMobMsg = document.getElementById('feedbackMobile');
var elMobButton = document.getElementById('buttonMobile');

console.log('before event listener');

elMobEnter.addEventListener('blur', function (event) {
    event.preventDefault();
    isValid = elMobEnter.checkValidity();

    if (isValid) {
        elMobMsg.innerHTML='Thank you for subscription!';
        elMobButton.style.display="none";

    } else {
        elMobMsg.innerHTML='Enter a valid e-mail'
    }
});

elButton.addEventListener('click', function (event) {
    elSubscribe.submit();
});
