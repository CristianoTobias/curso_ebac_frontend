function multiply(a: number, b: number): number {
  return a * b;
}

const multiplyWithArrow = (a: number, b: number): number => a * b;

function greeting(name: string): string {
  return `Olá ${name}!`;
}

const greetingWithArrow = (name: string): string => `Olá ${name}!`;

console.log(multiply(2, 50));
console.log(multiplyWithArrow(50, 2));
console.log(greeting("Gian"));
console.log(greetingWithArrow("Giovanni"));
console.log(greetingWithArrow("EBAC online"));

