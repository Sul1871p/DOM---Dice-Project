let rand1 = Math.floor(Math.random() * 6) + 1;  // random number for first image
let rand2 = Math.floor(Math.random() * 6) + 1;  // random number for second image

const diceImg1 = document.querySelector(".dice1"); // first dice variable created
const diceImg2 = document.querySelector(".dice2"); // second dice variable created

const title = document.querySelector("h1") // variable for title created

let randomDiceImg1 = "images/face-" + rand1 + ".png" // first image address created using STRING CONCATENATION 
let randomDiceImg2 = "images/face-" + rand2 + ".png" // second image address created using STRING CONCATENATION

diceImg1.setAttribute("src", randomDiceImg1); // dynamic changing of first image address through DOM Manipulation
diceImg2.setAttribute("src", randomDiceImg2); // dynamic changing of second image address through DOM Manipulation

if (rand1>rand2) {                                 
    title.textContent = "🚩 Player 1 Wins!!";
} else if (rand1<rand2) {
    title.textContent = "Player 2 Wins!! 🚩";         // conditional statement for changing title
} else {
    title.textContent = "It's a Draw!";
}
