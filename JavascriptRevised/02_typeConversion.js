let score = "33";

console.log(typeof(score));

let conversionValue = Number(score);
console.log(typeof(conversionValue));
console.log(conversionValue);

let score2 = "33abc";

console.log(typeof score2);

let scoreConversion = Number(score2);
console.log(scoreConversion);
console.log(typeof scoreConversion);

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
*/

let name = "";
let name2 = "Yogesh";
console.log(typeof name);

let nameConversion = Boolean(name);
console.log(nameConversion);

let name2Conversion = Boolean(name2);
console.log(name2Conversion);

let num = 33

let stringNumber = String(num);
console.log(stringNumber);
console.log(typeof stringNumber);