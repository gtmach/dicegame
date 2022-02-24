
var randomNumber1 = 0
var randomNumber2 = 0

var randomDiceImage1 = 0
var randomDiceImage2 = 0

var diceSound = new Audio("sounds/diceroll.wav")

function rollDice(){
randomNumber1 = (Math.floor(Math.random() * 6) + 1);
randomNumber2 = (Math.floor(Math.random() * 6) + 1);

randomDiceImage1 = "images/dice" + randomNumber1 + ".png"
randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Jogador 1 ganhou!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Jogador 2 ganhou! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Empate!";
}

 diceSound.play();
  
}

document.querySelector("button").addEventListener("click", rollDice);
