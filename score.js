// Iteration 5: Store the player score and display it on the game over screen

var scoreboard = document.getElementById("score-board")

let score2 = localStorage.getItem("score")

scoreboard.innerHTML = score2


var playagain = document.getElementById("play-again-button")

playagain.onclick = function(){

location.href="game.html"

}