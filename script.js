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
let answer;

// Adding event listeners to all buttons
clearButton.addEventListener('click', clearAll);
enterButton.addEventListener('click', enter);
deleteButton.addEventListener('click', del);

numberButtons.forEach(button => 
    button.addEventListener('click', () => {
        /* 
        Checks if firstNumber is assigned yet.

        If firstNumber & operand is undefined, just assign value of button to firstNumber.

        If firstNumber has a value assigned and the operand is undefined, that means they pressed a number button already, append and reassign to firstNumber.

        If secondNumber and operand is defined, then we know the user is appending to the secondNumber

        Else they are just beginning to type their secondNumber.
        */

        if (isUndefined(firstNumber) && isUndefined(operand)) { 
            firstNumber = parseFloat(button.textContent); 
            currentDisplay.textContent = firstNumber;
            console.log("Case 1: firstNumber: " + firstNumber);
        } else if (!isUndefined(firstNumber) && isUndefined(operand)) {
            appendToCurrentDisplay(button.textContent);
            firstNumber = parseFloat(currentDisplay.textContent);
            console.log("Case 2: firstNumber: " + firstNumber);
        } else if (!isUndefined(secondNumber) && !isUndefined(operand)) {
            appendToCurrentDisplay(button.textContent);
            secondNumber = parseFloat(currentDisplay.textContent);
            console.log("Case 1: secondNumber: " + secondNumber);
        } else {
            secondNumber = parseFloat(button.textContent);
            currentDisplay.textContent = secondNumber;
            console.log("Case 2: secondNumber: " + secondNumber);
        }
}));

operationButtons.forEach(button => 
    button.addEventListener('click', () => {
        /*
        Checks if there is the operand & firstNumber has been assigned yet.

        If both the operand and firstNumber is undefined, then they are trying to do some sort of arithemtic with zero (aka the starting value).

        If the operand is undefined but the firstNumber isn't, that means the user has finished inputting their number and are moving onto an arithmetic operation. 
        */

        if (isUndefined(operand) && !isUndefined(firstNumber)) {
            operand = button.textContent;
            appendToPreviousDisplay(button.textContent);
        }

        if (isUndefined(operand) && isUndefined(firstNumber)) {
            operand = button.textContent;
            appendToPreviousDisplay(button.textContent);
        }
}));


function appendToCurrentDisplay(number) {
    currentDisplay.textContent += number.trim();
}

function appendToPreviousDisplay(op) {
    /* 
    Takes in a button (which contains the operand) and assigns it to the 'operand' variable. Moves currentDisplay to previousDisplay while appending the operand to it. Afterwards, clear the currentDisplay readying it for new user input.
    */
    previousDisplay.textContent = currentDisplay.textContent; 
    previousDisplay.textContent += op;
    resetCurrentDisplay();
}

function isUndefined(variable) {
    return variable === undefined;
}

function del() {
    if (firstNumber === undefined) return; // If firstNumber was reset to undefined, skip to prevent NaN from being displayed.

    // Remove last digit + display new number
    firstNumber = Math.floor(firstNumber / 10);
    currentDisplay.textContent = firstNumber;

    // If firstNumber has become zero, reset it by reassigning to undefined otherwise next number will append to 0.
    if (firstNumber === 0 && currentDisplay.textContent == 0) {
        firstNumber = undefined;
        return;
    }

    return;
}

function enter() {
    console.log(operand + (typeof operand));
    switch (operand.trim()) {
        case "+":
            console.log("Case: Addition");
            answer = add(firstNumber, secondNumber);
            previousDisplay.textContent = firstNumber + operand + secondNumber;
            currentDisplay.textContent = answer;
            break;
        case "-":
            console.log("Case: Subtraction");
            previousDisplay.textContent = firstNumber + operand + secondNumber;
            answer = subtract(firstNumber, secondNumber);
            currentDisplay.textContent = answer;
            break;
        case "/":
            console.log("Case: Division");
            previousDisplay.textContent = firstNumber + operand + secondNumber;
            answer = divide(firstNumber, secondNumber);
            currentDisplay.textContent = answer;
            break;
        case "*":
            console.log("Case: Multiplication");
            previousDisplay.textContent = firstNumber + operand + secondNumber;
            answer = multiply(firstNumber, secondNumber);
            currentDisplay.textContent = answer;
            break;
        default:
            console.log("Case: Default");
            previousDisplay.textContent = firstNumber + operand + secondNumber;
            break;
    }
    return;
}

function clearAll() {
    currentDisplay.textContent = 0;
    previousDisplay.textContent = ' ';

    firstNumber = undefined;
    secondNumber = undefined;
    operand = undefined;

    console.clear();
    return;
}

function resetCurrentDisplay() {
    currentDisplay.textContent = '0';
    return;
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