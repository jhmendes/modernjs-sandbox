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
/*
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

console.log(typeof num2);

//Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);


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

*/

/********** Prototypes **********/

//Object.prototype

//Person.prototype 

/*
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.getAge = function() {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//Get Age

Person.prototype.getAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}!`;
}

//Gets Married

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}
const john = new Person('John', 'Mendes', '02-08-1987');

const meg = new Person('Meghan', 'Sullivan', 'March 1st, 1990');

console.log(john);
console.log(john.getAge());
console.log(meg.getFullName());

console.log(meg);
meg.getsMarried('Mendes');
console.log(meg);

*/


/********** Prototypal Inheritance **********/
/*
//Person Constructor

function Person(firstname, lastname) {
  this.firstname = firstname,
  this.lastname = lastname

}

//Prototype method

Person.prototype.greeting = function() {
  return `Hello there ${this.firstname} ${this.lastname}`;
}

const person1 = new Person('John', 'Mendes');

console.log(person1.greeting());




//Custom Constructor

function Customer(firstname, lastname, phone, membership) {
Person.call(this, firstname, lastname);
this.phone = phone; 
this.membership = membership;
}

//Inherit Person Prototype methods

Customer.prototype = Object.create(Person.prototype);

console.log(Customer);

Customer.prototype.constructor = Customer;

//Create a customer

const customer1 = new Customer('Leo', 'Mendes', '999-999-9999', 'Standard');

console.log(customer1);

*/

/********** Object.create **********/

/*

const personPrototype = {
  greeting: function() {
    return `Hello there ${this.firstname} ${this.lastname}`;
  }, 
  changeLastName: function(newLastName)  {
    return this.lastname = newLastName;
  }
 
}

const newperson = Object.create(personPrototype);

newperson.firstname = 'Tony';
newperson.lastname = 'Stark';

newperson.changeLastName('Rogers');

// console.log(newperson);

console.log(newperson.greeting());


const person2 = Object.create(personPrototype, {
  firstname: {value: 'John'},
  lastname: {value: 'Mendes'}
});

console.log(person2);

*/

/********** ES6 Classes **********/

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hey whats up, ${this.firstName} ${this.lastName}?`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    console.log(ageDate.getUTCFullYear());
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static addNums(x, y) {
    return x+y; 
  }
}

const person1 = new Person('John', 'Mendes', '02-08-1987');

console.log(person1);
console.log(person1.greeting());
console.log(person1.calculateAge());

console.log(Person.addNums(2, 2));


/********** ES6 Subclasses (similar to prototypal inheritance **********/

  class Person2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;  
    }

    greeting() {
      return `${this.firstName}, ${this.lastName}`;
    }
  }


  class Customer extends Person2 {
    constructor(firstName, lastName, phone, membership) {
      super(firstName, lastName);
      this.phone = phone;
      this.membership = membership;
    }

    static getMembershipCost() {
      return 500;
    }
  }

  const newCustomer = new Customer('Leo', 'Mendes', '999-999-8888', 'Premium');

  console.log(newCustomer);
  console.log(newCustomer.greeting());
  console.log(Customer.getMembershipCost());