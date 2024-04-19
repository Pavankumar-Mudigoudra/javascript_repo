const accountId = 211200
let accountMail = "pavankumar@amazon.com"
var accountPassword = "012345"
accountCity = "Bengaluru"
let accountState;

 //accountId = 2 // not possible

console.log(accountId);

/*
prefer not use var because of block scope and functional scope
*/

console.table([accountId,accountMail,accountPassword,accountCity,accountState]);