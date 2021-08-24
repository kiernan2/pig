Descride d6();

Test: this function should always return a number between one and six

Describe scoreReader();

Test: If the result is 1 end round
Code: scoreReader(1);
Output: roundScore = 0; endRound();

Test: if the result is above one add to round score
Code: scoreReader(2);
Output: roundScore += 2;

Code: scoreReader(6);
Output: roundScore += 6;

Describe endRound();

Code: endRound();

Test: If playerTurn equals true set player turn equal false
Output: playerTurn = false
playerScore += roundScore;
Test: if playerTurn equals false that player turned equal true
Output: playerTurn = true
cpuScore += roundScore;

Describe scoreCard(playerScore, cpuScore);
Test: if either score is above or equal to 100, print both scores

Code: scoreCard(100, 78);
Output: player: 100 cpu: 78 endGame();

Code: scoreCard(89, 112);
Output: player: 89 cpu: 112 endGame();

Code: scoreCard(89, 49);
Output: player: 89 cpu: 48
