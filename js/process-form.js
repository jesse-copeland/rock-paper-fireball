document.getElementById("PlayerInputForm").addEventListener("submit", processForm);
var resultsDiv = document.getElementById("results");

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  var playerInput = document.getElementById("PlayersChoice").value;
  var gameContainer = document.getElementById("main");

  var gameResults = determineWinner(inputValidation(playerInput));
  resultsDiv.innerHTML = gameResults.message();
  gameContainer.style.backgroundImage = 'url(images/' + gameResults.winnerBg() +')';
  resultsDiv.className = "";
  return false;
}
