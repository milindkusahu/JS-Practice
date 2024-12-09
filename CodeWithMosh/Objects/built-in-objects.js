// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Getting a random number between two values

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomNum(2, 3)); // 2.197517035860618
console.log(getRandomNum(2, 3)); // 2.4097946948623177
console.log(getRandomNum(2, 3)); // 2.6422183504627217

console.log(Math.round(1.9)); // 2

console.log(Math.max(1, 5, 3, 6)); // 6

console.log(Math.min(1, 5, 3, 6)); // 1
