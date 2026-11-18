// Q4: Academic Performance Evaluator

// Enter marks for five subjects. Each subject is assumed to be out of 100.
const marks = [82, 76, 91, 68, 88];

const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

let result;

// A student is detained automatically if even one subject has less than 35.
if (marks.some(mark => mark < 35) || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}

console.log(`Total marks: ${totalMarks}/${marks.length * 100}`);
console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
