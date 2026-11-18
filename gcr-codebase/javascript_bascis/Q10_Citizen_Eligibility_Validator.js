// Q10: Citizen Eligibility Validator

const age = 19;
const isCitizen = true;

let eligibility;

// The assignment has overlapping conditions:
// "citizen and age >= 18" means all services, but it also asks
// citizens aged 18-20 to be eligible for voting only.
// To make both outcomes possible, this solution assumes 21+ for all services.
if (isCitizen) {
    if (age >= 21) {
        eligibility = "Eligible for all services.";
    } else if (age >= 18 && age <= 20) {
        eligibility = "Eligible to vote only.";
    } else {
        eligibility = "Not eligible yet.";
    }
} else {
    if (age >= 18) {
        eligibility = "Only age criteria met.";
    } else {
        eligibility = "Not eligible yet.";
    }
}

console.log(eligibility);
