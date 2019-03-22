if (Modernizr.localstorage) {

    var elUsername = document.getElementById('username'); // Get form elements
    var elThoughts = document.getElementById('thoughts');
    var elCountry = document.getElementById('country');

    elUsername.value = localStorage.getItem('username');  // Elements populated
    elThoughts.value = localStorage.getItem('thoughts');      // by localStorage data
    elCountry.value = localStorage.getItem('country');


    elUsername.addEventListener('input', function () {    // Data saved on keyup
        localStorage.setItem('username', elUsername.value);
    }, false);

    elThoughts.addEventListener('input', function () {      // Data saved on keyup
        localStorage.setItem('thoughts', elThoughts.value);
    }, false);

    elCountry.addEventListener('input', function () {    // Data saved on keyup
        localStorage.setItem('country', elCountry.value);
    }, false);
}