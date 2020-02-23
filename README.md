# Final Fantasy Creature Collector

A "Crystal Collector" type game that uses jQuery to generate random values for all buttons and goal.

## Deployed Link

https://wedodge89.github.io/ffcc/

## Purpose

A fun game that I used to familiarize myself with the jQuery framework and methods such as Math.random and Math.floor.

## How it Works

Upon starting the app, functions run in the background to generate 5 random numbers: the Goal Score and the numerical values of the four buttons. The application then checks to see if any of the button values is the same as another. If so, it reruns the random calculator function. Then, as another failsafe, it ensures that there is at least one odd-numbered button. This prevents some situations where the Goal Score is impossible to reach because it may be odd when all the button values are even.  

The player then clicks the buttons, intuiting their values in an effort to increase their score to match the Goal Score. If they are successful, then the "Wins" number is increased, and the game resets, recalculating all five values. If their score ever exceeds the Goal Score, however, the Losses value is incremented, and then the game resets. 

## Technologies Used

- HTML
- CSS
- JavaScript
    - jQuery
- Audio & Visual elements
    - Final Fantasy Tactics BG image
    - Cactuar, Chocobo, Moogle, and Moomba images
    - Final Fantasy font downloaded online
    - Electric de Chocobo (Acapella) by Mr. Dooves & F1shard (Triforcefilms on YouTube)
        - https://www.youtube.com/watch?v=Rzavr85aaGA
    - Creature sound effects from various Final Fantasy games