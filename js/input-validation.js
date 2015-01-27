
function inputValidation () {

  

  if (choices === null || choices === "") {

    alert("Please enter valid choice: ex. paper, rock, fireball");
  
  } else {

  return choices.toLowerCase();
  }
}
console.log (inputValidation());