# Code execution in javascript
JavaScript code execution involves a multi-step process managed by a JavaScript engine, such as V8 in Chrome and Node.js. The core concept revolves around Execution Contexts and the Call Stack.

## JavaScript Engine and Global Execution Context (GEC)
- When a JavaScript file is loaded (e.g., in a browser or Node.js), the JavaScript engine first creates the Global Execution Context (GEC). This is the base context where all code not inside a function is executed. 
- The GEC is pushed onto the Call Stack, which is a data structure used to manage the order of execution contexts.

## Execution Context Phases
Each execution context (including the GEC and function execution contexts) goes through two phases.

### Memory Creation Phase (Hoisting)
- The engine scans the code within the current execution context.
- Memory is allocated for variables and functions.
- Variables declared with var, let, and const are initialized. var variables are assigned undefined, while let and const are in a "temporal dead zone" until their declaration line is reached.
- Function declarations are stored in memory as they are.

### Code Execution Phase
- The code within the current execution context is executed line by line.
- Variables are assigned their actual values as the code progresses.
- When a function is invoked, a new Function Execution Context is created for that function. This new context is pushed onto the top of the Call Stack. 
- The execution then shifts to this new function's context, repeating the memory creation and code execution phases for that function.
- When a function finishes executing (e.g., reaches a return statement or the end of its code), its execution context is popped off the Call Stack, and control returns to the execution context below it.

## Call Stack Management
- The Call Stack maintains the order of execution contexts. The topmost context on the stack is the one currently being executed. 
- When a function is called, its context is pushed onto the stack. 
- When a function completes, its context is popped off the stack. 
- The GEC is always at the bottom of the Call Stack until the entire script finishes executing.

This process ensures that JavaScript code is executed in a structured and predictable manner, handling variable scoping, function calls, and the flow of control within a program.