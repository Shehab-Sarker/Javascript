const accountID = 144553
let accountEmail="sarkershehab123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountID=2  //not alloed
accountEmail="ahmmedshehab.com"
accountPassword="323432"
accountCity="Dhaka"

console.log(accountID);

/*
prefer not to use var . beacause of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity]);
