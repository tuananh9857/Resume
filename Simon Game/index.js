var level = 0;
var count = 0;
var check = 0;

var colorChange = ["red", "green", "blue", "yellow"];
var randomArray = [];
var answerArray = [];

var correctKeyPress = false;
var correctClick = false;

$(document).keypress(keyPress);



$(".btn").click(clickButton);

function keyPress(event) {
  if (!correctKeyPress) {
    correctKeyPress = true;
    start();
  }
}

function clickButton() {
  if (!correctClick) {
    var color = $(this).attr("id");
    animatePress(color);
    if (count < level) {
      answerArray.push(color);
      count++;
    $("#NumberofSelection").text(" "+ count);
    }
    if (count == level) {
      correctClick = true;
      
      checkAnswer();
    }
  }
}

function start() {
  level++;
  $("#NumberofPattern").text(" " +level);
  $("#level-title").text("Level " + level);
  for (var i = 0; i < level; i++) {
    setTimeout(function() {
      var randomNumber = Math.floor(Math.random() * 4);
      var color = colorChange[randomNumber];
      randomArray.push(color);
      $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 1000 * i);
  }

}

function checkAnswer() {
  for (var i = 0; i < level; i++) {
    if (randomArray[i] !== answerArray[i]) {
      check++;
    }
  }
  if (check > 0) {
    gameOver();
  } else {
    nextLevel();
  }
}

function nextLevel() {
//  $("#level-title").text("Press any button to next Level");
  randomArray = [];
  answerArray = [];
  count = 0;
  correctClick = false;
  setTimeout(start,1000);
    $("#NumberofSelection").text(" "+ count);
  //  start();
}

function gameOver() {
  $("#level-title").text("Game Over!!!!. Press any key to start again")
  randomArray = [];
  answerArray = [];
  count = 0;
  level = 0;
  check = 0;
  correctKeyPress = false;
  correctClick = false;
  $("body").addClass("game-over");

  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 200);
}

function animatePress(color){
  $("#"+color).addClass("pressed");
  setTimeout(function(){
  $("#"+color).removeClass("pressed");
},100);
}
