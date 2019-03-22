let btn = document.getElementsByClassName("modalButton");
let closeBtn = document.getElementById("closeBtn");


closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", loadModal);
}


function loadModal() {
    let id = this.id;
    let newContent = '';

    if (id == 'subscribe') {
        newContent += '<h1>Prenumerera på vårat nyhetsbrev</h1>';
        newContent += '<p id="subscribeText">Få de senaste nyheterna från oss på Campus mölndal och missa inget av det roliga</p>';
        newContent += '<hr/>';
        newContent += '<form method="post" id="subscribeForm">';
        newContent += '<input required type="email" id="subscriberEmail" name="subscriberEmail" placeholder="Din email:" />';
        newContent += '<p id="submitedText">Ange din email</p>';
        newContent += '<input type="submit" value="Send" id="subscribeSubmit" />';
        newContent += '</form>';


        document.getElementById('modal-update').innerHTML = newContent;

        openModal();
    }
    else if (id == 'test') {

        newContent += '<form id="testForm">';
        newContent += '<input type="hidden" id="questionCount" value="' + 0 + '">';
        newContent += '<img id="testImage">';
        newContent += '<p id="testQuestion"></p>';
        newContent += '<div class="radioBtn"><input type="radio" name="answer" class="testRadio" value="1"><label id="testOption1"></label></div>';
        newContent += '<div class="radioBtn"><input type="radio" name="answer" class="testRadio" value="2"><label id="testOption2"></label></div>';
        newContent += '<div class="radioBtn"><input type="radio" name="answer" class="testRadio" value="3"><label id="testOption3"></label></div>';
        newContent += '<div id="testButtons"></div>';
        newContent += '<p id="testWarning"></p>';
        newContent += '</form>';

        document.getElementById('modal-update').innerHTML = newContent;

        testModal(0);
    }
}

function testModal(x) {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            let newContent = '';

            document.getElementById("testImage").src=data.questions[x].image;
            document.getElementById('testQuestion').innerHTML = data.questions[x].question;
            document.getElementById('testOption1').innerHTML = data.questions[x].option1;
            document.getElementById('testOption2').innerHTML = data.questions[x].option2;
            document.getElementById('testOption3').innerHTML = data.questions[x].option3;


            if (x == 3) {
                newContent += '<input type="submit" value="Förra" id="testPrev">';
                newContent += '<input type="submit" value="Avsluta" id="testFinish">';
            }
            else {
                newContent += '<input type="submit" value="Förra" id="testPrev">';
                newContent += '<input type="submit" value="Nästa" id="testNext">';
            }


            document.getElementById('testButtons').innerHTML = newContent;


        }
    };
    xhr.open('GET', 'json/questions.json', true);
    xhr.send(null);

    openModal();
}

function resultModal(answers) {
    let newContent = '';

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            let checkAnswer = answers;
            let z;

            if (checkAnswer[0] == 3) {
                if (checkAnswer[3] == 3)
                //Studievägledare
                {z = 4;}
                //LSS
                else {z = 3;}
            }

            // IT- Projektledare
            if (checkAnswer[0] == 2){z = 2;}

            if (checkAnswer[0] == 1) {
                if (checkAnswer[1] == 3)
                //Moln och Server
                {z = 1;}
                //Java och Webb
                else {z = 0;}
            }
            else {z = 5}

            newContent += '<form id="testForm">';
            newContent += '<img src="' + data.result[z].image + '"' +
                ' alt="' + data.result[z].title + '"' +
                ' id="testImage"/>';

            newContent += '<h2 id="resultTitle">' +  data.result[z].title  + '</h2>';
            newContent += '<p id="resultText">' +  data.result[z].text  + '</p>';
            newContent += '<input type="submit" value="Stäng" id="testClose">';
            newContent += '</form>';


            document.getElementById('modal-update').innerHTML = newContent;
        }
    };

    xhr.open('GET', 'json/result.json', true);
    xhr.send(null);

}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function closeOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}
