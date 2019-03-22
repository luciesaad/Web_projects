let testObserver = new MutationObserver(function () {

    let next = document.getElementById("testNext");
    let prev = document.getElementById("testPrev");
    let finish = document.getElementById("testFinish");
    let closeQuestion = document.getElementById("testClose");
    let warning = document.getElementById('testWarning');

    if (next) {
        next.addEventListener("click", function (e) {
            e.preventDefault();

            warning.innerHTML = '';
            if ($('input[name=answer]:checked').length > 0) {
                nextQuestion();
            }
            else{
                warning.innerHTML = "You have to select one of the options";
            }
        });
    }

    if (prev) {
        prev.addEventListener("click",  function (e) {
            e.preventDefault();
            prevQuestion();
        });
    }
    if (finish) {
        finish.addEventListener("click",  function (e) {
            e.preventDefault();

            if ($('input[name=answer]:checked').length > 0) {
                finishQuestion();
            }
            else{
                warning.innerHTML = "You have to select one";
            }
        });
    }
    if (closeQuestion) {
        closeQuestion.addEventListener("click", function (e) {
            e.preventDefault();
            closeModal();
        });
    }
});


let answers = [];

function answer(z) {
    answers[z] = $("input[type='radio'][name='answer']:checked").val();

    answers.push();
}

function nextQuestion() {
    let z = document.getElementById("questionCount").value;
    answer(z);

    z++;
    document.getElementById("questionCount").setAttribute('value', z);

    testModal(z);
    $('.testRadio').prop('checked', false);
}

function prevQuestion() {
    let z = document.getElementById("questionCount").value;
    z--;

    document.getElementById("questionCount").setAttribute('value', z);

    testModal(z);
}

function finishQuestion() {
    let z = document.getElementById("questionCount").value;
    answer(z);

    resultModal(answers);
}