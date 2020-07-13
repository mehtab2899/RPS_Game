const moves = document.querySelectorAll(".move");
const score = document.getElementById("score");
const restartGame = document.getElementById("restart");
const result = document.getElementById("result");
const modalBox = document.querySelectorAll(".modal");
const scoreboard = {
  your: 0,
  system: 0,
};

play = (e) => {
  restartGame.style.display = "inline-block";
  const yourChoice = e.target.id;
  const systemChoice = getSystemChoice();
  const winner = getWinner(yourChoice, systemChoice);
  showWinner(winner, systemChoice);
};

getSystemChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return "rock";
  } else if (randomValue <= 0.67) {
    return "paper";
  } else {
    return "scissor";
  }
};

getWinner = (p, c) => {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissor") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissor") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
};

showWinner = (winner, systemChoice) => {
  if (winner === "player") {
    scoreboard.your++;
    result.innerHTML = `
    <p class='text-win'>Hurray, You Win!</p>
    <p class="p1">Computer chose ${systemChoice}</p>
    `;
  } else if (winner === "computer") {
    scoreboard.system++;
    result.innerHTML = `
    <p class='text-win'>You Lose!</p>
    <p class="p1">Computer chose ${systemChoice}</p>
    `;
  } else {
    result.innerHTML = `
    <p class="text-win">It's A Draw</p>
    <p class="p1">Computer chose ${systemChoice}</p>
    `;
  }

  score.innerHTML = `
    <p class="score__para">You: ${scoreboard.your}</p>
    <p class="score__para">Computer: ${scoreboard.system}</p>
  `;
};

restart = () => {
  scoreboard.your = 0;
  scoreboard.system = 0;
  score.innerHTML = `
    <p class="score__para">You: 0</p>
    <p class="score__para">Computer: 0</p>
  `;
  result.innerHTML = "";
  restartGame.style.display = "none";
};

moves.forEach((move) => move.addEventListener("click", play));
restartGame.addEventListener("click", restart);
