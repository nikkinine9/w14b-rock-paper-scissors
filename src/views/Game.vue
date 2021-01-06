<template>
    <div id="game">
        <div class="container">
        <br>
        <header class="header">
        <h1>Rock Paper Scissors</h1>
        <button id="restart" class="restart-btn">Restart Game</button>
        <div id="score" class="score">
            <p>Player: 0</p>
            <p>Computer: 0</p>
        </div>
        </header>
        <h2>Make Your Selection</h2>
        <div class="choices">
        <i id="rock" class="choice fas fa-hand-rock fa-10x"></i>
        <i id="paper" class="choice fas fa-hand-paper fa-10x"></i>
        <i id="scissors" class="choice fas fa-hand-scissors fa-10x"></i>
        </div>
        <br>
        <div class="modal">
        <div id="result" class="modal-content">
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-rock fa-10x"></i>
            <p>Computer Chose Rock</p>
        </div>
        </div>
        <br>
        </div>
    </div>
</template>

<script>
export default {
    name: "Game",
    components: {
    },
};

const choices = document.querySelectorAll(".choices");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer:0
}

function play(e) {
//   console.log(e.target.id);
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

function getComputerChoice() {
  const rand = Math.random();
  if(rand < 0.34) {
    return "rock";
  }else if(rand <= 0.67) {
    return "paper";
  }else {
    return "scissors";
  }
}

function getWinner(p, c) {
  if(p === c) {
    return "draw";
  }else if (p === "rock") {
    if(c === "paper") {
      return "computer";
    }else {
      return "player";
    }
  }else if(p === "paper") {
    if(c === "scissors") {
      return "computer";
    }else {
      return "player";
    }
  }else if(p === "scissors") {
    if(c === "rock") {
      return "computer";
    }else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if(winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
      <h1 class="text-win">You Win!!!</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
      `;
  }else if(winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
      <h1 class="text-lose">You Lose!!</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
      `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw!</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `;
  }
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
  
  modal.style.display = "block";
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
}

function clearModal(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
}

choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
  
</script>

<style scoped>
:root {
  --primary-color: #003699;
  --dark-color: #333333;
  --light-color: #dc3545;
  --win-color: #28a745;
  --modal-duration: 1s;
}

* {
  box-sizing:border-box;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;

}

.restart-btn {
  display: none;
  background: var(--light-color);
  color: ivory;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  margin-bottom: 1rem;
}

.restart-btn:hover {
  background: var(--primary-color);
}

.header {
  text-align: center;
  margin: 1rem 0;
}

.header h1 {
  margin-bottom: 1rem;
}

.score {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.2rem;
}

.score p:first-child {
  background: var(--primary-color);
}

.score p:last-child {
  background: var(--dark-color);
}

.choices {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 3rem;
  text-align: center;
}

.choice {
  cursor: pointer;
}

.choice:hover {
  color: var(--primary-color)
}

.text-win {
  color: var(--win-color);
}

.text-lose {
  color: var(--lose-color);
}

@media(max-width: 700px) {
  .choice {
    font-size: 110px;
  }
}

@media(max-width: 500px) {
  .choice {
    font-size: 80px;
  }
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  color: black;
}

.modal-content {
  background: ivory;
  text-align: center;
  margin: 10% auto;
  width: 350px;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  animation-name: modalopen;
  animation-duration: var(--modal-duration);
}

.modal-content h1 {
  margin-bottom: 1rem;
}

.modal-content p {
  font-size: 1.2rem;
  margin-top: 1rem;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>