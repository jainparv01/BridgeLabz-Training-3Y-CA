// Q9: Random Math Quiz Generator

const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const selectedOperator = operators[randomIndex];

let correctAnswer;

switch (selectedOperator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = (firstNumber / secondNumber).toFixed(2);
        break;
}

console.log(`Question: ${firstNumber} ${selectedOperator} ${secondNumber} = ?`);
console.log(`Correct answer: ${correctAnswer}`);
