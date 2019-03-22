$(document).ready(function () {

    let target = document.getElementById('modal-update');
    let config = {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    };

    observer.observe(target, config);
    testObserver.observe(target, config);
});

let observer = new MutationObserver(function () {
    let submit = document.getElementById("subscribeSubmit");

    if(submit){
        submit.addEventListener("click", function (e) {
            e.preventDefault();
            subscribe();
        });
    }
});



function subscribe() {
    let formData = $('#subscribeForm').serialize();

    $.ajax({
        type: "POST",
        url: "php/subscribe.php",
        data: formData
    }).done(function () {
        $('#subscriberEmail').val('');
        document.getElementById('submitedText').innerHTML = ('Du har blivit tillagd');

    });
}