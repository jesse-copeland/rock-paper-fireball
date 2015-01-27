describe("Call computerChoice.generate() to ", function() {
  it("it should return a number between 0 and 2", function() {
    expect(generate()).to.be.within(0,2);  
  });

});

describe("Call determine winner, with player passing rock.", function() {
  it("It should return 'computer wins, paper covers rock.' when player chooses rock and computer chooses paper", function() {
    var playerChoice = 'rock';
    var computerChoice = 'paper';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('computer wins, paper covers rock.');
  });
  it("It should return 'player wins, rock blocks fireball.' when player chooses rock and computer chooses fireball", function() {
    var playerChoice = 'rock';
    var computerChoice = 'fireball';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('player wins, rock blocks fireball.');
  });
  it("It should return 'Draw, both chose rock.' when player chooses rock and computer chooses rock", function() {
    var playerChoice = 'rock';
    var computerChoice = 'rock';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('Draw, both chose rock.');
  });
  
});

describe("Call determine winner, with player passing paper", function() {
  it("It should return 'player wins, paper covers rock' when player chooses paper and computer chooses rock", function() {
    var playerChoice = 'paper';
    var computerChoice = 'rock';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('player wins, paper covers rock');
  });
  it("It should return 'computer wins, fireball burns paper' when player chooses paper and computer chooses rock", function() {
    var playerChoice = 'paper';
    var computerChoice = 'fireball';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('computer wins, fireball burns paper');
  });
  it("It should return 'Draw, both chose paper.' when player chooses paper and computer chooses paper", function() {
    var playerChoice = 'paper';
    var computerChoice = 'paper';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('Draw, both chose paper.');
  });
  
});

describe("Call determine winner, with player passing fireball", function() {
    it("It should return 'computer wins, rock blocks fireball' when player chooses fireball and computer chooses rock", function() {
    var playerChoice = 'fireball';
    var computerChoice = 'rock';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('computer wins, rock blocks fireball');
  });
  it("It should return 'player wins, fireball burns paper' when player chooses fireball and computer chooses paper", function() {
    var playerChoice = 'fireball';
    var computerChoice = 'paper';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('player wins, fireball burns paper');
  });
  it("It should return 'Draw, both chose fireball.' when player chooses fireball and computer chooses fireball", function() {
    var playerChoice = 'fireball';
    var computerChoice = 'fireball';

    expect(determineWinner(playerChoice, computerChoice)).to.equal('Draw, both chose fireball.');
  });
  
});