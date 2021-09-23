const setAlarmBtn = document.getElementById("set");
const stopAlarmBtn = document.getElementById("stop");
const timeDisplay = document.getElementById("timeRemaining");
let timeInput = document.getElementById("alarmSet");

function setAlarm() {
  setAlarmBtn.addEventListener("click", () => {
    let timer = timeInput.value;

    let countDownId = setInterval(() => {
      if (timer >= 0) {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timeDisplay.innerText = `Time Remaining: ${minutes}:${seconds}`;
        timeInput.value = "";
      } else if (timer <= 0) {
        clearInterval(countDownId);
        playAlarm();
      }
      timer--;
      let pause = document.querySelector("#pause");
      pause.addEventListener("click", () => {
        clearInterval(countDownId);
      });
    }, 1000);
  });
}
setAlarm();

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
