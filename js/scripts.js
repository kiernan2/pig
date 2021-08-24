// Business Logic
let roundScore = 0;
let playerScore = 0;
let cpuScore = 0;
let playerTurn = true;

function d6() {
  const array = [1,2,3,4,5,6];
  const shuffledArray = array.sort((a,b) => 0.5 - Math.random());
  return(shuffledArray[0]);
}

function scoreReader(x) {
  if (x === 1) {
    roundScore = 0;
    endRound();
  } else {
    roundScore += x;
  }
  const score = $("h3#roundScore");
  const scoreValue = "Score: " + roundScore;
  score.text(scoreValue);
}

function endRound() {
  const turnIndicator = $("h2#turnIndicator")
  if (playerTurn === true) {
    playerScore += roundScore;
    turnIndicator.text("Player2")
  } else {
    cpuScore += roundScore;
    turnIndicator.text("Player1")
  }
  scoreCard(playerTurn, cpuScore);
  playerTurn = !playerTurn;
  roundScore = 0;
}

function scoreCard() {
  const score = $("h2#score");
  const scoreValue = "Player1: " + playerScore +" Player2 " + cpuScore;
  score.text(scoreValue);
}

// UI Logic
$(document).ready(function(event){
  document.getElementById("roll").onclick = function() {scoreReader(d6())};
  document.getElementById("pass").onclick = function() {endRound()};
});