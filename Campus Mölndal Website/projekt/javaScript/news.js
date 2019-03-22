let xmlhttp, data, url, newContent = "";
let newsSection = document.getElementById("newsSection");
let newsSite = document.getElementById("newsSite");



xmlhttp = new XMLHttpRequest();
url = 'php/news.php';


xmlhttp.open("GET", url , true);
xmlhttp.send();

xmlhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);

        //News site
        if(newsSite) {

            for (let y in data) {

                newContent += '<article class="newsArticle">';
                newContent += '<div class="newsImageContainer">';
                newContent += '<img src="' + data[y].ArticleImage + '" ';
                newContent += 'alt="' + data[y].ArticleTitle + '" ';
                newContent += 'class="newsImage"/>';
                newContent += '</div>';
                newContent += '<div class="newsContentContainer">';
                newContent += '<h3 class="newsTitle">' + data[y].ArticleTitle + '</h3>';

                if (data[y].ArticleText.length > 500) {

                    let articleText = data[y].ArticleText.substr(0, 500);
                    articleText = articleText.substr(0, Math.min(articleText.length, articleText.lastIndexOf(" ")));
                    let readMore = data[y].ArticleText;

                    articleText = articleText + '...';
                    newContent += '<p class="newsText newsTextFade">' + articleText + '</p>';
                    newContent += '<input type="button" value="Read more" class="readMoreBtn"></input>';
                    newContent += '<p class="readMoreText">' + readMore + '</p>';
                }
                else {
                    let articleText = data[y].ArticleText;
                    newContent += '<p class="newsOnlyText">' + articleText + '</p>';
                }
                newContent += '</div>';
                newContent += '</article>';

            }
            document.getElementById("newsSite").innerHTML = newContent;
        }

        //NewsSection
        if(newsSection){

            for (let x = 0; x < 3; x++)
            {
                newContent += '<article class="newsArticle">';
                newContent += '<img src="' + data[x].ArticleImage + '" ';
                newContent += 'alt="' + data[x].ArticleTitle + '" ';
                newContent += 'class="newsImage"/>';
                newContent += '<h3 class="newsTitle">' + data[x].ArticleTitle+'</h3>';
                if(data[x].ArticleText.length > 100) {

                    let articleText = data[x].ArticleText.substr(0,100);
                    articleText = articleText.substr(0, Math.min(articleText.length, articleText.lastIndexOf(" ")));
                    let readMore = data[x].ArticleText;

                    newContent += '<p class="newsText newsTextFade" id="newsText' + x + '" >' + articleText + '</p>';
                    newContent += '<p class="readMoreText" id="readMore' + x + '" >' + readMore + '</p>';
                    newContent += '<input type="button" value="Read more" class="readMoreBtn" id="newsBtn' + x + '"></input>';


                }
                else{
                    newContent += '<p class="newsText">' + data[x].ArticleText+'</p>';
                }

                newContent += '</article>';

                document.getElementById("newsSection").innerHTML = newContent;
            }
        }

    }

};

setTimeout(function () {
    let readMore = document.getElementsByClassName("readMoreBtn");
    let text = document.getElementsByClassName("readMoreBtn");

    for (let l = 0; l < readMore.length; l++) {
        let x = document.getElementsByClassName("readMoreText");
        let y = document.getElementsByClassName("newsText");

        readMore[l].addEventListener("click", function () {


            if (x[l].style.display === 'inline') {

                text[l].value = "Read more";
                x[l].style.display = 'none';
                y[l].style.display = 'inline';
            }
            else {

                text[l].value = "Close";
                x[l].style.display = 'inline';
                y[l].style.display = 'none';
            }
        });

    }
},1000);



