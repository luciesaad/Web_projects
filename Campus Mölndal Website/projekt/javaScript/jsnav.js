window.onload=function() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

        mainNav.classList.toggle('active');
    });
};


$('body').on('click',function(event){
    if(!$(event.target).is('.searchOpen')) {
        var y = document.getElementById("my-search-Dropdown");
        y.style.display = "none";
    }
});
$('body').on('click',function(event){
    if(!$(event.target).is('.navChange')) {

        document.getElementById("mySidenav").style.width = "0";
        document.getElementsByClassName("logo1")[0].style.marginRight = "0";
    }
});


function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function openNav() {

    document.getElementById("mySidenav").style.width = "350px";
    document.getElementsByClassName("logo1")[0].style.marginRight = "350px";
}

function closeNav() {

    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("logo1")[0].style.marginRight = "0";
}

function mysearchFunction() {
    var y = document.getElementById("my-search-Dropdown");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

/*
function mysearchFunction() {
    document.getElementById("my-search-Dropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('#myInput1' || '.dropdown-search-content1')) {

        var dropdowns = document.getElementsByClassName(".dropdown-search-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("my-search-Dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
//
function mysearchFunction1() {
    var z = document.getElementById("my-search-Dropdown1");
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
}



function filterFunction1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    div = document.getElementById("my-search-Dropdown1");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
