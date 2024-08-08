const user = {
    name : 'Suraj',
    age : 25 ,
    email: 'suraj@gmail.com',
    city : 'Pune',
    isLoggedIn : 'false',
    lastLoginDays : ['monday', 'tuesday']
}

console.log(user);


user.greetings = function(){
    console.log(`Hello ${this.name} , How r u?`)
}

//console.log(user.greetings());

//---------------------------------------------------------------

const tinderUser = new Object();
tinderUser.id = '123456',
tinderUser.name = 'Suraj',
tinderUser.isLoggedIn = 'false',
tinderUser.city = 'Pune'

console.log(tinderUser);

const regularUser = {
    email : 'sk@gmail.com',
    fullName : {
        firstName : 'Dhiraj',
        lastName : 'kapse'
    },
    age : 27
}

console.log(regularUser.fullName);

const users = [
    {
    id : '12',
    name : 'Suraj Kapse',
    age : '25',
    city : 'Hyderabad'
},
{
    id : '123',
    name : 'Dhiraj Kapse',
    age : '27',
    city : 'Pune'
}
]
console.log(users[1].name)
