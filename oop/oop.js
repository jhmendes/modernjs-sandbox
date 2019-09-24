/********** Object Oriented JS - ES5 version **********/

/********** Constructors & 'This'  **********/


//Person constructor

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

