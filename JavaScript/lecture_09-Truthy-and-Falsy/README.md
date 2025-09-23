# Truthy and Falsy
In JavaScript, every value has an inherent boolean characteristic, meaning it can be evaluated as either "truthy" or "falsy" within a boolean context, such as in if statements, while loops, or logical operations (&&, ||, !). 

## Falsy Values
A limited set of values are considered "falsy" in JavaScript, meaning they evaluate to false in a boolean context.

- false (the boolean primitive itself)
- 0 (the number zero)
- -0 (negative zero)
- 0n (BigInt zero)
- '' or "" (an empty string)
- null
- undefined
- NaN (Not-a-Number)
- document.all (a legacy property that is also falsy)

## Truthy Values
All other values in JavaScript are considered "truthy." This means they evaluate to true in a boolean context.

- true (the boolean primitive itself)
- Any non-zero number (e.g., 1, -5, 3.14)
- Any non-empty string (e.g., 'hello', 'false', '0')
- Objects (e.g., {}, [], new Date())
- Functions
- Symbols

### Example:
```js
if (0) {
  console.log("This will not be executed because 0 is falsy.");
}

if ("hello") {
  console.log("This will be executed because 'hello' is truthy.");
}

let myVariable;
if (myVariable) {
  console.log("This will not be executed because myVariable is undefined and thus falsy.");
}

let myObject = {};
if (myObject) {
  console.log("This will be executed because an empty object is truthy.");
}
```