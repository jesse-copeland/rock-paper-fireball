document.getElementById("PlayerInputForm").addEventListener("submit", processForm);
var results = document.getElementsById("results");
results.innerHTML = "Starting text";
function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  results.innerHTML = "Test text";
  results.className = "";
  return false;
}
