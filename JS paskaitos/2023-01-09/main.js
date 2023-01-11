import TimerState from "./timerState.js";
import { calculateTime, formatTime } from "./utils.js";

const elements = {
  startButton: document.querySelector("#btn-start"),
  stopButton: document.querySelector("#btn-stop"),
  resetButton: document.querySelector("#btn-reset"),
  lapButton: document.querySelector("#btn-lap"),
  timerBox: document.querySelector("#timer"),
  lapContainer: document.querySelector("#lap-container"),
  lapParagraphElement: document.querySelector("p"),

};

function updateTimerText(secondsElapsed) {
  const {seconds, minutes, hours} = calculateTime(secondsElapsed);
  

  elements.timerBox.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
};

const createLap = (lapNumber, lapTime) => {
  const lapParagraphElement = document.createElement("p");
  const lapNumberNode = document.createTextNode(`Lap ${lapNumber}: `);
  const lapTimeElement = document.createElement("span");
  const {seconds, minutes, hours} = calculateTime(lapTime);
  lapTimeElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  lapParagraphElement.append(lapNumberNode, lapTimeElement);
  elements.lapContainer.append(lapParagraphElement);
};

const clearLaps = () => {
  elements.lapContainer.innerHTML = "";
}

const timerState = new TimerState({
  updateTime: updateTimerText,
  setLap: createLap,
  clearLaps: clearLaps,
});

elements.startButton.addEventListener("click", () => {
  timerState.start();
});

elements.stopButton.addEventListener("click", () => {
  timerState.stop();
});

elements.resetButton.addEventListener("click", () => {
  timerState.reset();
});

elements.lapButton.addEventListener("click", () => {
  timerState.lap();
});