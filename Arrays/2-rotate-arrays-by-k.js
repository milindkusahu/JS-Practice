// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ---->>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ---->>  Output: [3,99,-1,-100]

function rotateArr(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size); // O(n)
  nums.unshift(...rotated); // O(n)

  return nums;
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArr([-1, -100, 3, 99], 2));

/**
 * Time Complexity => O(n)
 * Space Complexity => O(n)
 */

function rotateArrayOptimized(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1); // [7,6,5,4,3,2,1] => O(n)
  reverse(nums, 0, k - 1); // [5,6,7,4,3,2,1] => O(k)
  reverse(nums, k, nums.length - 1); // [5,6,7,1,2,3,4] => O(n-k)

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    // O(n)
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
}

console.log(rotateArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrayOptimized([-1, -100, 3, 99], 2));

/**
 * Time Complexity => O(n)
 * Space Complexity => O(1)
 */
