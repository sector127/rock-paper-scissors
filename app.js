const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rockBtn = document.getElementById("rock");
const aiBtn = document.getElementById("ai-pick");
const playAgainBtn = document.getElementById("play-again");

const paperEl = document.getElementById("paperEl");
const scissorsEl = document.getElementById("scissorsEl");
const rockEl = document.getElementById("rockEl");
const aiEl = document.getElementById("aiEl");

const buttons = document.getElementById("buttons");
const picks = document.getElementById("picks");
const result = document.getElementById("result");

const resultText = document.getElementById("result-text");
let scoreEl = document.getElementById("current-score");

scoreEl.innerHTML = "0";

let AI;
let score = 0;

const AIpick = () => {
  const random = Math.trunc(Math.random() * 3) + 1;
  if (random == 1) {
    AI = "paper";
  } else if (random == 2) {
    AI = "scissors";
  } else AI = "rock";
  return AI;
};

const pickTime = () => {
  setTimeout(() => {
    aiBtn.classList.add(`${AI}-btn`, "color-btn");
    aiEl.classList.add(`${AI}`);
  }, 1200);
};

const resultTime = () => {
  setTimeout(() => {
    buttons.style.width = "900px";
    result.classList.remove("hidden");
    scoreEl.innerHTML = score;
  }, 1800);
};

const play = (pick) => {
  if (pick === AI) {
    resultText.innerHTML = "DRAW";
  } else if (
    (pick === "paper" && AI === "scissors") ||
    (pick === "rock" && AI === "paper") ||
    (pick === "scissors" && AI === "rock")
  ) {
    lose();
  } else win();
  aiEl.classList.remove("hidden");
  document.getElementById("buttons").style.background = "none";
  picks.classList.remove("hidden");
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  rockBtn.disabled = true;
  pickTime();
  resultTime();
};

const lose = () => {
  resultText.innerHTML = "YOU LOSE";
  score = 0;
};

const win = () => {
  resultText.innerHTML = "YOU WIN";
  score += 1;
};

playAgainBtn.addEventListener("click", () => {
  console.log("PLAY AGAIN");
  result.classList.add("hidden");
  buttons.style.width = "600px";
  buttons.style.backgroundImage = "url(./images/bg-triangle.svg)";
  buttons.style.backgroundRepeat = "no-repeat";
  buttons.style.backgroundPosition = "center";
  picks.classList.add("hidden");
  aiBtn.classList.remove(`${AI}-btn`, "color-btn");
  aiEl.classList.remove(`${AI}`);
  paperEl.classList.remove("hidden");
  scissorsEl.classList.remove("hidden");
  rockEl.classList.remove("hidden");
  aiEl.classList.add("hidden");
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  rockBtn.disabled = false;
});

paperBtn.addEventListener("click", (e) => {
  AIpick();
  console.log(e.target.id, AI);
  const playerPick = e.target.id;
  scissorsEl.classList.add("hidden");
  rockEl.classList.add("hidden");
  play(playerPick);
});

scissorsBtn.addEventListener("click", (e) => {
  AIpick();
  console.log(e.target.id, AI);
  const playerPick = e.target.id;
  paperEl.classList.add("hidden");
  rockEl.classList.add("hidden");
  play(playerPick);
});

rockBtn.addEventListener("click", (e) => {
  AIpick();
  console.log(e.target.id, AI);
  const playerPick = e.target.id;
  paperEl.classList.add("hidden");
  scissorsEl.classList.add("hidden");
  play(playerPick);
});

//Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const rulesModalBtn = document.getElementById("rules");
const closeRulesmodalBtn = document.getElementById("close");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

rulesModalBtn.addEventListener("click", openModal);

closeRulesmodalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") closeModal();
});
