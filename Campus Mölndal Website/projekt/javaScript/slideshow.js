$(document).ready(function () {
    let updateSlide = '';

    updateSlide += '<input type="hidden" id="slideCount" value="' + 0 + '">';
    updateSlide += '<img src="" class="img-slide" id="slideImg">';
    updateSlide += '<div class="slide-text">';
    updateSlide += '<h1 id="slideTitle"></h1>';
    updateSlide += '<a class="prev" onclick="prevSlide()">&#10094;</a>'
    updateSlide += '<a class="next" onclick="nextSlide()">&#10095;</a>'
    updateSlide += '<p id="slideText1"></p>';
    updateSlide += '<p id="slideText2"></p>';


    document.getElementById('slideUpdate').innerHTML = updateSlide;

    changeSlide(0);
});

let timer = null;

function currentValue() {

    let m = document.getElementById("slideCount").value;
    return m;
}
function nextSlide() {
    let m = currentValue();
    if(m == '4') {
        m = -1;
    }
    m++;

    document.getElementById("slideCount").setAttribute('value', m);

    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[m].className += " active";

    clearTimeout(timer);
    changeSlide(m);
}

function prevSlide() {
    let m = currentValue();
    if(m == '0') {
        m = 5;
    }
    m--;

    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[m].className += " active";

    document.getElementById("slideCount").setAttribute('value', m);

    clearTimeout(timer);
    changeSlide(m);
}

function changeSlide(y) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            document.getElementById("slideImg").src = data.slides[y].image;
            document.getElementById('slideTitle').innerHTML = data.slides[y].title;
            document.getElementById('slideText1').innerHTML = data.slides[y].text1;
            document.getElementById('slideText2').innerHTML = data.slides[y].text2;
        }
    };
    xhr.open('GET', 'json/slides.json', true);
    xhr.send(null);

    timer = setTimeout(nextSlide, 5000);
}