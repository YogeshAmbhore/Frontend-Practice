let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23);
let myCreatedDate = new Date("2024-01-23");

console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

console.table([myDate, myCreatedDate]);