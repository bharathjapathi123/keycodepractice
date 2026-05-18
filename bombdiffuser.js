let userInputEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let intervalId = null;
let countdown = 10;
timerEl.textContent = countdown;

intervalId = setInterval(function() {
    if (countdown > 1) {
        countdown = countdown - 1;
        timerEl.textContent = countdown;
    } else {
        clearInterval(countdown);
        timerEl.textContent = "BOOM";
    }
}, 1000);


function userEntered(eventObject) {
    if (eventObject.key === "Enter" && userInputEl.value === "defuse") {
        clearInterval(intervalId);
        timerEl.textContent = "You did it!";
    }
}
userInputEl.addEventListener("keydown", userEntered);