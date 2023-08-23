const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let changeBodyBgColor = null;

stopBtn.setAttribute('disabled', 'disabled');

startBtn.addEventListener('click', () => {
    changeBodyBgColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener('click', () => {
    clearInterval(changeBodyBgColor);
    stopBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};