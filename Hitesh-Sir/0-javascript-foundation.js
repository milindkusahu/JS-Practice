/**
 * => In JS almost everything is an object.
 * => Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol
 *
 * => Non-Primitive Data Types: Object, Array, Function
 */

let name = "Hitesh"; // Variable
const pi = 3.14; // Constant

let number = 42; // Number
let text = "Hello World"; // String
let isTrue = true; // Boolean

let nothing = null; // Null -> returns object

let notDefined = undefined; // Undefined -> returns undefined
let symbol = Symbol("symbol"); // Symbol

// ================== CONVERSIONS ==================

let numberString = String(42); // Number to String
let stringNumber = Number("42"); // String to Number

// ================== OPERATORS ==================

let a = 10;
let b = 20;

let sum = a + b; // Addition
let sub = a - b; // Subtraction
let mul = a * b; // Multiplication
let div = a / b; // Division
let mod = a % b; // Modulus
let power = a ** b; // Exponentiation

let inc = a++; // Increment
let dec = a--; // Decrement

postIncrement = a++; // Post Increment
preIncrement = ++a; // Pre Increment

postDecrement = a--; // Post Decrement
preDecrement = --a; // Pre Decrement

// ================== COMPARISON ==================

let isEqual = a == b; // Equal to
let isNotEqual = a != b; // Not Equal to
let isStrictEqual = a === b; // Strict Equal to
let isStrictNotEqual = a !== b; // Strict Not Equal to
let isGreaterThan = a > b; // Greater than
let isLessThan = a < b; // Less than
let isGreaterOrEqual = a >= b; // Greater than or Equal to
let isLessOrEqual = a <= b; // Less than or Equal to

// ================== LOGICAL ==================

let and = a && b; // Logical AND
let or = a || b; // Logical OR
let not = !a; // Logical NOT

// ================== MATH METHODS ==================

Math.max(1, 2, 3, 4, 5); // Max
Math.min(1, 2, 3, 4, 5); // Min
Math.round(4.7); // Round off
Math.ceil(4.4); // Round up
Math.floor(4.7); // Round down
Math.random(); // Random

// ================== STRING METHODS ==================

let length = text.length; // Length
let upperCase = text.toUpperCase(); // Upper Case
let lowerCase = text.toLowerCase(); // Lower Case
let charAt = text.charAt(0); // Character at
let indexOf = text.indexOf("Hello"); // Index of
let lastIndexOf = text.lastIndexOf("Hello"); // Last Index of
let includes = text.includes("Hello"); // Includes
let replace = text.replace("Hello", "Hi"); // Replace
let split = text.split(" "); // Split
let substring = text.substring(0, 5); // Substring
let slice = text.slice(0, 5); // Slice
let trim = "   Hello   ".trim(); // Trim
let startsWith = text.startsWith("Hello"); // Starts with
let endsWith = text.endsWith("World"); // Ends with
let repeat = text.repeat(2); // Repeat

// ================== ARRAY METHODS ==================

let fruits = ["Apple", "Banana", "Mango"];



// ================== OBJECTS ==================

let person = {
  name: "Hitesh",
  age: 24,
  isMale: true,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
  },
  sayHello: function () {
    console.log("Hello");
  },
};

// ================== ARRAY ==================
