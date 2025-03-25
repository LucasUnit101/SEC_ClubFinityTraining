// Conditionals : Ternary Operator

let playerOne = "rock";
let computer = "rock";
let result = playerOne === computer ? "Tie Game!"
: playerOne === "rock" && computer === "paper" ? "Computer wins!"
: playerOne == "paper" && computer === "scisssors" ? "Computer wins!"
: playerOne === "scissors" && computer === "rock" ? "Computer wins!"
: "playerOne wins";
console.log(result)