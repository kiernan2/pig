// Business Logic
let roundScore = 0;
let playerScore = 0;
let cpuScore = 0;
let playerTurn = true;
let gameRuning = true;
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
  const roundScoreIndicator = $("h3#roundScore");
  const scoreValue = "Score: " + roundScore;
  roundScoreIndicator.text(scoreValue);
}

function endGame() {
  document.getElementById("roll").disabled = true;
  document.getElementById("pass").disabled = true;
}

function endRound() {
  
  const turnIndicator = $("h2#turnIndicator");
  const winner = $("h1#winner");
  const roundScoreIndicator = $("h3#roundScore");
  if (playerTurn === true) {
    playerScore += roundScore;
    turnIndicator.text("Player2")
  } else if (playerTurn === false) {
    cpuScore += roundScore;
    turnIndicator.text("Player1")
  }
  roundScore = 0;
  const scoreValue = "Score: " + roundScore;
  roundScoreIndicator.text(scoreValue);
  scoreCard(playerTurn, cpuScore);
  if (playerScore >= 100) {
    winner.text("Winner Player1");
    endGame();
  }
  if (cpuScore >= 100) {
    winner.text("Winner Player2")
    endGame();
  }
  playerTurn = !playerTurn;
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