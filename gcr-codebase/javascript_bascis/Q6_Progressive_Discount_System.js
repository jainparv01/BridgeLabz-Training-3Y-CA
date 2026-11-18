// Q6: Progressive Discount System

const totalPurchase = 6500; // Change this value to test other discount slabs.

let discountRate = 0;

if (totalPurchase >= 10000) {
    discountRate = 25;
} else if (totalPurchase >= 5000) {
    discountRate = 15;
} else if (totalPurchase >= 2000) {
    discountRate = 5;
}

const discountAmount = totalPurchase * discountRate / 100;
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log(`Original total: Rs. ${Math.round(totalPurchase)}`);
console.log(`Discount: ${discountRate}%`);
console.log(`Final price: Rs. ${finalPrice}`);
