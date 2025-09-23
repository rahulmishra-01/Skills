# Math in Javascript

## Operators

### Arithmetic Operators.
- "+" (Addition)
- "-" (Subtraction)
- "*" (Multiplication)
- "/" (Division)
- "%" (Reminder/Modulus)
- "++" (Increment)
- "--" (Decrement)

### Assignment Operators
- "=" (Assignment)
- "+=" (Addition assignment)
- "-=" (Subtraction assignment)
- "*=" (Multiplication assignment)
- "/=" (Division assignment)
- "%=" (Remainder assignment)

### Comparison Operators
- "==" (Equal to - checks value only)
- "===" (Strict equal to - checks value and type)
- "!=" (Not equal to - checks value only)
- "!==" (Strict not equal to - checks value and type)
- ">" (Greater than)
- "<" (Less than)
- ">=" (Greater than or equal to)
- "<=" (Less than or equal to)

### Logical Operators
- "&&" (Logical AND)
- "||" (Logical OR)
- "!" (Logical NOT)
- "??" (Nullish Coalescing - returns the right-hand operand if the left-hand operand is null or undefined)

### Conditional (Ternary) Operator: A shorthand for an if-else statement.
- condition ? expressionIfTrue : expressionIfFalse

### Unary Operators: Operate on a single operand.
- typeof (Returns the type of a variable)
- delete (Deletes a property from and object)
- void (Evaluates an expression and discards its return value)
- "+" (Unary plus - converts to Number type)
- "-" (Unary minus - negates the value)

### Bitwise Operators: Perform operations on the individual bits of a number (less commonly used in general web development).
- & (Bitwise And)
- | (Bitwise OR)
- ^ (Bitwise XOR)
- ~ (Bitwise NOT)
- << (Left Shift)
- ">>" (Right Shift)
- ">>>" (Unsigned Right Shift)

### Other Operators
- new (Creates an instance of a constructor)
- this (Refers to the current object)
- super (Calls the parent constructor or accesses parent properties)
- import() (Dynamically loads modules)
- ?. (Optional Chaining - safely accesses properties of potentially nullish objects)


## Math Methods
### Mathematical Constants
The Math object includes several common mathematical constants as properties
- Math.PI: Represents the value of Pi (approximately 3.14159).
- Math.E: Represents Euler's number (the base of natural logarithms, approximately 2.718).
- Math.LN2: Represents the natural logarithm of 2.
- Math.LN10: Represents the natural logarithm of 10.
- Math.LOG2E: Represents the base 2 logarithm of E.
- Math.LOG10E: Represents the base 10 logarithm of E.
- Math.SQRT2: Represents the square root of 2.
- Math.SQRT1_2: Represents the square root of 1/2.

```js
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E);  // Output: 2.718281828459045
```

### Mathematical Methods (Functions)
The Math object provides numerous methods for performing various mathematical operations.

- Rounding:
    + Math.round(x): Rounds x to the nearest integer.
    + Math.ceil(x): Rounds x up to the nearest integer.
    + Math.floor(x): Rounds x down to the nearest integer.
    + Math.trunc(x): Returns the integer part of x (removes decimal places).

- Powers and Roots:
    + Math.pow(base, exponent): Returns base raised to the power of exponent.
    + Math.sqrt(x): Returns the square root of x.
    + Math.cbrt(x): Returns the cube root of x.

- Trigonometry:
    + Math.sin(x), Math.cos(x), Math.tan(x): Return the sine, cosine, and tangent of x (angle in radians).
    + Math.asin(x), Math.acos(x), Math.atan(x): Return the arcsine, arccosine, and arctangent of x.
    + Math.atan2(y, x): Returns the arctangent of the quotient of its arguments.

- Logarithms:
    + Math.log(x): Returns the natural logarithm (base E) of x.
    + Math.log10(x): Returns the base 10 logarithm of x.
    + Math.log2(x): Returns the base 2 logarithm of x.

- Other Useful Methods:
    + Math.abs(x): Returns the absolute value of x.
    + Math.min(x1, x2, ...): Returns the smallest of the given numbers.
    + Math.max(x1, x2, ...): Returns the largest of the given numbers.
    + Math.random(): Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).

- Example:
```js
console.log(Math.round(4.7)); // Output: 5
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.pow(2, 3));  // Output: 8
console.log(Math.sqrt(25));   // Output: 5
console.log(Math.random());   // Output: (a random number like 0.87654...)
```

Note: The Math object primarily works with Number data types and does not support BigInt. For more advanced mathematical operations or symbolic computation, external libraries like math.js can be used.