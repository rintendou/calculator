// Initializing all variables
const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const enterButton = document.querySelector(".enter");
const pointButton = document.querySelector(".point");


let firstNumber;
let secondNumber;
let operand;

// Adding event listeners to all buttons
clearButton.addEventListener('click', clear);

numberButtons.forEach(button => 
    button.addEventListener('click', () => {
        if (isEmpty(firstNumber)) { 
            console.log(isEmpty(firstNumber));
            firstNumber = button.textContent; 
            currentDisplay.textContent = firstNumber;
        } else {
            appendToCurrentDisplay(button.textContent);
        }
}));

operationButtons.forEach(button => button.addEventListener('click', () => {

}));


function appendToCurrentDisplay(number) {
    currentDisplay.textContent += number
    firstNumber = currentDisplay.textContent;
    console.log(firstNumber)
}

function isEmpty(v) {
    return v === undefined;
}

function del() {

}

function enter() {

}

function clear() {
    currentDisplay.textContent = 0;
    previousDisplay.textContent = ' ';

    firstNumber = undefined;
    secondNumber = undefined;
    operand = undefined;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}