// Arrays are object

const numbers = [3, 4];

// End
numbers.push(5, 6);
console.log(numbers); // [ 3, 4, 5, 6 ]

// Beginning
numbers.unshift(1, 2);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

// Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5, 6]

numbers.splice(3, 1);
console.log(numbers); // [1, 2, 'a', 3, 4, 5, 6]

// Finding Elements in Primitives

const numbers1 = [1, 2, 3, 1, 4];

console.log(numbers1.indexOf(2)); // true (exists)
console.log(numbers1.indexOf("2")); // false (do not exist)

console.log(numbers1.lastIndexOf(1)); // 3

console.log(numbers1.indexOf(1) !== -1); // true
console.log(numbers1.includes(1)); // true (element exists)

// Finding Elements in Reference Types

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find((course) => course.name === "a");
console.log(course); // { id: 1, name: 'a' }

const courseIndex = courses.findIndex((course) => course.name === "b");
console.log(courseIndex); // 1

// Removing Elements

const numbers2 = [1, 2, 3, 4];

// End
const last = numbers2.pop();
// console.log(last); // 4

// Begining
const first = numbers2.shift();
// console.log(first); // 1

// Middle
// numbers2.splice(2, 2);
console.log(numbers2); // [ 1, 2 ] => Two element 3 and 4 got removed.

