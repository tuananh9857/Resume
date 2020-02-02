var i = 0;

document.querySelectorAll("button")[0].addEventListener("click", Draw);



function Draw() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomDiceImage);

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 1 Win !!!!";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw again";
  } else {
    document.querySelector("h1").innerHTML = " Player 2 Win !!!!";
  }

  buttonAnimation();
}

function buttonAnimation(button) {
  var activeButton = document.querySelector(".drawbutton");
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
