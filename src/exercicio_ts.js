"use strict";
function multiply(a, b) {
    return a * b;
}
const multiplyWithArrow = (a, b) => a * b;
function greeting(name) {
    return `Olá ${name}!`;
}
const greetingWithArrow = (name) => `Olá ${name}!`;
console.log(multiply(2, 50));
console.log(multiplyWithArrow(50, 2));
console.log(greeting("Gian"));
console.log(greetingWithArrow("Giovanni"));
console.log(greetingWithArrow("EBAC online"));
