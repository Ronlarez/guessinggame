var secretNumber = Math.floor((Math.random() * 100) +1)
var guess = Number(prompt("choose a number from 1 - 100"))
var guesses = 1;
var tries = 10

while(guess != secretNumber) {
  console.log(guesses)
  if (guesses >=tries){
    console.log("you lose")
    break
  }else if(guess > secretNumber){
    guesses++
    guess = prompt ("guess lower")
  }else if (guess < secretNumber) {
    guesses++
    guess = prompt ("guess higher")
  }
}

if(guesses < tries) {
  console.log("you got it, and it only took you" + guesses + "guesses")
}
