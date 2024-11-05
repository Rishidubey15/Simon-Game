let boxes = document.querySelectorAll(".boxes");
let container = document.querySelector(".container");
let h3 = document.querySelector("h3");

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let max = 0;

let buttons = ["box1", "box2", "box3", "box4"];

document.addEventListener("keypress", () => {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function gameFlash(box) {
  box.classList.add("flash");
  setTimeout(function () {
    box.classList.remove("flash");
  }, 250);
}

function userFlash(box) {
  box.classList.add("userflash");
  setTimeout(function () {
    box.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let rand = Math.floor(Math.random() * 4);
  let randCol = buttons[rand];
  let randBox = document.querySelector(`#${randCol}`);
  gameSeq.push(randCol);
  gameFlash(randBox);
  console.log(gameSeq);
}

function buttonPress() {
  let btn = this;
  userFlash(btn);
  userSeq.push(btn.id);
  checkSeq(userSeq.length - 1);
}

let btns = document.querySelectorAll(".box");
for (btn of btns) {
  btn.addEventListener("click", buttonPress);
}

function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
    console.log("Same value");
  } else {
    checkMax();
    h3.innerHTML = `Game Over! Your score was: <b>${level}</b><br>Press any key to start<br>Highest Score: ${max}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 100);
    reset();
  }
}

function reset() {
  started = false;
  gameSeq = [];
  level = 0;
}

function checkMax() {
  if (level > max) {
    max = level;
  } else {
    max = max;
  }
}
