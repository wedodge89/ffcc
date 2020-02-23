$(document).ready(function() {

// Set initial variables and populate Goal box
    calculate();
    let wins = 0;
    $("#wins-text").html(`<p class="box-text">${wins}</p>`)
    let losses = 0;
    $("#losses-text").html(`<p class="box-text">${losses}</p>`)

    // Preventing repeating values between buttons.
    function sameValueCheck() {
        if (cactuarVal === chocoboVal ||
            cactuarVal === moogleVal ||
            cactuarVal === moombaVal ||
            chocoboVal === moogleVal ||
            chocoboVal === moombaVal ||
            moogleVal === moombaVal) {
                calculate();
            };
    };

    function evenCheck() {
        if (cactuarVal % 2 === 1 &&
            chocoboVal % 2 === 1 &&
            moogleVal % 2 === 1 &&
            moombaVal % 2 ===1 ) {
                calculate();
            }
    }
    
    // Define calculate function for use in win or lose event
    function calculate() {
        cactuarVal = Math.floor(Math.random() * 11) + 1;
        chocoboVal = Math.floor(Math.random() * 11) + 1;
        moogleVal = Math.floor(Math.random() * 11) + 1;
        moombaVal = Math.floor(Math.random() * 11) + 1;
        sameValueCheck();
        evenCheck();
        score = 0;
        $("#score-text").html(`<p class="box-text">${score}</p>`)
        goal = Math.floor(Math.random() * 101) + 19;
        $("#goal-text").html(`<p class="box-text">${goal}</p>`)
    }

    // Win state: alert and iterate win, recalculate variables
    function win() {
        wins ++
        $("#wins-text").html(`<p class="box-text">${wins}</p>`)
        calculate()
        alert("Great job! You win!")
    };

    // Lose state: alert and iterate loss, recalculate variables
    function lose() {
        losses ++
        $("#losses-text").html(`<p class="box-text">${losses}</p>`)
        calculate()
        alert("Too bad! Try again!")
    }

    // Compare scores to determine win/loss state
    function checker() {
        if (score === goal) {
            win()
        }
        if (score > goal) {
            lose()
        }
    };

    // Cactuar button functionality
    $("#cactuar").on("click", function() {
        score = score + cactuarVal;
        $("#score-text").html(`<p class="box-text">${score}</p>`)
        checker()
    });

    // Chocobo button functionality
    $("#chocobo").on("click", function() {
        score = score + chocoboVal;
        $("#score-text").html(`<p class="box-text">${score}</p>`)
        checker()
    });

    // Moogle button functionality
    $("#moogle").on("click", function() {
        score = score + moogleVal;
        $("#score-text").html(`<p class="box-text">${score}</p>`)
        checker()
    });

    // Moomba button functionality
    $("#moomba").on("click", function() {
        score = score + moombaVal;
        $("#score-text").html(`<p class="box-text">${score}</p>`)
        checker()
    });

    // Rearrange tiles on resize
    $(window).on("resize", function() {
        if (screen.width < 522) {
            $("#statArea").prepend($(".winLose"));
        }
    });

});