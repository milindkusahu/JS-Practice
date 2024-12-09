// street
// city
// zipCode
// showAddress(address)

let address = {
  street: "gurgaon",
  city: "delhi",
  zipCode: "110001",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

/* Output

street gurgaon
city delhi
zipCode 110001

*/
