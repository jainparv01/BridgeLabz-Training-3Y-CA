// Q2: Multi-Type Data Summary

const userName = "Parv";
const userAge = 19;
const isStudent = true;
const subjects = ["JavaScript", "Java", "DSA"];
const student = { name: "Parv", course: "B.Tech CSE" };
const middleName = null;
let optionalValue;

const dataReport = [
    { label: "User name", value: userName, type: typeof userName },
    { label: "User age", value: userAge, type: typeof userAge },
    { label: "Is student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "Student object", value: JSON.stringify(student), type: typeof student },
    { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "Optional value", value: optionalValue, type: typeof optionalValue }
];

console.table(dataReport);
