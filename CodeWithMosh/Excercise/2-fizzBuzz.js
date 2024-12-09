// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => Num
// Not a number => 'Not a number'

function fizzBuzz(num) {
  if (
    num === false ||
    num === undefined ||
    num === true ||
    num === 0 ||
    num === null ||
    num === " " ||
    num === NaN
  )
    return "Not a number";
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

console.log(fizzBuzz(false));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

function fizzBuzzOptimize(num) {
  if (typeof num !== "number") return "Not a number";
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

console.log(fizzBuzzOptimize(false));
console.log(fizzBuzzOptimize(3));
console.log(fizzBuzzOptimize(5));
console.log(fizzBuzzOptimize(15));
console.log(fizzBuzzOptimize(7));

// NaN -> typeof NaN (number)
