import timerState from "./state.js";
import {formatTime} from "./utils.js";

const element = {
    startButton: document.querySelector("#btn-start"),
    stopButton: document.querySelector("#btn-stop"),
    timerBox: document.querySelector("#timer"),
};
// šita funkcija iškviečiama state.js faile
function updateTimerText(timeElapsed){
    console.log("update", timeElapsed);
    element.timerBox.textContent = timeElapsed;

    // sekundės nuo 0 iki 59
    const seconds = timeElapsed % 60

    // minutės nuo 0 iki 59
    const minutes = Math.floor(timeElapsed / 60) % 60;

    // valdandos 0 iki n
    const hours = Math.floor((timeElapsed / 60) / 60);
    element.timerBox.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    console.log(hours, minutes, seconds);
};

// updateTimerText(0); - šito iškvietimo nelieka

// callback funkcija
element.startButton.addEventListener("click", function () {
    console.log("Start");
    timerState.start(updateTimerText);
});

element.stopButton.addEventListener("click", function () {
    timerState.stop();
});