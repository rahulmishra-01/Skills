# Loops in JavaScript
Loops in JavaScript are control structures that enable the repeated execution of a block of code based on a specified condition. They are essential for tasks involving iteration over data structures, performing actions multiple times, and reducing repetitive code.

Here are the primary types of loops in JavaScript:
### For loop

This loop is used when the number of iterations is known. It consists of three optional expressions: initialization, condition, and increment/decrement.

```js
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
```

### While loop
This loop repeatedly executes a block of code as long as a specified condition remains true. The condition is checked before each iteration. 

```js
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}
```

### do...while loop
Similar to the while loop, but the code block is executed at least once before the condition is checked.

```js
    let num = 0;
    do {
      console.log("Number: " + num);
      num++;
    } while (num < 2);
```

### for...in loop
This loop iterates over the enumerable properties of an object. It's primarily used for objects, not arrays, as it can iterate over inherited properties and the order of iteration is not guaranteed.

```js
const person = { name: "Alice", age: 30 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### for...of loop
Introduced in ES6, this loop iterates over iterable objects like arrays, strings, Maps, Sets, and NodeLists. It directly accesses the values of the elements.

```js
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
```

## Key Concepts:
- **Iteration**: The process of repeating a set of instructions.
- **Stopping Condition**: A condition that, when met, terminates the loop.
- **Infinite Loop**: A loop that never terminates because its stopping condition is never met, leading to program unresponsiveness.
- `break` statement: Used to prematurely exit a loop.
- `continue` statement: Used to skip the current iteration of a loop and proceed to the next iteration. 