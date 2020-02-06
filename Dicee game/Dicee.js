var i = 0;
var player1;
var player2;

getPlayerName();
checkPlayerName(player1, player2);

$(".drawbutton").click(Draw);

function getPlayerName(){

  player1 = prompt("Please enter Player 1 name");
  player2 = prompt("Please enter Player 2 name");
}

function Draw() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  $(".img1").attr("src", randomDiceImage);

  $(".img2").attr("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    $("h1").text(player1 +" Win !!!!");
  } else if (randomNumber1 == randomNumber2) {
    $("h1").text("Draw again");
  } else {
    $("h1").text(player2 + " Win !!!!");
  }

  buttonAnimation();
  console.log(buttonAnimation());
}

function buttonAnimation() {
  $(".drawbutton").addClass("pressed");

  setTimeout(function(){
    $(".drawbutton").removeClass("pressed");
  }, 100);

}

function checkPlayerName(player1,player2){
  if(player1.length == 0){
    player1 = "Player 1";
  }
  if (player2.length == 0) {
    player2 = "Player 2";
  }


    $("#player1").innerHTML = player1;
    $("#player2").innerHTML = player2;
}
