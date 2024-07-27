let arrOne = ['one', 'two', 'three', 'four']; //valid array
let arrTwo = ['one', 'two', 'three', 'four', 5, true]; //this is also valid array

// for (let i=0; i<=arrOne.length; i++){
//     console.log(arrOne[i]);
// }

// for (let i=0; i<arrTwo.length; i++){
//     console.log(arrTwo[i]);
// }

let arrThree = new Array(1, 2, 4, 5, 3, 6);

// console.log(arrThree);
// console.log(arrThree.indexOf(3));
// arrThree.push(8);
// console.log(arrThree);
// arrThree.pop(8);
// console.log(arrThree);
// arrThree.pop();
// console.log(arrThree);

// console.log(arrThree.includes(9));
// console.log(arrThree.includes(3));

// console.log(arrThree.indexOf(9));

console.log("A ", arrThree);

let myNewArray = arrThree.join()  // returns string formate of an  arrThree
// console.log(myNewArray);

let arrFour = arrThree.slice(1, 4);  // returns array with excluded last index range
console.log(arrFour);

console.log("B ", arrThree);

let arrFive = arrThree.splice(1, 4);  // returns array with included last index range and modifies to original array by removing spliced portion
console.log(arrFive);
console.log("C ", arrThree);

