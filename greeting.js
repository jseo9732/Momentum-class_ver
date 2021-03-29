const form = document.querySelector(".js-form"),
        input = form.querySelector("input"),
        greeting = document.querySelector(".js-geeting");

function saveName(text) {
    localStorage.setItem("currentUser",text);
}

function handleSubmit(event) {
    event.preventDefault();
    paintGreeting(input.value);
    saveName(input.value);
}

function askName(){
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `반가워요 ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();