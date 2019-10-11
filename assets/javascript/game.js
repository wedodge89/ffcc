$(document).ready(function() {

// Set initial variables and populate Goal box
    let cactuarVal = Math.floor(Math.random() * 11 + 1);
    let chocoboVal = Math.floor(Math.random() * 11 + 1);
    let moogleVal = Math.floor(Math.random() * 11 + 1);
    let moombaVal = Math.floor(Math.random() * 11 + 1);
    let score = 0
    let goal = Math.floor(Math.random() * 101 + 19)
    $("#goal-text").html(`<p class="box-text">${goal}</p>`)
    let wins = 0;
    $("#wins-text").html(`<p class="box-text">${wins}</p>`)
    let losses = 0;
    $("#losses-text").html(`<p class="box-text">${losses}</p>`)
    console.log(cactuarVal)
    console.log(chocoboVal)
    console.log(moogleVal)
    console.log(moombaVal)
    console.log(score)
    console.log(goal)
    
// Define calculate function for use in win or lose event
function calculate() {
    cactuarVal = Math.floor(Math.random() * 11 + 1);
    chocoboVal = Math.floor(Math.random() * 11 + 1);
    moogleVal = Math.floor(Math.random() * 11 + 1);
    moombaVal = Math.floor(Math.random() * 11 + 1);
    score = 0;
    $("#score-text").html(`<p class="box-text">${score}</p>`)
    goal = Math.floor(Math.random() * 101 + 19);
    $("#goal-text").html(`<p class="box-text">${goal}</p>`)
}

function win() {
    alert("Great job! You win!")
    wins ++
    $("#wins-text").html(`<p class="box-text">${wins}</p>`)
    calculate()
}

function lose() {
    alert("Too bad! Try again!")
    losses ++
    $("#losses-text").html(`<p class="box-text">${losses}</p>`)
    calculate()
}

function checker() {
    if (score == goal) {
        win()
    }
    if (score > goal) {
        lose()
    }
}


$("#cactuar").on("click", function() {
    score = score + cactuarVal;
    console.log(score)
    $("#score-text").html(`<p class="box-text">${score}</p>`)
    checker()
});

$("#chocobo").on("click", function() {
    score = score + chocoboVal;
    console.log(score)
    $("#score-text").html(`<p class="box-text">${score}</p>`)
    checker()
});

$("#moogle").on("click", function() {
    score = score + moogleVal;
    console.log(score)
    $("#score-text").html(`<p class="box-text">${score}</p>`)
    checker()
});


// Moomba button functionality
$("#moomba").on("click", function() {
    score = score + moombaVal;
    console.log(score)
    $("#score-text").html(`<p class="box-text">${score}</p>`)
    checker()
});

});