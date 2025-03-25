
let choices = ["rock", "paper", "scissors"];

const playerOne = choices[Math.random(Math.floor() * 3) + 1]
const computer = choices[Math.random(Math.floor() * 3) + 1]


if (playerOne === computer) {
  console.log("You Tied!")
} else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("You Lose!")
  } else {
    console.log("You Win!")
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    console.log("You Lose!")
  } else {
    console.log("You Win!")
  }
} else {
  if (computer === "rock") {
    console.log("You Lose!")
  } else {
    console.log("You Win!")
  }
}