# Hoisting in JavaScript
Hoisting in JavaScript is a behavior where declarations of variables, functions, and classes are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. This means that these elements can be referenced in the code before their actual declaration. 

### Key aspects of hoisting:
- **Function Declarations:** Entire function declarations are hoisted. This allows you to call a function before its definition appears in the code.

```js
greet(); // Output: Hello!
function greet() {
    console.log("Hello!");
}
```

- Variable Declarations (with `var`): Only the declaration of `var` variables is hoisted, not their initialization or assignment. When accessed before their assignment, `var` variables will have a value of `undefined`.

```js
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10
```

- `let` and `const` Declarations: Variables declared with `let` and `const` are also hoisted, but they are placed in a "temporal dead zone" (TDZ) from the beginning of their scope until their declaration is encountered. Attempting to access them within the TDZ will result in a `ReferenceError`.

```js
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20
```

- Class Declarations: Class declarations are also hoisted, similar to `let` and `const`, meaning they are in a TDZ and cannot be accessed before their declaration.

Understanding hoisting is crucial for avoiding unexpected behavior and writing more predictable JavaScript code. It highlights the importance of declaring variables and functions before their use, especially with `let` and `const` to prevent `ReferenceErrors`.