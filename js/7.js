const btn = document.querySelector('.btn')
const p = document.querySelector('.number')
function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
btn.addEventListener('click', randomNum);

function randomNum() {
    let bbb = p.textContent;
    p.textContent = randomIntegerFromInterval(1, 9)
}
    