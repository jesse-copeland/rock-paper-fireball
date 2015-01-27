function determineWinner (playerChoice) {

  var choices = ['rock', 'paper', 'fireball'];
  var compChoice = choices[generate()];

  // if (arguments[1]) {};

  var resultStatement;

  switch (playerChoice) {
    case  'rock':
      if (compChoice === 'paper') {
        resultStatement = 'computer wins, paper covers rock.';
      } else if (compChoice === 'fireball') {
        resultStatement = 'player wins, rock blocks fireball.';
      } else {
        resultStatement = 'Draw, both chose rock.';
      }
      break;
    case 'paper':
      if (compChoice === 'rock') {
        resultStatement = 'player wins, paper covers rock';
      } else if (compChoice === 'fireball') {
        resultStatement = 'computer wins, fireball burns paper';
      } else {
        resultStatement = 'Draw, both chose paper.';
      }
      break;
    case 'fireball':
      if (compChoice === 'rock') {
        resultStatement = 'computer wins, rock blocks fireball';
      } else if (compChoice === 'paper') {
        resultStatement = 'player wins, fireball burns paper';
      } else {
        resultStatement = 'Draw, both chose fireball.';
      }
      break;
    default:
      console.log('ERROR: Unexpected selection passed!', playerChoice);
  }

  return resultStatement;
}

function generate () {
  return Math.floor(Math.random() * 3);
}

