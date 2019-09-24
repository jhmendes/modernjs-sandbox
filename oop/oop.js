/********** Object Oriented JS - ES5 version **********/

/********** Constructors & 'This'  **********/


//Person constructor
/*
function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.getAge = function() {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const john = new Person('John', 32, '02/08/1987');
const leo = new Person ('Leo', 3, '2016');
console.log(john);
console.log(john.getAge());
console.log(leo);
*/

/********** Built in Constructors **********/

//String 

const name1 = 'Leo';
const name2 = new String('Leo');

// name2.foo = 'bar';

console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

//Number 

const num1 = 5;
const num2 = new Number(5);

console.log(num2);

//Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);


//Function 

const getSum1 = function(x,y) {
  return x+y;
}

console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');

//Objects

const obj = {
  name: 'John'
}

const obj2 = new Object({name: 'Leo'});

//Arrays

const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);


//RegExpressions

const re1 = /\w+/;
const re2 = new RegExp('\w+');