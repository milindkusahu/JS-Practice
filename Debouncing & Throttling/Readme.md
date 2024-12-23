```
// Debouncing in Javascript

const getData = () => {
  // Calls an API and gets Data
  console.log("Fetching Data...");
};

const debouncing = (fn, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const myDebounce = debouncing(getData, 800);
```
