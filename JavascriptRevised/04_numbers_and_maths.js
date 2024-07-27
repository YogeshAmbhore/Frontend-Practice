let score = 400;  // way to define number variable
console.log(score);

let balance = new Number(400);
console.log(balance);  // another way to define number variable

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

let anotherNumber = 10000.891;
console.log(anotherNumber.toPrecision(5));

let oneAnother = 1000000;
console.log(oneAnother.toLocaleString());
console.log(oneAnother.toLocaleString('en-IN'));

/* ----------------Maths------------------ */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.round(4.5));
console.log(Math.pow(2, 3));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.random());
