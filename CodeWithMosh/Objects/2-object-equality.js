let obj = new Address("gurgaon", "delhi", 110001);
let obj1 = new Address("gurgaon", "delhi", 110001);
let obj2 = obj;

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(obj, obj1) {
  return (
    obj.street === obj1.street &&
    obj.city === obj1.city &&
    obj.zipCode === obj1.zipCode
  );
}

function areSame(obj, obj1) {
  return obj === obj1;
}

console.log(areEqual(obj, obj1)); // true
console.log(areSame(obj, obj1)); // false => obj and obj1 are two different objects in the memory.
console.log(areSame(obj, obj2)); // true
