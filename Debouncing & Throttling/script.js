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

// Throttling in Javascript

const throttle = (fn, delay) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};

const myThrottle = debouncing(getData, 800);
