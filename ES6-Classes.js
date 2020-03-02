class Human {
  constructor() {
    this.gender = "female";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    // If you extend from another class, you have to include the super() inside your constructor
    // in order to call the constructor in the parent class and set it up correctly
    super();
    this.name = "Max";
    this.gender = "male";
  }

  printMyName() {
    console.log(this.name);
  }
}

// Use the new keyword to to instantiate a new class
const person = new Person();

// Calling the methods from Human and Person
person.printGender();
person.printMyName();
