const stopWatch = document.getElementById("stopWatch");
let timer = null;
let startedTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let isRunning = false;
/*the stopwatch works by calculating the current time and then subtract 
the startedTime from it, so we get the elapsedTime to display it*/
function start() {
    if (!isRunning) {
        //calculating the startedTime (*the only part that i couldn't understand*)
        startedTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

//if the stopWatch isRunning then we clear the interval and we set isRunning to false
function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}
/*update works every 10ms it get the current time and subtract 
the startedTime from it, then calculates the HH:MM:SS:MS and displays it*/
function update() {
    elapsedTime = Date.now() - startedTime;
    let hours = Math.floor(elapsedTime / (1000 * 3600));
    let mins = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let secs = Math.floor(elapsedTime / (1000)) % 60;
    let millisecs = Math.floor(elapsedTime % 1000 / 10);
    hours = String(hours).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    millisecs = String(millisecs).padStart(2, "0");
    stopWatch.textContent = `${hours}:${mins}:${secs}:${millisecs}`
}

function reset() {
    clearInterval(timer);
    startedTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    isRunning = false;
    stopWatch.textContent = `00:00:00:00`;
}