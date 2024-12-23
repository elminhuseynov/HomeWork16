const counterElement = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const increase5Button = document.getElementById('increase5');
const decrease5Button = document.getElementById('decrease5');
const changeColorButton = document.getElementById('changeColor');
const increaseSizeButton = document.getElementById('increaseSize');
const decreaseSizeButton = document.getElementById('decreaseSize');


let counter = 0;


function updateCounter() {
    counterElement.textContent = counter;
}

increaseButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decreaseButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

increase5Button.addEventListener('click', () => {
    counter += 5;
    updateCounter();
});

decrease5Button.addEventListener('click', () => {
    counter -= 5;
    updateCounter();
});


function getRandomColor(){
    let r1 = Math.floor(Math.random() * 255);
    let r2 = Math.floor(Math.random() * 255);
    let r3 = Math.floor(Math.random() * 255);
    return `rgb(${r1},${r2},${r3})`
}
changeColorButton.addEventListener('click', () => {
    counterElement.style.color = getRandomColor();
});

