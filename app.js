let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let focusTimer = document.querySelector(".focusTimer");
let breakTimer = document.querySelector(".breakTimer");

let focus = document.querySelector("#focus");
let Break = document.querySelector("#break");

let timer = null, section = true;
let [hr, min, sec] = [0, 25, 0];


let displayTimer = () => {
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  focusTimer.innerHTML = `${h} : ${m} : ${s}`;
  breakTimer.innerHTML = `${h} : ${m} : ${s}`;
  if (h == 0 && m == 0 && s == 0) clearInterval(timer);
};

let startTimer = () => {
  if (sec == 0 && min != 0) {
    sec = 60;
    min--;
    if (min == 0 && hr != 0) {
      min = 60;
      hr--;
    }
  }
  sec--;
  displayTimer();
};

let toStart = () => {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 1000);
};

let toStop = () => {
  clearInterval(timer);
};

let toReset = () => {
  clearInterval(timer);
  [hr, min, sec] = section? [0, 25, 0] : [0, 5, 0];
  displayTimer();
};

let atBreak = () => {
  [hr, min, sec] = [0, 5, 0];
  displayTimer();

  breakTimer.classList.remove("hide");
  focusTimer.classList.add("hide");
  section = false;
  clearInterval(timer);

  document.querySelector(".main-box1").style.backgroundColor = "#f0bd04";
  document.querySelector(".main-box2").style.backgroundColor = "#f0bd04";
};

let atFocus = () => {
  [hr, min, sec] = [0, 25, 0];
  displayTimer();

  focusTimer.classList.remove("hide");
  breakTimer.classList.add("hide");
  section = true;
  clearInterval(timer);

  document.querySelector(".main-box1").style.backgroundColor = "#ff8c00";
  document.querySelector(".main-box2").style.backgroundColor = "#ff8c00";
};

focus.addEventListener("click", atFocus);
Break.addEventListener("click", atBreak);
reset.addEventListener("click", toReset);
stop.addEventListener("click", toStop);
start.addEventListener("click", toStart);
