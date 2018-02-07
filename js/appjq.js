
function loadPage() {

  setTimeout(function () {
  $("#one-section").fadeOut(2200);
 }, 1000);


  $("#sign-up").click(signUp);
  $("#random").click(randomCode);
  $("#number").click(validation);
}

function signUp() {

}

function validation() {
  var $phoneNew = $("#number").val()
  if( isNaN($phoneNew) ) {
  $("#nextForm").disabled()
  alert("hello");
  }
}

//funcion código random
function randomCode() {
  var $buttonRandom = $("#random")
  var $numberRandom = $("#answer");
  $numberRandom.html("hello" + Math.floor((Math.random() * 999) + 100));
}



$(document).ready(loadPage);
