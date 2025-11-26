// Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person prototype method
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // inherit properties
  this.jobTitle = jobTitle;
}

// Inherit Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Employee prototype method
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
