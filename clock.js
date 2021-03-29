const clock = document.querySelector(".js-clock");

function loadClock() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${(hour < 10) ? `0${hour}`: hour}:${(minutes < 10) ? `0${minutes}`: minutes}:${(seconds < 10) ? `0${seconds}`: seconds}`;  //condition ? value1 : value2; --> 평가 대상인 condition이 truth라면 value1이, 그렇지 않으면 value2가 반환됨.

}

function init() {
    loadClock();
    setInterval(loadClock,1000)
}

init();
