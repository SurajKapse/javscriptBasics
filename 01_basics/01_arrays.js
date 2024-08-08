//array
const myArray = [1,2,3,4,5,6];

const myOtherArray = new Array(1,2,3,4);

console.log(myOtherArray);

console.log(myArray[1]);

//array methods
myArray.push(7)
myArray.pop();

console.log(myArray.includes(9));
console.log(myArray.indexOf(1));

const newArray = myArray.join()
console.log(typeof newArray);   // string

console.log(myArray);

const firstNames = ['suraj', 'shweta', 'dhiraj'];
const lastNames = ['kapse', 'kulkarni','gupta'];

const combineNames = [...firstNames, ...lastNames]  // ... is a spread operator used to show and combine all the records
console.log(combineNames);
