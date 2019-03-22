var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        myObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < myObject.events.length; i++) {
            newContent += '<div class="something"><hr id="separator">';
            newContent += '<p id="jsdate"><b>' + myObject.events[i].calDate + '</b> </p>';
            newContent += '<p id="jstime">' + myObject.events[i].time + '</p><br>';
            newContent += '<p id="jstext">' + myObject.events[i].text + '</p> </div>';

        }





        document.getElementById('upcomingEvents').innerHTML = newContent;

        }
    };

xhr.open('GET', 'json/calendarium.json', true);
xhr.send(null);