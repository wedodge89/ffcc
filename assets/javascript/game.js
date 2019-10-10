$(document).ready(function() {

// Variables

let cactuarVal = Math.floor(Math.random() * 11 + 1);
let chocoboVal = Math.floor(Math.random() * 11 + 1);
let moogleVal = Math.floor(Math.random() * 11 + 1);
let moombaVal = Math.floor(Math.random() * 11 + 1);

// Between 19 and 120
let goal = Math.floor(Math.random() * 101 + 19)

let wins = 0;
let losses = 0;
let score = 0;

$(".button").on("click", function() {
    alert("Working")
});



console.log(cactuarVal)
console.log(chocoboVal)
console.log(moogleVal)
console.log(moombaVal)
console.log(score)
console.log(goal)

// if (score === goal) {
//     win()
// }

// if (score > goal) {
//     lose()
// }


// Once I figure out how to do it, this function will be used to select new random values for any variable.
// function recalc() {

// }

// This function recalculates values for the Goal Number and each of the buttons.
// function reset() {
    // recalc(goal);
    // recalc(cactuarVal);
    // recalc(chocoboVal);
    // recalc(moogleVal);
    // recalc(moombaVal);
//     score = 0;
// }

// function win() {
//     alert("Great job! You win!")
//     wins ++
//     reset()

// }

// function lose() {
//     alert("You busted! Try again!")
//     losses ++
//     reset()
// }

});