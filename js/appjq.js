
function loadPage() {

  setTimeout(function () {
  $("#one-section").fadeOut(2200);
 }, 1000);


  $("#sign-up").click(signUp);
  $("#random").click(randomCode);
  $("#numberInput").click(validation);
}

function signUp() {

}

function validation() {
  var $phoneNumber = $("#numberInput").val()
  if( isNaN($phoneNumber) ) {
  $("#nextForm").disabled()
  alert("hola");
  }
}

//funcion código random
function randomCode() {
  var $botonRandom = $("#random")
  var $numberRandom = $("#llenar");
  $numberRandom.html("Hola" + Math.floor((Math.random() * 999) + 100));
}



$(document).ready(loadPage);
