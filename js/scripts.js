// Business Logic
function PigGame() {
  this.roundScore = 0;
  this.playerScore = 0;
  this.cpuScore = 0;
  this.playerTurn = true;
}

function d6() {
  const array = [1,2,3,4,5,6];
  const shuffledArray = array.sort((a,b) => 0.5 - Math.random());
  return(shuffledArray[0]);
}

PigGame.prototype.scoreReader = function(game) {
  const x = d6();
  if (x === 1) {
    game.roundScore = 0;
    game.endRound(game);
  } else {
    game.roundScore += x;
  }
  const roundScoreIndicator = $("h3#roundScore");
  const scoreValue = "Score: " + game.roundScore;
  roundScoreIndicator.text(scoreValue);
}

function endGame() {
  document.getElementById("roll").disabled = true;
  document.getElementById("pass").disabled = true;
}

PigGame.prototype.endRound = function(game) {
  const turnIndicator = $("h2#turnIndicator");
  const winner = $("h1#winner");
  const roundScoreIndicator = $("h3#roundScore");
  if (game.playerTurn === true) {
    game.playerScore += game.roundScore;
    turnIndicator.text("Player2")
  } else if (game.playerTurn === false) {
    game.cpuScore += game.roundScore;
    turnIndicator.text("Player1")
  }
  game.roundScore = 0;
  const scoreValue = "Score: " + game.roundScore;
  roundScoreIndicator.text(scoreValue);
  game.scoreCard(game);
  if (game.playerScore >= 100) {
    winner.text("Winner Player1");
    endGame();
  }
  if (game.cpuScore >= 100) {
    winner.text("Winner Player2")
    endGame();
  }
  game.playerTurn = !game.playerTurn;
}

PigGame.prototype.scoreCard = function(game) {
  const score = $("h2#score");
  const scoreValue = "Player1: " + game.playerScore +" Player2 " + game.cpuScore;
  score.text(scoreValue);
}
// UI Logic
let game = new PigGame()
$(document).ready(function(event){
  document.getElementById("roll").onclick = function() {game.scoreReader(game)};
  document.getElementById("pass").onclick = function() {game.endRound(game)};
});