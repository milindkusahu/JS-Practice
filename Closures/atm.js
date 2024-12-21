// ATM

function atm(initialBalance) {
  let balance = initialBalance;

  function withdraw(amount) {
    if (amount > balance) return "Not Allowed";
    else {
      balance -= amount;
      return balance;
    }
  }
  return withdraw;
}

const milind = atm(5000);
console.log(milind(500));
console.log(milind(200));
