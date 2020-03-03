// Easily extract array elements or object properties and store them in variables

// Array Destructuring, by order of values. You can use an empty , , to skip a number in the array

[a, b] = ["Hello", "Max"];
console.log(a); // Hello
console.log(b); // Max

const numbers = [1, 2, 3];
[num1, num2] = numbers;

console.log(num1, num2); // 1 2

// Object Destructuring, by name of object property
const { name } = { name: "Max", age: 28 };
console.log(name); // Max
console.log(age); // undefined
