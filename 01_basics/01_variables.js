const accountNumber = 12345;
let accountHolderName = 'Suraj';
var accountEmail = 'sk@gmail.com'; 
accountCity = 'Pune';
let accountState;

/*
prefer not to use 'var' variable because of issue in block scope and functional scope

*/

//accountNumber = 909090;  assignment to const variable is not allowed
accountHolderName = 'Surak Kapse';
accountEmail = 'suraj@gmail.com';
accountCity = 'Hyderabad';

console.table([accountNumber, accountEmail, accountHolderName, accountCity, accountState]);
