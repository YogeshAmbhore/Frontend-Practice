let name = "Yogesh";
let salary = 50000;

console.log(name + salary + " Rupees");     // older style to concatenate strings
console.table([name, salary]);

console.log(`My name is ${name} and my salary is ${salary} rupess`);  //newer style to concatenate string

let gameName = new String('PlayGroundIndia'); // another style to define string variable

console.log(gameName);
console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.__proto__)

console.log(name.length);

console.log(typeof(gameName));

console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));
console.log(gameName.length);

let newGameName = gameName.toUpperCase()

console.log(newGameName);
console.log(gameName.toString()); // this will print the value of gameName
console.log(gameName.valueOf()); // this will print the value of gameName

let subStringGameName = gameName.substring(1, 6);  // used to slice string, we can give negative values to it, but this method will ignore the ngative values 
console.log(subStringGameName);

let anotherSubString = gameName.slice(-1, 6);  // used to slice sting, we can pass negative values to it.
console.log(anotherSubString);

let newStringOne =  "   Yogesh   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // used to remove the white spaces from the string

let url = "https://yogesh.com/yoges%20ambhore";
console.log(url.replace('%20', '-'));

console.log(url.includes('gesh'));
console.log(url.split('/'));