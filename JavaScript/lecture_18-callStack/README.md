# Call Stack in javaScript
The Call Stack in JavaScript is a data structure that keeps track of the execution of function calls in your program. It operates on a Last-In, First-Out (LIFO) principle, similar to a stack of plates where the last plate added is the first one removed.

## Here's how it works:
- **Global Execution Context:** When a JavaScript program begins, the global execution context is pushed onto the call stack. This represents the main script's execution.

- **Function Invocation:** When a function is called, a new execution context (also known as a "stack frame") is created for that function. This new context, containing information about the function, its arguments, and local variables, is then pushed onto the top of the call stack.

- **Nested Calls:** If a function calls another function, the new function's execution context is pushed onto the stack, on top of the calling function's context. This process continues for any nested function calls.

- **Function Completion:** When a function finishes its execution (either by returning a value or reaching the end of its code), its execution context is popped off the top of the call stack. The control then returns to the execution context immediately below it on the stack.

- **Stack Empty:** This process continues until all functions have completed and their contexts have been popped off, eventually leaving only the global execution context at the bottom. When the global execution context is popped, the program has finished.

### Key characteristics of the JavaScript Call Stack:

- **Single-threaded:** JavaScript has a single call stack, meaning it can only execute one task (function) at a time.

- **Synchronous execution:** Code execution is synchronous, as functions are processed one after another in the order they are added to the stack.

- **Stack Overflow:** If there are too many nested function calls without a return, the call stack can overflow, leading to an error. This often occurs with infinite recursion.

Understanding the call stack is crucial for debugging and comprehending how JavaScript manages program flow and execution contexts.

The JavaScript runtime environment, whether in a browser or Node.js, uses a combination of the Call Stack, Event Loop, and Queues (Task Queue and Microtask Queue) to manage and execute code, especially asynchronous operations.

### Call Stack
The Call Stack is a data structure that tracks the execution of synchronous code. When a function is called, an execution context for that function is pushed onto the stack. When the function finishes executing, its context is popped off the stack. JavaScript is single-threaded, meaning only one function can be executed at a time, and this execution occurs within the Call Stack.

### Queues
Asynchronous operations in JavaScript, like `setTimeout`, `fetch requests`, or DOM events, are handled by Web APIs (in browsers) or Node.js APIs. Once these asynchronous operations complete, their associated callback functions are not immediately executed. Instead, they are placed into one of two queues:

- **Task Queue (Macrotask Queue / Callback Queue):** This queue holds callbacks for macrotasks, which include:
    + `setTimeout` and `setInterval` callbacks
    + I/O operations (e.g., file system operations in Node.js)
    + UI rendering events
    + Network requests (e.g., `XMLHttpRequest`)

- **Microtask Queue (Job Queue):** This queue holds callbacks for microtasks, which have higher priority than macrotasks. Examples include:
    + Promise callbacks (`.then()`, `.catch()`, `.finally()`)
    + `queueMicrotask()`
    + `async/await` (the code after `await` is treated as a microtask) 
    + `MutationObserver` callbacks

### Event Loop
The Event Loop is a continuous process that orchestrates the execution of code between the Call Stack and the Queues. Its primary responsibilities are:
- **Monitoring the Call Stack:** It constantly checks if the Call Stack is empty.

- **Prioritizing Microtasks:** If the Call Stack is empty, the Event Loop first processes all pending microtasks in the Microtask Queue, moving them to the Call Stack for execution in a First-In, First-Out (FIFO) manner. It ensures the Microtask Queue is completely empty before moving on.

- **Handling Macrotasks:** After the Call Stack and Microtask Queue are empty, the Event Loop then takes the first available task from the Task Queue and moves it to the Call Stack for execution.

- **Repetition:** This cycle repeats continuously, ensuring that asynchronous operations are eventually handled without blocking the main thread.

In summary: Synchronous code runs on the Call Stack. Asynchronous operations offload their work to external APIs, and once completed, their callbacks are placed into either the Microtask Queue (for higher priority tasks like Promises) or the Task Queue. The Event Loop then manages the movement of these queued callbacks to the Call Stack for execution, prioritizing microtasks over macrotasks when the Call Stack is clear.
