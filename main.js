function popUpRules() {
  const rulesBtn = document.querySelector(".rules");
  const exitBtn = document.getElementById("exit");
  const popUp = document.querySelector(".popUp");
  const bgPopUp = document.querySelector(".bg-pop-up");
  rulesBtn.addEventListener("click", function () {
    popUp.classList.remove("hidden");
    bgPopUp.classList.remove("hidden");
    exitBtn.addEventListener("click", function () {
      popUp.classList.add("hidden");
      bgPopUp.classList.add("hidden");
    });
    bgPopUp.addEventListener("click", function () {
      popUp.classList.add("hidden");
      bgPopUp.classList.add("hidden");
    });
    popUp.addEventListener("click", function () {
      popUp.classList.add("hidden");
      bgPopUp.classList.add("hidden");
    });
  });
}
popUpRules();

const choice = document.querySelector(".chios");
const picked = document.querySelector(".picked");
const result = document.querySelector(".result h2");
const playAgin = document.querySelector(".result button");
const allButtons = document.querySelectorAll(".chios .all ");
const allButtonsIcons = document.querySelectorAll(".chios .all img");
const vs = document.querySelectorAll(".all.vs img");
const score = document.getElementById("score");
let myChoice;
let myChoiceSrc;
let computerChoice;
let computerChoiceSrc;
let positionBtn = {
  rock: 0,
  paper: 1,
  scissor: 2,
};
let varScore = 0;

function computer() {
  let generate = allButtonsIcons[Math.floor(Math.random() * 3)];
  computerChoice = generate.id;
  computerChoiceSrc = generate.src;
  console.log(computerChoice);
  console.log(computerChoiceSrc);
  vs[1].src = computerChoiceSrc;
  vs[1].alt = computerChoice;
  vs[1].parentElement.classList.add(computerChoice);
  vs[1].parentElement.classList.remove("hid");
}
function resultFun() {
  result.parentElement.classList.remove("offf");
  if (
    (positionBtn[myChoice] === 0 && positionBtn[computerChoice] === 1) ||
    (positionBtn[myChoice] === 2 && positionBtn[computerChoice] === 0) ||
    (positionBtn[myChoice] === 1 && positionBtn[computerChoice] === 2)
  ) {
    result.textContent = "You Lose";
    vs[1].parentElement.classList.add("win");
    varScore === 0 ? (varScore = 0) : varScore--;
    set();
  } else if (positionBtn[myChoice] === positionBtn[computerChoice]) {
    result.textContent = "Draw";
  } else {
    result.textContent = "You Win";
    vs[0].parentElement.classList.add("win");
    varScore++;
    set();
  }
  score.textContent = varScore;
}

function reGame() {
  playAgin.addEventListener("click", function () {
    vs[0].parentElement.classList.remove(myChoice);
    choice.classList.remove("off");
    picked.classList.add("off");
    vs[1].parentElement.classList.add("hid");
    myChoice = "";
    myChoiceSrc = "";
    computerChoice = "";
    computerChoiceSrc = "";
    vs[1].src = computerChoiceSrc;
    vs[1].alt = computerChoice;
    vs[1].parentElement.className = "all vs hid";
    vs[0].parentElement.classList.remove("win");
    result.parentElement.classList.add("offf");
  });
}
function collection() {
  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      myChoice = button.children[0].id;
      myChoiceSrc = button.children[0].src;
      vs[0].src = myChoiceSrc;
      vs[0].alt = myChoice;
      vs[0].parentElement.classList.add(myChoice);
      choice.classList.add("off");
      picked.classList.remove("off");
      setTimeout(computer, 1000);
      setTimeout(resultFun, 1000);
    });
  });

  reGame();
}
function set() {
  localStorage.setItem("scorePlayer", varScore);
}
function get() {
  score.textContent = localStorage.getItem("scorePlayer");
}

collection();

get();
