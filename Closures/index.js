/**
 * Closures in JS
 * Lexical Scope
 *
 * A closure is the combination of a function bundled together
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives a function access to its outer scope.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 *
 */

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

/**
 * Closure Scope Chain
 * A nested function's access to the outer function's scope includes the enclosing scope
 * of the outer function—effectively creating a chain of function scopes.
 */

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    // Function without name is called Anonymous function
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// Que 1: What will be logged to console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // Shadowing
    console.log(count); // 1
  }
  console.log(count); // 0
});

// Que 2: Write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// Que 3: Time Optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.log("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);

// Que 4: Block scope and setTimeout

function a() {
  for (var i = 0; i < 3; i++) {
    // "var" has a Function Scope whereas "let" has Block Scope
    setTimeout(function log() {
      console.log(i); // What will be logged?
    }, i * 1000);
  }
}

a(); // Output => 3 3 3 -> To fix it we can use "let" instead of "var"
