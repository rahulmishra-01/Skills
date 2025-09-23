# Settimeout and Setinterval in JavaScript
In JavaScript, setTimeout() and setInterval() are functions used for scheduling the execution of code after a specified delay or at regular intervals.

### `setTimeout()`
- **Purpose:** Executes a function or a piece of code once after a specified delay.

- **Syntax:**
```js
let timeoutID = setTimeout(function, delayInMilliseconds, arg1, arg2, ...);
```
- `function`: The function to be executed.
- `delayInMilliseconds`: The time (in milliseconds) to wait before executing the function.
- `arg1, arg2, ...`: Optional arguments to pass to the function.
- **Return Value:** Returns a unique `timeoutID` that can be used to cancel the timeout.
- **Cancellation:** The `clearTimeout(timeoutID)` function is used to prevent the scheduled execution of the function.

### Example:
```js
function greet() {
  console.log("Hello after 2 seconds!");
}

let timer = setTimeout(greet, 2000); // Calls greet() after 2 seconds

// To cancel the timeout before it executes:
// clearTimeout(timer);
```

### `setInterval()`
- **Purpose:** Executes a function or a piece of code repeatedly at a specified interval.

- **Syntax:**

```js
let intervalID = setInterval(function, delayInMilliseconds, arg1, arg2, ...);
```

- `function`: The function to be executed repeatedly.
- `delayInMilliseconds`: The time (in milliseconds) between each execution of the function. 
- `arg1, arg2, ...`: Optional arguments to pass to the function.
- **Return Value:** Returns a unique `intervalID` that can be used to stop the interval.
- **Cancellation:** The `clearInterval(intervalID)` function is used to stop the repeated execution of the function.

### Example:
```js
let count = 0;
function incrementCounter() {
  count++;
  console.log("Counter:", count);
  if (count >= 5) {
    clearInterval(intervalTimer); // Stop the interval after 5 executions
  }
}

let intervalTimer = setInterval(incrementCounter, 1000); // Calls incrementCounter() every 1 second
```

### Key Differences:
- `setTimeout()` executes a function only once after a delay.
- `setInterval()` executes a function repeatedly at a given interval until cleared.
