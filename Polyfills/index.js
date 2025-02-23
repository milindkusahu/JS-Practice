/**
 * Polyfills are used to fill in the gaps in functionality that older browsers do not support.
 *
 */

if (!Array.prototype.fill) {
  // Fallback - Polyfill - Backup function
  Array.prototype.fill = function () {};
}

const arr = [1, 2, 3, 4, 5, 6];

/* ---------- .forEach ---------- */
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    const originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      callback(this[i], i);
    }
  };
}

// const forEachResult = arr.myForEach((item, index) => {
//   return `The value at index ${index} is ${item}`;
// });

// console.log(forEachResult);

/* ---------- .map ---------- */
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const originalArray = this;
    const newArray = [];
    for (let i = 0; i < originalArray.length; i++) {
      newArray.push(callback(this[i], i));
    }
    return newArray;
  };
}

// const mapResult = arr.map((item) => {
//   return item * 2;
// });

// console.log(mapResult);

/* ---------- .filter ---------- */
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const originalArray = this;
    const newArray = [];
    for (let i = 0; i < originalArray.length; i++) {
      if (callback(this[i], i)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
}

// const filterResult = arr.myFilter((item) => item !== 2);

// console.log(filterResult);

/* ---------- .reduce ---------- */
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    const originalArray = this;
    let accumulator = initialValue || 0;
    for (let i = 0; i < originalArray.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  };
}

// const reduceResult = arr.myReduce((acc, item) => acc + item, 0);

// console.log(reduceResult);

/* ---------- .every ---------- */
if (!Array.prototype.myEvery) {
  Array.prototype.myEvery = function (callback) {
    const originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      if (!callback(this[i])) {
        return false;
      }
    }
    return true;
  };
}

// const everyResult = arr.myEvery((item) => item > 0);

// console.log(everyResult);

/* ---------- .some ---------- */
if (!Array.prototype.mySome) {
  Array.prototype.mySome = function (callback) {
    const originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }
    return false;
  };
}

// const someResult = arr.mySome((item) => item > 5);

// console.log(someResult);

/* ---------- .find ---------- */
if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (callback) {
    const originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      if (callback(this[i])) {
        return this[i];
      }
    }
    return undefined;
  };
}

// const findResult = arr.myFind((item) => item === 5);

// console.log(findResult);

/* ---------- .debounce() ---------- */
if (!Function.prototype.debounce) {
  Function.prototype.debounce = function (delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this(...args);
      }, delay);
    };
  };
}

const debounceFunction = () => {
  console.log("Debounced function called");
};

const debouncedFunction = debounceFunction.debounce(1000);

debouncedFunction();

/**
 * debounce - Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page.
 *
 *
 * promise.all - The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves when all of the promises have resolved.
 *
 */

/* ---------- .throttle() ---------- */
if (!Function.prototype.throttle) {
  Function.prototype.throttle = function (delay) {
    let flag = true;
    return (...args) => {
      if (flag) {
        this(...args);
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  };
}

const throttleFunction = () => {
  console.log("Throttled function called");
};

const throttledFunction = throttleFunction.throttle(1000);

throttledFunction();

/**
 * throttle - Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
 *
 */

/* ---------- .promise() ---------- */
if (!Function.prototype.promise) {
  Function.prototype.promise = function () {
    return new Promise((resolve, reject) => {
      try {
        this(resolve);
      } catch (error) {
        reject(error);
      }
    });
  };
}

const promiseFunction = (resolve) => {
  console.log("Promise function called");
  resolve();
};

const promisedFunction = promiseFunction.promise();

promisedFunction
  .then(() => {
    console.log("Promise resolved");
  })
  .catch((error) => {
    console.log("Promise rejected", error);
  });

/**
 * promise - A promise is an object representing the eventual completion or failure of an asynchronous operation.
 *
 */

/* ---------- .promise.all() ---------- */
if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let counter = 0;
      promises.forEach((promise, index) => {
        promise
          .then((result) => {
            results[index] = result;
            counter++;
            if (counter === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };
}

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * .promise.all - The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves when all of the promises have resolved.
 *
 */

/* ---------- .memoize() ---------- */
if (!Function.prototype.memoize) {
  Function.prototype.memoize = function () {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (!cache[key]) {
        cache[key] = this(...args);
      }
      return cache[key];
    };
  };
}

const memoizeFunction = (num) => {
  console.log("Memoized function called");
  return num * 2;
};

const memoizedFunction = memoizeFunction.memoize();

console.log(memoizedFunction(2));
