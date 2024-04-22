
var ballButton = document.getElementById("show-cards-btn");
var modal = document.getElementById("github-modal");


ballButton.onclick = function() {
  modal.style.display = "block";
}


var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
