let strOne = "YogeshAmbhore";
let strTwo = 'Yogesh Ambhore';

console.log(strOne);
console.log(strTwo);

console.log("length of string one is", strOne.length);
console.log("length of string two is", strTwo.length);


// Template literals (This are special strings like formatted strings in python)
let special_string = `This is special string by template literals`;
console.log(special_string);
console.log(typeof special_string)

let age = 27;
let output_string = `My name is ${strTwo} and my age is ${age}`;
console.log(output_string);
// console.log(`My name is ${strTwo} and my age is ${age}`);

console.log(strOne.toUpperCase());
console.log(strOne.toLowerCase());

let string_with_whitespaces = '      Welcome to new course     ';
console.log(string_with_whitespaces.trim());