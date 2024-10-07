/*
 * What is async and await?
=> "async" is a keyword which is used with function and "async" functions are a different thing and "await" can be used only inside "async" function.
=> There is "async" function you can use "await" inside this "async" function to handle Promises.
=> Promises are asynchronous.
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

/* ---------------------------------------------------
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

// Always returns a promise
async function getData() {
  // return "Hello Word";
  return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
// "async" and "await" are used to handle promises.

--------------------------------------------------- */

/* ---------------------------------------------------
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

// "await" can only be used inside an "async" function.
async function handlePromise() {
  const val = await p;
  console.log(val);
}
handlePromise();

--------------------------------------------------- */

/* ---------------------------------------------------
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!");
  }, 10000);
});

async function handlePromise() {
  const val = await p;
  console.log("Hello World"); // After 10 sec this line will get executed
  console.log(val);
}
handlePromise();

// function getData() {
//   // JS Engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Hello World!"); // First this will get printed
// }

// getData();

--------------------------------------------------- */

// Fetch() is given by Browsers, not by JavaScript.

const API_URL = "https://api.github.com/users/milindkusahu";

async function handlePromise() {
  try {
    const data = await fetch(API_URL); // Returns promise
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  // fetch() => Response.json() => jsonValue
}
handlePromise();

// The handle promise object started to executing and it saw "await", so it waited for the promise to be "resolved".
