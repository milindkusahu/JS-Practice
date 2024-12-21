// Playground

function atm(initialBalance) {
  let balance = initialBalance;

  function withdraw(amount) {
    if (amount > balance) {
      return "Not Allowed";
    } else {
      balance -= amount;
      return balance;
    }
  }
  return withdraw;
}

let milind = atm(100);
console.log(milind(2));

// Move all zeros

let arr = [2, 3, 0, 6, 0, 1];

let i = 0;
let j = 0;
let n = arr.length;

while (j < n) {
  if (arr[j] !== 0) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
  }
  j++;
}

console.log(arr);
