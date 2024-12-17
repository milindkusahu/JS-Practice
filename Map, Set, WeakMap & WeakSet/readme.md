# Key Interview Points:

## **Memory Management**

* WeakMap and WeakSet are particularly useful for preventing memory leaks when working with objects that might be garbage collected
* Regular Maps and Sets maintain strong references and can prevent garbage collection

## **Use Cases**

* Map: When you need key-value pairs with keys of any type, or need to maintain insertion order
* Set: When you need to maintain a collection of unique values
* WeakMap: For storing private data associated with objects, or metadata about objects
* WeakSet: For marking objects (like "has this object been validated?")

## **Performance**

* Maps and Sets generally have better performance than using regular objects for lookups
* WeakMap and WeakSet help with memory management but sacrifice iteration capabilities

## **Map**

**Time Complexity:**

* set(key, value): O(1)
* get(key): O(1)
* has(key): O(1)
* delete(key): O(1)
* clear(): O(n)
* size: O(1)
* forEach(): O(n)

**Space Complexity:**

* O(n) where n is the number of key-value pairs

## **Set**

**Time Complexity:**

* add(value): O(1)
* has(value): O(1)
* delete(value): O(1)
* clear(): O(n)
* size: O(1)
* forEach(): O(n)

**Space Complexity:**

* O(n) where n is the number of unique values

## **WeakMap**

**Time Complexity:**

* set(key, value): O(1)
* get(key): O(1)
* has(key): O(1)
* delete(key): O(1)

**Space Complexity:**

* O(n) where n is the number of key-value pairs, but memory can be reclaimed by garbage collector

## **W****eakSet**

**Time Complexity:**

* add(value): O(1)
* has(value): O(1)
* delete(value): O(1)

**Space Complexity:**

* O(n) where n is the number of objects, but memory can be reclaimed by garbage collector

## Key Points for Interviews:

1. All basic operations (add/set, get, has, delete) are O(1) - constant time
2. The main difference in space complexity is that WeakMap and WeakSet allow for garbage collection
3. Maps and Sets maintain references that prevent garbage collection, while WeakMap and WeakSet don't
4. Maps generally have better performance than regular objects for frequent additions and removals

> **Interview Tip:** When discussing complexity, also mention that JavaScript engine implementations might vary slightly, but these are the generally accepted complexities.
