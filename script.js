const countbutton = document.querySelector("#increment-btn");

const resetButton = document.querySelector("#reset-btn");

const numberDisplay = document.querySelector("#count-el");

let count = 0;

function increment() {
    count = count + 1;
    numberDisplay.textContent = count;
}

function reset() {
    count = 0;
    numberDisplay.textContent = count;
}


countbutton.addEventListener("click", increment);

resetButton.addEventListener("click", reset);