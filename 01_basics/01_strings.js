const name = 'Suraj Kapse';
const age = 25;

//console.log(name + age + ' testing string example ');

console.log(`Hello, My Name is ${name} and my age is ${age}`);


const gameName = new String('PUBG, TEMPLE-RUN');
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(1));

const newString = gameName.substring(0, 7);
console.log(newString);

const otherString = gameName.slice(-16, 7);
console.log(otherString);