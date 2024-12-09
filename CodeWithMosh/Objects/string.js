// String Primitive
const message = "Hello there!";

// String Object
const another = new String("  Hello there!  ");

console.log(typeof message); // string
console.log(typeof another); // object

console.log(message.length); // 12

console.log(message.split(' ')); // [ 'Hello', 'there!' ]

console.log(message[0]); // H

console.log(message.includes("llo")); // true

console.log(message.startsWith("H")); // true

console.log(message.endsWith("!")); // true

console.log(message.indexOf("th")); // 6

console.log(message.replace("there!", "Milind")); // Hello Milind => Returns new string does not modify original string.

console.log(message.toLowerCase()); // hello there!

console.log(message.toUpperCase()); // HELLO THERE!

console.log(another.trim()); // Hello there! => Removes white spaces

// Escape Notation

const str = 'hello world\'s';

console.log(str); // hello world's

const str1 = 'Hello\nWorld';

console.log(str1); // Hello => Prints in new line
                   // World

/*

Object {} => object literal
Boolean true, false => boolean literal
String '', "" => string literal

*/

// Template Literals

const str2 = `Hello there ${message}`

console.log(str2); // Hello there Hello there!

            