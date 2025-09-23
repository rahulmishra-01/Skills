# Array and methods
In JavaScript, an array is a global object used to store an ordered collection of values, known as elements. Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. They are dynamic in size and can store elements of different data types (heterogeneous). 

### Creating Arrays:
Arrays can be created using an array literal or the Array() constructor. The array literal is the most common method.

```js
const fruits = ["Apple", "Banana", "Orange"]; // Array literal
const numbers = new Array(1, 2, 3); // Array constructor
```

## Common Array Methods:
JavaScript provides numerous built-in methods for manipulating arrays. Here are some fundamental ones:

### Adding and Removing Elements:
- push(): Adds one or more elements to the end of an array.
```js
    fruits.push("Mango"); // fruits is now ["Apple", "Banana", "Orange", "Mango"]
```

- pop(): Removes the last element from an array and returns it.
```js
    const lastFruit = fruits.pop(); // lastFruit is "Mango", fruits is ["Apple", "Banana", "Orange"]
```

- unshift(): Adds one or more elements to the beginning of an array.
```js
    fruits.unshift("Grape"); // fruits is now ["Grape", "Apple", "Banana", "Orange"]
```

- shift(): Removes the first element from an array and returns it.
```js
    const firstFruit = fruits.shift(); // firstFruit is "Grape", fruits is ["Apple", "Banana", "Orange"]
```

## Iteration Methods:
- forEach(): Executes a provided function once for each array element.
```js
    fruits.forEach(fruit => console.log(fruit));
```

- map(): Creates a new array by calling a provided function on every element in the calling array.
```js
    const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); // ["APPLE", "BANANA", "ORANGE"]
```

- filter(): Creates a new array with all elements that pass the test implemented by the provided function.
```js
    const shortFruits = fruits.filter(fruit => fruit.length < 7); // ["Apple", "Orange"]
```

- reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
```js
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 6
```

## Other useful methods:
- concat(): Joins two or more arrays.
```js
    const moreFruits = ["Pineapple", "Kiwi"];
    const allFruits = fruits.concat(moreFruits); // ["Apple", "Banana", "Orange", "Pineapple", "Kiwi"]
```

- slice(): Returns a shallow copy of a portion of an array into a new array.
```js
    const selectedFruits = fruits.slice(1, 3); // ["Banana", "Orange"]
```

- splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
```js
    fruits.splice(1, 1, "Pear"); // Removes "Banana" and adds "Pear", fruits is ["Apple", "Pear", "Orange"]
```

- indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
```js
    const index = fruits.indexOf("Orange"); // 2
```

- includes(): Determines whether an array includes a certain value among its entries, returning true or false.
```js
    const hasApple = fruits.includes("Apple"); // true
```

- join(): Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
```js
    const fruitString = fruits.join(" - "); // "Apple - Pear - Orange"
```

### Methods:
| Method | Explaination |
|--------|--------------|
|```push()```|Adds one or more elements to the end of an array.|
|```pop()```|Removes the last element from an array and returns it.|
|```unshift()```|Adds one or more elements to the beginning of an array.|
|```shift()```|Removes the first element from an array and returns it.|
|```forEach()```|Executes a provided function once for each array element.|
|```map()```|Creates a new array by calling a provided function on every element in the calling array.|
|```filter()```|Creates a new array with all elements that pass the test implemented by the provided function.|
|```reduce()```|Executes a reducer function on each element of the array, resulting in a single output value.|
|```concat()```|Joins two or more arrays.|
|```slice()```|Returns a shallow copy of a portion of an array into a new array.|
|```splice()```|Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.|
|```indexOf()```|Returns the first index at which a given element can be found in the array, or -1 if it is not present.|
|```includes()```|Determines whether an array includes a certain value among its entries, returning ```true``` or ```false```.|
|```join()```|Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.|
