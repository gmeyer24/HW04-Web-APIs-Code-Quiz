document.addEventListener("DOMContentLoaded", function(){
    var highscoresList = document.getElementById("highscores-list");

    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b){
        // sort highest to lowest
        return b.score - a.score; 
    });

    highscores.forEach(function(scoreData){
        var listItem = document.createElement("li");
        listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
        highscoresList.appendChild(listItem);
    });

});