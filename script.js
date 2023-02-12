const students = [
  { name: "Paula", grade: 8 },
  { name: "Ana", grade: 4 },
  { name: "Oanh", grade: 10 },
  { name: "Rosemhay", grade: 8 },
  { name: "Elivelton", grade: 5 },
  { name: "Lean", grade: 9 },
  { name: "Ricardo", grade: 6 },
  { name: "Priscila", grade: 8.5 },
];

function notasMaior6(arr) {
  return arr.filter((item) => item.grade >= 6);
}

console.log(notasMaior6(students));
