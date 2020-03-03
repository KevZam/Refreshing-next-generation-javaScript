// The Spead Operator is used to split up array elements or object properties
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: "Max"
};

const newPerson = {
  ...person,
  age: 28
};

console.log(newPerson);
// ------------------------------------------------------------------------------------------------------

// The Rest Operator is used to merge a list of function arguments into an array, you can then use arr
// functions on them.
function sortArgs(...args) {
  return args.sort();
}

const filter = (...args) => {
  return args.filter(el => el === 1);
};

console.log(filter(1, 2, 3));
