const gameBtn = document.querySelector("#button");
const userInput = document.querySelector("#user-input");
const numberInput = document.querySelector("#number");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");

function playGame(event) {
    event.preventDefault();
    let randomNum = Math.floor(Math.random() * userInput.value) + 1;
    result1.innerHTML = `You chose : ${numberInput.value}, the machine chose : ${randomNum}.`;
    if (numberInput.value == randomNum) {
        result2.innerHTML = "You won!";
    } else {
    result2.innerHTML = "You lost!";
    }
}

gameBtn.addEventListener("click", playGame);