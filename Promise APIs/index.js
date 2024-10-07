const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 Success"), 3000);
  setTimeout(() => reject("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P2 Success"), 1000);
  // setTimeout(() => reject("P2 Fail"), 1000);
  setTimeout(() => resolve("P2 Success"), 5000);
});

const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

// If any one of the promise get's rejected, it will throw error
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Safest Option among all
// Returns an array with Staus "fulfilled" or "rejected"
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Returns value of first settled promise whether it's "fulfilled" or "rejected"
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Returns first settled "success" promise
// AggregateError: If all promises get rejected
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors); //(3) ['P1 Success', 'P2 Success', 'P3 Fail']
  });
