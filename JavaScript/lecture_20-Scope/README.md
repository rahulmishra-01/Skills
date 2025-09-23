# Scope in JavaScript
Scope in JavaScript defines the accessibility and visibility of variables, functions, and objects within different parts of a program. It determines where a particular identifier can be referenced and used. JavaScript primarily features three types of scope:

- Global Scope:
    + Variables declared outside of any function or block reside in the global scope.
    + They are accessible from anywhere within the entire JavaScript program.
    + Global variables can lead to naming conflicts and make code harder to maintain, so their use should be minimized.
- Function (Local) Scope:
    + Variables declared inside a function are said to have function scope.
    + They are only accessible within the function where they are defined.
    + Variables with `var` keyword have function scope.
- Block Scope:
    + Introduced with `let` and `const` keywords in ES6 (ECMAScript 2015).
    + Variables declared with `let` or `const` inside a block (e.g., `if` statements, `for` loops, or any `{}` pair) are only accessible within that specific block.
    + This helps prevent unintended variable reassignments and improves code clarity.
### Lexical Scope (Static Scope):
JavaScript uses lexical scoping, also known as static scoping. This means that the scope of a variable is determined at the time of writing the code (lexical analysis), not at runtime. An inner function can access variables from its outer (enclosing) scope, even after the outer function has finished executing, due to closures.

### Example:
```js
// Global Scope
let globalVar = "I am global";

function outerFunction() {
  // Function Scope
  let outerVar = "I am in outerFunction";

  if (true) {
    // Block Scope
    let blockVar = "I am in a block";
    console.log(blockVar); // Accessible
  }

  // console.log(blockVar); // Not accessible here (outside the block)

  function innerFunction() {
    // Inner function can access outerFunction's variables
    console.log(outerVar); // Accessible
    console.log(globalVar); // Accessible
  }

  innerFunction();
}

outerFunction();
console.log(globalVar); // Accessible
// console.log(outerVar); // Not accessible here (outside outerFunction)
```