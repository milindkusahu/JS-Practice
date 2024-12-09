/**
 * Prime numbers are numbers which has only Two factors, 1 and the number itself.
 *
 * Prime (Whose factors are only 1 and itself)
 *
 */

function showPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) console.log(num);
  }
}

function isPrime(num) {
  for (let factor = 2; factor < num; factor++) {
    if (num % factor === 0) return false; // It has factor other than 1 and the number itself
  }
  return true;
}

console.log(showPrimes(20));
