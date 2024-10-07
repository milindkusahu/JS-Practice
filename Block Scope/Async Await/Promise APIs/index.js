// // -----------------Block in JS-------------------------
// {
//   // This curly braces is a block in JS.
//   // Also, known as Compound Statement
// }

// if (true) {
//   // Block grouping multiple statements
//   var a = 10;
//   console.log(a);
// }

// // -----------------Scope in JS-------------------------

// {
//   var a = 10; // Global Scope

//   let b = 20; // Block Scope
//   const c = 30; // Block Scope

//   // Let and Const are Block Scope.

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// // => We can access "a" globally, whereas "b", "c" can only access inside the {} curly braces.

// console.log(a);
// console.log(b); // Reference error (b is not defined), and program stops here.
// console.log(c);

// --------------Shadowing in JS------------------------
// var a = 100;
// let b = 100;
// const c = 100;

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // 10
//   console.log(b); // 20 (b = 20 is Shadowing b = 100)
//   console.log(c); // 30 (c = 30 is Shadowing c = 100)
// }
// console.log(a); // 10
// console.log(b); // 100
// console.log(c); // 100

// --------------Illegal Shadowing------------------------
// let a = 20;
// {
//   let a = 20;
//   // var a = 20; // Illegal Shadowing (Uncaught SyntaxError: Identifier 'a' has already been declared.)
// }

const b = 20;
{
  // Lexical Scope
  const b = 100;
  {
    const b = 200;
    console.log(b);
  }
}
console.log(b);
