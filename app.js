/****** Console *****/

/*
console.log(true);
console.log([1, 2, 3]);

const obj = {
  a: 1, 
  b: 2, 
  c: 3
}
console.log(obj);

console.table(obj);

console.error("STOP!");

console.clear();

console.warn('STOP!!!!');

console.time('hi');
// Tells you how much time it takes between time and timeEnd
console.log('hello');
console.log('hello');
console.log('hello');

console.timeEnd('hi');
*/


/****** Variables -  Var, Let, Const *****/

/*
var name = 'john';
name = 'bob';
console.log(name);


//Init Variable
var greeting;
console.log(greeting);
greeting = true;
console.log(greeting);

//Let and Const

//Let - can be reassigned like normal
let othername = 'john'; 
othername = 'Leo';

//Const - cannot be re-assigned

const name = 'john';
name = 'bob';

const greeting;
 //needs to be initialized with a value
 console.clear();

*/



/****** Data Types *****/


//Primitive - string, number, boolean, null, undefined, symbol

/*

const newname = 'john';
console.log(typeof newname);
const age = 32;
console.log(typeof age);
const hasKids = false;
console.log(typeof hasKids);
const car = null;
console.log(typeof car);
let lastName;
console.log(typeof lastName);
const sym = Symbol();
console.log(typeof sym);

//Reference - objects - Object literals and Arrays

const hobbies = ['read', 'write', 'lift'];
console.log(typeof hobbies);

const address = {
  city: 'Glastonbury', 
  state: 'CT'
}
console.log(typeof address);
console.clear();


*/

/****** Type Conversion *****/

/*

let val;

//number to string

val = 5;
val = String(5555);
val = String(4+4);
val = String(true);
val = String(new Date());
val = String([1, 2, 3, 4]);

console.log(val);
console.log(typeof val);
console.log(val.length);

//To String

val = (5).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

//Strings to Numbers

val = '5';
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('testing');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//Parse Int and Parse Float

val = parseInt('100');
val = parseFloat('100.30');
console.log(val);


*/

/****** Type Coercion - Let Javascript do the conversion for you *****/

/*
const val1 = String(5);
const val2 = 6;

const sum = val1 + val2;
//returns a string
console.log(sum);
console.log(typeof sum);

console.clear();

*/

/****** Numbers and Math Object *****/

/*
const num1 = 100;
const num2 = 50;

let value;

value = num1 + num2;
value = num1*num2;
value = num1-num2;
value = num1/num2;
value = num1%num2;

//Math Object

value = Math.PI;
value = Math.E;
value = Math.round(2.8);
value = Math.round(2.3);

value = Math.ceil(2.2);
value = Math.floor(2.8);
value = Math.sqrt(64);
value = Math.abs(-8);
value = Math.pow(8, 2);

value = Math.min(1, 2, 33, -12);
value = Math.max(22, 3, 44, 23);

value = Math.random();

value = Math.floor(Math.random() * 20 + 1);  
console.log(value);

console.clear();

*/

/****** Strings *****/

/*
const firstName = 'John';
const lastName = 'Mendes';

let value2; 
//Concatenation
value2 = firstName + lastName;
value2 = firstName + ' ' + lastName;
value2 = 'Hello my name is ' + firstName + ' and I am ' + age;

//Escaping 
value2 = 'That\'s awesome!'

//Length

value2 = firstName.length;

//Concat

value2 = firstName.concat(' ', lastName);

//Change Case
value2 = firstName.toUpperCase();
value2 = lastName.toLowerCase();

//Index and Index Of
value2 = firstName[2];
value2 = firstName.indexOf('o');
value2 = firstName.lastIndexOf('o');
//Index as argument, gives the character
value2 = firstName.charAt('2');

//Get Last char
value2 = firstName.charAt(firstName.length - 1);

//substring
value2 = firstName.substring(0, 3);

//slice
value2 = firstName.slice(0, 2);

//split 
value2 = firstName.split(' ');


//replace 

value2 = firstName.replace('John', 'Leo');
//includes 

value2 = firstName.includes('Leo');

console.log(value2);

*/

/****** Template Literals ES6 *****/


/*
const name3 = 'John';
const age3 = 32;
const job3 = 'Web Developer';

//Without template strings  ES5

let html;

html = '<ul><li>Name: ' + name3 + '</li><li>Age: '+ age3 + '</li><li>Job: ' + job3 + '</li></ul>';

document.body.innerHTML = html;

//With Template Literals/Strings

function sayHello() {
  return 'hello!';
}

html = `
  <ul>
  <li>${name3}</li>
  <li>${age3}</li>
  <li>${job3}</li>
  <li>${sayHello()}</li>
  <li>${age3 > 25 ? 'Yes!!!' : 'Noooo!!'}</li>
  </ul>
`
//You can also use expressions, functions, and ternirary/if else statements  inside ${ } 

document.body.innerHTML = html;

console.log(html);

*/


/****** Arrays *****/


/*

//Create arrays 

const numbers = [43, 54, 33, 12];

const numbers2 = new Array(13, 122, 34, 56, 44);

const fruits = ['Apple', 'Bannana', 'Orange'];

//many different data types
const mixedArray = [2, 'Hello', true, undefined, {a: 12}, new Date()];

console.log(mixedArray);

let arrayVal; 


//get array length

arrayVal = numbers.length;

//test if an array is an array
arrayVal = Array.isArray(numbers);

//Get single value 
arrayVal = numbers[2];

//insert into array
numbers[2] = 200;
//find Index of value

arrayVal = numbers.indexOf(67);


//MUTATING ARRAYS
//add
numbers.push(600);
numbers.unshift(120);
//take off
numbers.pop();
numbers.shift();


//SPLICE VALUES
numbers.splice(1, 1);
console.log(numbers.slice(0, 1));

numbers.reverse();


//Concat arrays 

arrayVal = numbers.concat(numbers2);

//Sorting Arrays 

arrayVal = fruits.sort();

//Sort numbers 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
arrayVal = numbers.sort(function(x, y) {
  return x - y;
});

//FIND 
function under50(num) {
  return num < 50;
}

arrayVal = numbers.find(under50);

console.log(numbers);
console.log(arrayVal);


*/



/****** Object Literals *****/

/*

const myPerson = {
  firstName : 'John', 
  lastName : 'Mendes',
  age : 32,
  address: {
    city: 'Glastonbury',
    state: 'CT'
  }, 
  getBirthYear : function() {
    return 2019 - this.age;
  }
}

console.log(myPerson.firstName);
console.log(myPerson.age);
console.log(myPerson['address']['city']);
console.log(myPerson.getBirthYear());


*/



/****** Dates and Times - DATE OBJECT *****/

/*

const today = new Date();
let birthday = new Date('2-8-1987');
birthday = new Date('2-8-1987 10:32:12');

console.log(today);
console.log(birthday);
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
alert(today.getTime());

birthday.setMonth(0);
birthday.setDate(8);
birthday.setFullYear(1987);
console.log(birthday);
 
console.log(typeof today);


*/

/****** If Else *****/

/*

//nothing new you don't already know
const id = 100;


//Test if variable is undefined - use the typeof check otherwise it will error out
if (typeof id !== 'undefined') {
  console.log(`The id is ${id}`);

} else {
  console.log('NO ID');
}

//Ternary operator 

console.log(id === 100 ? 'Yup!' : 'Nope');


//SWITCHES

const color = 'red';

switch(color) {
  case 'red':
    console.log('color is red');
    break;

  case 'blue':
    console.log('blue');
    break;

   default: 
    console.log('color isnt real');
    break; 

}

switch(new Date().getDay()) {
  case 0:
    console.log('Sunday');
    break;

  case 1:
    console.log('not sunday');
    break;
}


*/



/****** FUNCTIONS *****/

/*

//FUNCTION DECLARATIONS

function greet() {
  return 'Hello';
}

console.log(greet());


function greet2(firstName = 'Leo the Rabbit', lastName = 'Mendes') {
  if(typeof firstName === 'undefined') {firstName = 'Leo the Rabbit'};
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet2());


//FUNCTION EXPRESSIONS

const square = function(x) {
  return x*x;
};

console.log(square(8));

//IIFE's

(function() {
  console.log('This IFFE has been run');
})();

(function(name) {
  console.log(`This is ${name}`);
})('John');


//FUNCTIONS INSIDE OF OBJECTS - METHODS

const newObj = {
  add: function() {
    console.log('this add function has been called');
  }
}

newObj.add();

newObj.mynewfunc = function() {
  alert('Testing');
}

newObj.mynewfunc();


*/

/****** LOOPS  *****/

/*

//FOR LOOPS

for(let i = 0; i < 10; i++) {
  console.log(`The number is ${i}`)
}

for(let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log(`Two is the best number ever`);
    continue; //this tells the loop to go to the next iteration
    // break;
  }
  console.log(`The number is ${i}`);

}


//WHILE LOOPS

let i = 0;

while(i < 10) {
  console.log('Number ' + i);
  i++;
}

//DO WHILE LOOP - always runs at least once

let i = 0; 

do {
  console.log('Numbers ' + i);
  i++;
} 
while(i < 10);



//ARRAY 

const veggies = ['Lettuce', 'Asparagus', 'Brocollii'];

for(let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

//FOR EACH - can take in the element, index, and original array
veggies.forEach(function(veg) {
  console.log(veg);
});

//MAP METHOD 

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Meg'},
  {id: 3, name: 'Leo'}
];
//map creates a new array by using a callback function on each item in the calling array
const ids = users.map(function(el){
  return el.id;
});
console.log(ids);


//FOR IN

const user = {
  firstname : 'John',
  lastname : 'Mendes',
  age: 32
}

for(let x in user) {
  console.log(user[x]);
}

console.clear();


*/

/****** WINDOW METHODS - OBJECTS - PROPERTIES  *****/

/*

window.console.log(1, 2, 3);

//alert 

window.alert('Testing');

//prompt

const input = prompt();

alert(input);

//Confirm

if (confirm('Are you sure?')) {
  console.log('Yes');
} else {
  console.log('Good call!');
}


//Height and Width of window 

let winval;

//Outer height and width - from top of browser to bottom
winval = window.outerHeight;
winval = window.outerWidth;

//Inner height and width 
winval = window.innerHeight;
winval = window.innerWidth;


//Scroll points -  GOOD FOR ANIMATIONS! - check to see when a certain element is visible

winval = window.scrollY;
winval = window.scrollX;


//Location object

winval = window.location;
winval = window.location.hostname;
winval = window.location.port;
winval = window.location.href; //protocol hostname and port
winval = window.location.search; //pulls out the query string

//Redirect
window.location.href = 'https://www.wwe.com';

//Reload
window.location.reload();

//History Object

window.history.go(); 
winval = window.history.length;

// Navigator Object - browser

winval = window.navigator;
winval = window.navigator.appName;
winval = window.navigator.appVersion;
winval = window.navigator.userAgent;
winval = window.navigator.platform;
winval = window.navigator.vendor;
winval = window.navigator.language;


console.log(winval);


*/


/****** Block Scope with Let and Const  *****/

/*
//global scope

var a = 1;
let b = 2;
const c = 3;


function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function scope: ', a, b, c);
}
test();

if (true) {
  //BLOCK SCOPE
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('block scope: ', a, b, c);
}

for(let a = 0; a < 10; a++) {
  console.log(`Loop ${a}`);
}

console.log('Global scope: ', a, b, c);

*/