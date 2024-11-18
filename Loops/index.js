let num = [3, 54, 1, 2, 4];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// ForEach Loop
num.forEach((ele) => {
  console.log(ele);
});

/**
 * Array.from() => Used to create an array from any other object.
 * For example: Array.from('Milind')
 * Output: [ 'm', 'i', 'l', 'i', 'n', 'd' ]
 */

// for...of (Recommended)
for (let item of num) {
  console.log(item);
}

// for...in
for (let i in num) {
  console.log(i);
}
