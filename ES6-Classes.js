class Human {
  // In this syntax, the constructor is called automatically and we don't have to include the super() in
  // the child class
  gender = "female";

  // in ES6 we use arrow functions inside classes to avoid any issues with the 'this' keyword
  printGender = () => {
    console.log(this.gender);
  };
}

// ------------------------------------------------------------------------------------------------------

class Person extends Human {
  name = "Max";
  gender = "male";

  printMyName() {
    console.log(this.name);
  }
}

// Use the new keyword to to instantiate a new class
const person = new Person();

// Calling the methods from Human and Person
person.printGender();
person.printMyName();

// ------------------------------------------------------------------------------------------------------
