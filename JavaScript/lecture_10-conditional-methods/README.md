# Conditional methods
JavaScript provides several methods for implementing conditional logic, which allows code execution to be controlled based on whether certain conditions are true or false.

## if...else Statement
This is the most fundamental conditional statement. An if block executes if its condition is true, and an optional else block executes if the condition is false.

### Example:
```js
let age = 20;

if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("You are not old enough to vote yet.");
}
```

## if...else if...else Statement
This allows for testing multiple conditions in sequence. If the first if condition is false, the else if conditions are evaluated until one is true, or the final else block is executed if no conditions are met.

### Example:
```js
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a bit chilly.");
}
```

## switch Statement
The switch statement provides a more structured way to handle multiple possible conditions, especially when comparing a single value against several discrete options.

### Example:
```js
let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Just another day.");
}
```

## Ternary Operator (Conditional Operator)
This is a concise shorthand for simple if...else statements, often used for assigning values conditionally.

### Example:
```js
let isRaining = true;
let activity = isRaining ? "Stay indoors" : "Go outside";
console.log(activity); // Output: Stay indoors
```

## Logical Operators (&&, ||, !)
While not standalone conditional statements, logical operators are crucial for constructing complex conditions within if, else if, and ternary operator expressions.
- && (AND): Both conditions must be true.
- || (OR): At least one condition must be true.
- ! (NOT): Inverts the boolean value of a condition.

### Example:
```js
let hasLicense = true;
let hasCar = false;

if (hasLicense && hasCar) {
  console.log("You can drive.");
} else if (hasLicense || hasCar) {
  console.log("You have one of the requirements.");
} else {
  console.log("You need both a license and a car to drive.");
}
```