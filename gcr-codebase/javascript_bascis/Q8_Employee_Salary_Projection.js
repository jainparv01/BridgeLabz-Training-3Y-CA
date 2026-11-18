// Q8: Employee Salary Projection

let currentSalary = 30000;
const annualIncrementRate = 8; // Percentage increase every year.
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    // Increase the salary by the given percentage.
    currentSalary += currentSalary * annualIncrementRate / 100;
    currentSalary = Math.round(currentSalary);

    salaryProjection.push({
        Year: year,
        Salary: `Rs. ${currentSalary.toLocaleString("en-IN")}`
    });
}

console.table(salaryProjection);
