let jsUser = {
    name: "Yogesh",
    age: 29,
    email: "yogesh@gmail.com",
    location: "Lower Parel Mumbai",
    "home_town": "Parbhani", // if we drfine key like this there will be only one way to access it
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["home_town"]);

// let xVar = function sampleFunc(a, b){
//     return a + b;
// }

// console.log(xVar(2, 3));

// jsUser.email = "yogeshambhore@google.com";
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = "yogeshambhore@microsoft.com";
console.log(jsUser);

jsUser.greetings = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greetings());

console.log(jsUser);