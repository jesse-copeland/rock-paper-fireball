
function inputValidation (userInput) {

  if (userInput === undefined || typeof userInput !== "string") {
    return "Please enter valid choice: ex. paper, rock, fireball";
}
    var inputString = userInput.toLowerCase();
  
    if (inputString === "p" || inputString === "paper") {
    return "paper";
  
  } else if (inputString === "r" || inputString === "rock"){
    return "rock";
  
  } else if (inputString === "f" || inputString === "fireball" || inputString === "fire ball"){
    return "fireball";
  
  }

}

//console.log (inputValidation());