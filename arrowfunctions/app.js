// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello!');
// }

//sayHello();


//One line function does not need brackets
// const sayHello = () => console.log('Hello!!!');


//Return a value one line return
// const sayHello = () => 'Hello';
// console.log(sayHello());


//Return object
// const sayHello = () => ({ msg: 'Hello'});


//Single parameter = no parenthesis needed
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('John');

//More than 1 parameter = parenthesis needed
const sayHello = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`)

sayHello('John', 'Mendes');

const users = ['John', 'Leo', 'Meghan'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// const nameLengths = users.map(name => {
//   return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);