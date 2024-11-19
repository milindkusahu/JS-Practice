// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>  Output: 34
// Input: [10, 5, 10]             ----->>  Output: 5

// Brute Force Approach
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // O(n)

  uniqueArr.sort((a, b) => {
    // O(nlogn)
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    // If there is only one number in an array then we don't want the checks.
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // Output: 34
console.log(secondLargest([10, 5, 10])); // Output: 5

/**
 * Time Complexity => O(nlogn)
 * Space Complexity => O(n)
 */

// Optimized Approach

// [12, 35, 1, 10, 34, 1]

function secondLargestOptimized(arr) {
  let largest = -1;
  let secondLargest = -1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // O(n)
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestOptimized([12, 35, 1, 10, 34, 1])); // Output: 34
console.log(secondLargestOptimized([10, 5, 10])); // Output: 5

/**
 * Time Complexity => O(n)
 * Space Complexity => O(1)
 */
