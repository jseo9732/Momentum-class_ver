const clock = document.querySelector(".js-clock");

function loadClock() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${(hour < 10) ? `0${hour}`: hour}:${(minutes < 10) ? `0${minutes}`: minutes}:${(seconds < 10) ? `0${seconds}`: seconds}`;
}

function init() {
    loadClock();
    setInterval(loadClock,1000)
}

init();
