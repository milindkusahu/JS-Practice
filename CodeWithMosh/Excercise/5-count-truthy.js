/** Falsy Values
 * undefined
 * null
 * ''
 * false
 * 0
 * NaN
 */

function countTruthy(arr) {
  let count = 0;
  for (let value of arr) {
    if (value) count++;
  }
  return count;
}

console.log(countTruthy([1, 2, 3])); // 3
console.log(countTruthy([0, 1, 2, 3])); // 3
console.log(countTruthy([0, null, undefined, "", NaN, 2, 3])); // 2
