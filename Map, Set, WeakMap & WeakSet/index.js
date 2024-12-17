// Map, Set, WeakMap & WeakSet

/**
 * Map
 *
 * => A Map is a collection of key-value pairs where both keys and values can be of any type (objects, functions, primitives)
 *
 * => Unlike regular objects, Map keys can be of any type, not just strings or symbols
 *
 */

// Creating and using a Map
const userMap = new Map();
userMap.set("name", "John");
userMap.set(42, "age"); // number as key
userMap.set({ id: 1 }, "user object"); // object as key

// Methods
userMap.get("name"); // 'John'
userMap.has(42); // true
userMap.delete(42); // removes entry
userMap.size; // number of entries
userMap.clear(); // removes all entries

/**
 * Set
 *
 * => A Set is a collection of unique values of any type
 *
 * => Automatically removes duplicates
 */

// Creating and using a Set
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set(4) {1, 2, 3, 4}

// Methods
uniqueNumbers.add(5); // adds value
uniqueNumbers.has(2); // true
uniqueNumbers.delete(3); // removes value
uniqueNumbers.size; // number of elements
uniqueNumbers.clear(); // removes all elements

/**
 * WeakMap
 *
 * => Similar to Map, but with some key differences:
 *
 * -> Keys must be objects (no primitives allowed)
 * -> Keys are held "weakly" - if there are no other references to the key object, it can be garbage collected
 * Not iterable (no forEach, size, or clear methods)
 *
 */

// WeakMap example
const weakMap = new WeakMap();
let obj = { id: 1 };

weakMap.set(obj, "associated data");
weakMap.get(obj); // 'associated data'

obj = null; // object can now be garbage collected
// The WeakMap entry will also be removed automatically

/**
 * WeakSet
 *
 * => Similar to Set, but with restrictions:
 *
 * -> Can only store objects (no primitives)
 * -> References are weak (allows garbage collection)
 * -> Not iterable (no forEach, size, or clear methods)
 *
 */

// WeakSet example
const weakSet = new WeakSet();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.has(obj1); // true
weakSet.delete(obj1);

obj1 = null; // object can be garbage collected
