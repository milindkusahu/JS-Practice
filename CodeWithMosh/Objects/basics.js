// Object-oriented Programming (OOP)

// Factory Functions
// Camel Notation: oneTwoThreeFour (recommended)

function createCircle(radius) {
  return {
    radius, // or radius: radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1); // { radius: 1, draw: [Function: draw] }

/** Constructor Functions
 *
 * Camel Notation: oneTwoThreeFour
 * Pascal Notation: OneTwoThreeFour (recommended for creating Constructor functions)
 *
 * => this keyword refer to an Empty Object.
 * => new keyword:
 *  -> first creates an Empty Object.
 *  -> Then it will set this to point to this Object.
 *  -> Finally, return the Object from the Circle() function.
 * => If we don't define new keyword,
 * by default this will point to the global object which is Window.
 *
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle); // Circle { radius: 1, draw: [Function (anonymous)] }

// Dynamic Nature of Objects

const circle2 = {
  radius: 1,
};

circle2.color = "yellow";
circle2.draw = function () {};

delete circle2.color;
delete circle2.draw;

console.log(circle2); // { radius: 1 }

/** Constuctor Property
 *
 * Every Object in JS has a property called Constuctor
 * and that references the function that was used to Constuct or Create that Object.
 *
 * new String(); // '', "", ``
 * new Boolean(); // true, false
 * new Number(); // 1,2,3
 *
 */

let x = {}; // let x = new Object();

// In JS Functions are Object

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

// Reference Types

// let a = 10;
// let b = a;

// a = 20;
// console.log(a, b); // 20, 10

let a = { value: 10 };
let b = a; // Adresss or Reference of a is getting copied or In other words, both a and b are pointing to the same object in the memory.

a.value = 20;

console.log(a); // { value: 20 }
console.log(b); // { value: 20 }

/* 

=> When we use an Object, that object is not stored in the variable "a". The object is stored somewhere in the Memory and the address of that Memory location is stored inside that variable.

=> Primitives are copied by their Value.

=> Objects are copied by their reference.

*/

// Primitive only values are copied

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // 10

// Objects are copied by their reference

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // {value: 11}

// Enumerating properties of an Object

const circle3 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle3) {
  console.log(key, circle3[key]);
}
// radius 1
// draw [Function: draw]

/*

for (let key of circle3) {
  console.log(key); // Error -> Objects are not iterable
}
*/

// Takeaways: Use for-in loop for looping over Objects

// Cloning Objects

/* Method -> 1
let another1 = {};

for (let key in circle3) {
  another1[key] = circle[key];
}

console.log(another1); // { radius: 1, draw: [Function (anonymous)] }

*/

/* Method -> 2
const another1 = Object.assign({}, circle3);

console.log(another1); // { radius: 1, draw: [Function (anonymous)] }

*/

// Method -> 3

const another1 = { ...circle3 };

console.log(another1); // { radius: 1, draw: [Function: draw] }
