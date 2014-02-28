var name = prompt("What's your name?")
var guessMe = prompt("Hi " + name + "! Guess a number between 0-100!");
var randomNumber = Math.round(Math.random()*101);
if (randomNumber === parseFloat(guessMe)) {
  alert(guessMe + " is the correct number! You win!  Yay!");
} else {
  alert(guessMe + " is the wrong number! You lose.")
}



//alert('Hey find me to know where to put the javascript');
