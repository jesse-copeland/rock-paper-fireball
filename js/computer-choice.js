function determineWinner (playerChoice) {

  var choices = ['rock', 'paper', 'fireball'];
  var compChoice = choices[generate()];

  var resultObj = {
    message: function () {
      return this.winner + ' wins!, ' + this.winningChoice + ' ' + this.wonBy + ' ' + this.losingChoice + '.';
    },
    winnerBg: function () {
      var bgImage;
      if (this.winningChoice === 'paper') {
        bgImage = 'paper.png';
      } else if (this.winningChoice === 'rock') {
        bgImage = 'rock-seamless.jpg';
      } else if (this.winningChoice === 'fireball') {
        bgImage = 'fire-seamless.jpg';
      } else {
        bgImage = 'congruent_pentagon.png';
      }
      return bgImage;
    }
  };

  switch (playerChoice) {
    case  'rock':
      if (compChoice === 'paper') {
        resultObj.winner = 'computer';
        resultObj.winningChoice = 'paper';
        resultObj.losingChoice = 'rock';
        resultObj.wonBy = 'covers';
      } else if (compChoice === 'fireball') {
        resultObj.winner = 'player';
        resultObj.winningChoice = 'rock';
        resultObj.losingChoice = 'fireball';
        resultObj.wonBy = 'blocks';
      } else {
        resultObj.winner = 'Draw, neither side';
        resultObj.winningChoice = 'rock';
        resultObj.losingChoice = 'rock';
        resultObj.wonBy = 'matches';
      }
      break;
    case 'paper':
      if (compChoice === 'rock') {
        resultObj.winner = 'player';
        resultObj.winningChoice = 'paper';
        resultObj.losingChoice = 'rock';
        resultObj.wonBy = 'covers';
      } else if (compChoice === 'fireball') {
        resultObj.winner = 'computer';
        resultObj.winningChoice = 'fireball';
        resultObj.losingChoice = 'paper';
        resultObj.wonBy = 'burns';
      } else {
        resultObj.winner = 'Draw, neither side';
        resultObj.winningChoice = 'paper';
        resultObj.losingChoice = 'paper';
        resultObj.wonBy = 'matches';
      }
      break;
    case 'fireball':
      if (compChoice === 'rock') {
        resultObj.winner = 'computer';
        resultObj.winningChoice = 'rock';
        resultObj.losingChoice = 'fireball';
        resultObj.wonBy = 'blocks';
      } else if (compChoice === 'paper') {
        resultObj.winner = 'player';
        resultObj.winningChoice = 'fireball';
        resultObj.losingChoice = 'paper';
        resultObj.wonBy = 'burns';
      } else {
        resultObj.winner = 'Draw, neither side';
        resultObj.winningChoice = 'fireball';
        resultObj.losingChoice = 'fireball';
        resultObj.wonBy = 'matches';
      }
      break;
    default:
      resultObj.winner = 'error';
      resultObj.winningChoice = 'error';
      resultObj.message = function () {
        return 'Try again, ' + playerChoice + ' is not a valid choice. Please enter "rock", "paper" or "fireball".';
      };
  }

  return resultObj;
}

function generate () {
  return Math.floor(Math.random() * 3);
}

