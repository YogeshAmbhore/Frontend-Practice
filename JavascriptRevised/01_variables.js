const accountId = 144553;
let accountEmail = "example@accountEmail.com";
var accountPassword = "Root@123";
accountCity = "Lower Parel";
let accountState;  //undefined

// accountId = 2; // Not allowed to change constants


accountEmail = "newexample@accountEmail.com";
accountPassword = "Revised@123";
accountCity = "Mumbai";

console.log(accountId);
console.log(accountEmail, accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
console.log(accountState);
console.log(typeof accountEmail)

/*
prefer not to use var,
because of isuue of block scope and function scope
*/