// Q3: Monthly Expense Tracker

const expenses = {
    food: 4500,
    travel: 1800,
    rent: 7000,
    bills: 1200,
    leisure: 1000
};

let totalExpense = 0;

// Add every category amount to the total.
for (const category in expenses) {
    totalExpense += expenses[category];
}

const averageExpense = totalExpense / Object.keys(expenses).length;

// Add 10% tax using an assignment operator.
let finalAmount = totalExpense;
finalAmount += totalExpense * 0.10;

console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Total before tax: Rs. ${totalExpense.toFixed(2)}`);
console.log(`Average expense: Rs. ${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: Rs. ${finalAmount.toFixed(2)}`);
