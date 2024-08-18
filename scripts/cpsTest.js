const time = document.getElementById("timeStart");
const button = document.querySelector(".input");

function countStart()
{
    time.textContent = 3;
    button.style.display = "none";
    setTimeout(function(){
        time.textContent = 2;
        setTimeout(function(){
            time.textContent = 1;
            setTimeout(function(){
                time.textContent = "started";
            },1000);
        },1000);
    },1000);//Rep_Hurricane Contributed

    // time.textContent = "";
}

let clickCount = 0;
let timerValue = 10;
let timerRunning = false;
let timerInterval;

const clickableDiv = document.getElementById('clickableDiv');
const timerDiv = document.getElementById('timer');

clickableDiv.addEventListener('click', () => {
  if (timerRunning) {
    clickCount++;
    clickableDiv.textContent = `Clicks: ${clickCount}`;
  }
});

function startTimer() {
  timerRunning = true;
  timerInterval = setInterval(() => {
    timerValue--;
    timerDiv.textContent = `Timer: ${timerValue}`;
    if (timerValue === 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
}

startTimer();