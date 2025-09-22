# Variables in JavaScript
A JavaScript variable is just a name of storage location.

And we can give that name in three ways.
1. Let Keyword
2. Const Keyword
3. Var Keyword

Variables are used in programming to store data that can be accessed and manipulated throughout a program's execution. They serve as descriptive placeholders for information, offering several critical benefits that make code dynamic, readable, and reusable.

## Naming Conventions
```txt
let UserName; <---- Pascal Case
let studentName; <---- camle Case
let my-details; <---- kebab-case
let user_details; <---- snake_case
```

## Examples of Valid Variable Names:
```js
let userName;
let _privateData;
let $price;
let totalAmount99;
```

## Examples of Invalid Variable Names:
```js
let 1stName; // Cannot start with a digit
let my-variable; // Hyphens are not allowed
let new class; // Cannot contain spaces, 'class' is a reserved keyword
```

## Difference between Var, Let and Const
The key differences between var, let, and const in JavaScript revolve around their scope, hoisting behavior, and reassignment/redeclaration rules.

## Redeclare and Reassign
In JavaScript, "redeclare" and "reassign" refer to distinct operations on variables, and their behavior depends on how the variable was initially declared (using var, let, or const).

### Reassigning a Variable:
```js
var name = "Mark";
name = "Hannry"

let user = "Rohan";
user = "Karan";

const student = "Vikram";
student = "Arush" // This would cause a TypeError
```

### Redeclare a Variable
```js
var user = "Mark";
var user = "Karan";

let name = "Priya"
let name = "Anjli" // This would cause a SyntaxError

const student = "Rohan"
const student = "Arush" // This would cause a SyntaxError
```

## Different Types of scope in JS
1. Global scope
2. Function scope
3. Block scope

### Global Scope
A variable declared in the global scope (outside of any function or block) is available to any other code in the entire program.

In a browser, global variables become properties of the window object. This can lead to issues like variable name collisions if you're not careful.

For these reasons, it is considered best practice to minimize the use of global variables.

```js
// Global scope
const globalVar = "I am a global variable.";

function exampleFunction() {
  console.log(globalVar); // Accessible here
}

exampleFunction();
console.log(globalVar); // Accessible here
```

### Function Scope
A variable declared inside a function is only accessible within that function. This is also referred to as local scope.

Variables declared with var, let, and const inside a function are all function-scoped. That is, they are not accessible outside the function.

```js
function createLocalScope() {
  const functionVar = "I am a function-scoped variable.";
  console.log(functionVar);
}

createLocalScope(); // Prints: "I am a function-scoped variable."
console.log(functionVar); // Throws a ReferenceError
```

### Block Scope
A block is any set of statements contained within curly braces ({...}). Block scope was introduced with ES6 and applies to variables declared with let and const.

Variables with block scope are only accessible within the block in which they are defined. The var keyword does not respect block scope.

```js
function blockScopeExample() {
  if (true) {
    const blockVar = "I am a block-scoped variable.";
    console.log(blockVar); // Accessible here
  }

  console.log(blockVar); // Throws a ReferenceError
}

blockScopeExample();
```

### The Scope Chain
The scope chain describes the hierarchy in which JavaScript looks for variables. When a variable is requested, the JavaScript engine first looks in the current scope. If it is not found there, it moves up the chain to the parent scope, and so on, until it reaches the global scope. If the variable is still not found in the global scope, a ReferenceError is thrown.

This is why a child scope has access to variables in parent scopes, but a parent scope cannot access variables in a child scope.


## What is Hoisting
Hoisting in JavaScript is a behavior where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use a variable or call a function before it is formally declared in your code. 

```js
    greet(); // Output: Hello!

    function greet() {
      console.log("Hello!");
    }
```
```js
    console.log(myVar); // Output: undefined
    var myVar = 10;
    console.log(myVar); // Output: 10
```
```js
    // console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 20;
    console.log(myLet); // Output: 20

    // console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
    const myConst = 30;
    console.log(myConst); // Output: 30
```

## Temporal Dead Zone (TDZ)
The temporal dead zone (TDZ) is the period in JavaScript, for variables declared with let or const, from the beginning of a block scope until the variable is initialized. During this time, the variable exists but is uninitialized, and attempting to access it will result in a ReferenceError. The TDZ starts at the block's beginning and ends when the variable is declared and given a value, differing from var variables, which are hoisted and initialized to undefined. 

```js
{
  // TDZ for 'foo' begins here
  // console.log(foo); // This line would throw a ReferenceError
  let foo = 10; // TDZ for 'foo' ends here
  console.log(foo); // This line would correctly output 10
}
```

|Keyword|Reassignment|Redeclaration in same scope|
|-------|------------|----------------------------|
|Var|Yes|No|
|Let|Yes|No|
|Const|No|No|