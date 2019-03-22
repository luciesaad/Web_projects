var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < responseObject.taxis.length; i++) {
            newContent += '<div class="event">';
            newContent += '<p class="taxiname"><b>' + responseObject.taxis[i].name + '</b><br>';
            newContent += '<p class="taxiprice"><b>' + responseObject.taxis[i].price + ' / km' + '</b><br>';
            newContent += '</div>';
        }

        document.getElementById('content').innerHTML = newContent;

    }
};

xhr.open('GET', 'data/taxi.json', true);
xhr.send(null);