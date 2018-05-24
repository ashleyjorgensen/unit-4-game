
var diamondPoints = 1;
var emeraldPoints = 4;
var rubyPoints = 6;
var sapphirePoints = 10;
var myPoints = 0;
var gameNumber = 120;
var win = 0;
var lose = 0;

function startGame()
{
    diamondPoints = parseInt(Math.random() * 12) + 1;
    emeraldPoints = parseInt(Math.random() * 12) + 1;
    rubyPoints = parseInt(Math.random() * 12) + 1;
    sapphirePoints = parseInt(Math.random() * 12) + 1;
    myPoints = 0;
    gameNumber = parseInt(Math.random() * 102) + 19;
    $("#score").html(myPoints);
    $("#gameNumber").html(gameNumber);
}

function updateGame()
{
    
    if (myPoints == gameNumber) {
        win = win + 1;
        startGame();
    }
    else if(myPoints > gameNumber) {
        lose = lose +1;
        startGame();
    }

    $("#score").html(myPoints);
    $("#win").html("Win: " + win);
    $("#lose").html("Lose: " + lose);
}


$(document).ready(function() {
    startGame();

    $("#diamond").click(function() {
        myPoints = diamondPoints + myPoints;
        updateGame();
    });

    $("#emerald").click(function() {
        myPoints = emeraldPoints + myPoints;   
        updateGame();
    });

    $("#ruby").click(function() {
        myPoints = rubyPoints + myPoints;   
        updateGame();
    });

    $("#sapphire").click(function() {
        myPoints = sapphirePoints + myPoints;   
        updateGame();
    });

});
