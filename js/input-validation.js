
function inputValidation (userInput) {

  if (userInput === undefined || typeof userInput !== "string") {
    var stringStub = '>';
    return stringStub + userInput + '<'; 
  }

    var inputString = userInput.toLowerCase();
  
    if (inputString === "p" || inputString === "paper") {
    return "paper";
  
  } else if (inputString === "r" || inputString === "rock"){
    return "rock";
  
  } else if (inputString === "f" || inputString === "fireball" || inputString === "fire ball" || inputString === "fire"){
    return "fireball";
  
  }

}
