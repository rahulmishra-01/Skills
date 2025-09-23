# Context in Javascript
An execution context in JavaScript is a conceptual environment where JavaScript code is evaluated and executed. It encompasses all the necessary information for a specific piece of code to run, including variable declarations, function definitions, the this binding, and the scope chain.

### There are two main types of execution contexts:
- **Global Execution Context (GEC):** This is the default execution context created when a JavaScript file first loads in a browser or Node.js environment. It represents the global scope and contains global variables, functions, and the `window` object (in browsers) or `global` object (in Node.js). The `this` keyword in the GEC refers to the global object.

- **Function Execution Context (FEC):** A new FEC is created every time a function is invoked. Each function call gets its own independent execution context, which includes its local variables, arguments, and its own `this` binding. When a function completes its execution, its FEC is removed from the call stack.

## Phases of Execution Context Creation:
### The creatioon of an execution context occurs in two phases:
- **Creation Phase:**
    + **Creation of the Variable Environment:** Memory is allocated for variables and function declarations within that specific context. Variables are initially assigned `undefined`, while function declarations are stored in their entirety. This phase is also where hoisting occurs.
    + **Creation of the Lexical Environment:** This component manages the identifier-environment record mapping for variables and functions, and also includes a reference to the outer lexical environment, forming the scope chain.
    + Determination of `this` Binding: The `this` keyword is determined and assigned based on how the function was called.

- **Execution Phase:**
    + The JavaScript engine executes the code within the context line by line.
    + Variables are assigned their actual values.
    + Function calls are processed, which in turn can create new FECs.

## Role of the Call Stack:
The call stack is a mechanism that manages the order of execution contexts. When a function is called, its FEC is pushed onto the call stack. When the function finishes executing, its FEC is popped off the stack. The GEC remains at the bottom of the call stack until the entire script finishes executing.