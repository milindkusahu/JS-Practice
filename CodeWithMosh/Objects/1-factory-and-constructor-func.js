// Factory Function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let obj = createAddress("gurgaon", "delhi", 110001);

console.log(obj); // { street: 'gurgaon', city: 'delhi', zipCode: 110001 }

// Constructor Function

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let obj1 = new Address("gurgaon", "delhi", 110001);

console.log(obj1); // Address { street: 'gurgaon', city: 'delhi', zipCode: 110001 }
