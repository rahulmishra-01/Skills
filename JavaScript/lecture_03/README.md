# Data Types in JavaScript
There are two types of data types in JavaScript.

1. Primitive

```txt
A primitive data type is the most basic, fundamental type of data that a programming language provides, such as numbers, booleans, and characters.
```

2. Non Primitive

```txt
 A non-primitive data type, also known as a reference type, is a data type that refers to an object in memory rather than directly storing a value. Unlike primitive types (like integers or booleans) that hold their actual values, non-primitive types store a memory address, or reference, that points to where the data is located. Examples include arrays, classes, strings, and interfaces. 
 ```

## how to find type of a data 
you can simply use "typeof" before data value

```js
console.log(typeof 7) 
console.log(typeof 5.3)
console.log(typeof "Hello World")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
```

```txt
console.log(typeof 7)  <---- Number
console.log(typeof 5.3) <---- Number
console.log(typeof "Hello World") <---- String
console.log(typeof true) <---- Boolean
console.log(typeof undefined) <---- Undefined
console.log(typeof null) <---- Object
```

## Converting data types
```js
console.log(+"52")
console.log(+"51a")
console.log(+"2.42")
console.log(+"hello")
console.log(+undefined)
console.log(+true)
console.log(+null)
console.log(+41)
```

```txt
console.log(typeof +"52") <---- Number
console.log(+"51a") <---- NaN
console.log(typeof +"2.42") <---- Number
console.log(typeof +"hello") <---- NaN
console.log(typeof +undefined) <---- NaN
console.log(typeof +true) <---- Number
console.log(typeof +null) <---- Number
console.log(typeof +41) <---- Number
```

lets see how its work so if you use (+) plus sign in front of any value its try to convert it into a number.

if value is in string like "hello" so its return NaN (Not a Number) or if value is undefined so also its return NaN.

but if value is already a number so it won't convent it and just leave it as a number.

same as (-) minus sign but minus sign return values in nigative 

```js
console.log(-"52")
console.log(-"64h")
console.log(-"2.42")
console.log(-"hello")
console.log(-undefined)
console.log(-true)
console.log(-null)
console.log(-41)
```

```txt
console.log(-"52") <---- -52
console.log(-"64h") <---- NaN
console.log(-"2.42") <---- -2.42
console.log(-"hello") <---- NaN
console.log(-undefined) <---- NaN
console.log(-true) <---- -1
console.log(-null) <---- -0
console.log(-41) <---- -41
```


### Using parseInt()
```js
console.log(parseInt("52a"))
console.log(parseInt("a52a"))
```
```txt
console.log(parseInt("52a")) <---- 52
console.log(parseInt("a52a")) <---- NaN
```

### Converting Number into String
```js
console.log(100 + "")
```
```txt
console.log(100 + "") <---- "100"
```

so how this work like how this value converted into number

so the (+) plus operator has two meaning in javascript

1. Addition (if both sides are numbers)
2. String Concatination (when at least one side is a string)

```js
console.log(100 + 42)
console.log(100 + "42")
```

```txt
console.log(100 + 42) <---- Addition (142)
console.log(100 + "42") <---- String Concatination ("10042")
```


(-) minus operator works only one way substraction

if value has any number value its substract it

but if any value is in string so its return NaN

```js
console.log(100 - 40)
console.log(100 - "40")
console.log(42 - "Hello")
```

```txt
console.log(100 + 42) <---- 60
console.log(100 + "42") <---- 60
console.log(42 + "Hello") <---- NaN
```

and some for ( * ) - ( / )


## bigInt in JavaScript
In JavaScript, BigInts are a built-in object that allows working with integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).

there are two way to create number in a bigInt.

so the simple way is to just add "n" at the end of the integer.

```js
console.log(5792592375927592)
console.log(5792592375927592n)
```

```txt
console.log(5792592375927592) <---- Number
console.log(5792592375927592n) <---- BigInt
```

and another way is to use BigInt() constructor function.

```js
let num = BigInt(5792592375927592)
console.log(num)
```

```txt
let num = BigInt(5792592375927592) <---- BigInt
console.log(num)
```




## Keybaord Character Names
| Character | Common names |
|-----------|--------------|
| ` | Backtick, grave accent, backquote |
| ~ | Tilde, squiggle |
|! | Exclamation mark, exclamation point, bang |
| @ | At sign, at symbol, ampersat |
| # | Pound sign, hash, number sign, octothorpe |
| $ | 	Dollar sign |
| % | 	Percent sign |
| ^ | 	Caret, circumflex, hat |
| & | 	Ampersand, "and" sign |
| * | 	Asterisk, star |
| () | 	Parentheses, round brackets |
| - | 	Hyphen, minus, dash |
| _ | 	Underscore, low line |
| + | 	Plus sign |
| = | 	Equal sign |
| [] | Square brackets, brackets |
| {} | 	Curly brackets, braces |
| \ | 	Backslash, reverse solidus, escape |
| | | 	Pipe, vertical bar |
| ; | 	Semicolon |
| : | 	Colon |
| ' | 	Apostrophe, single quote |
| " | 	Quotation mark, double quote |
| , | 	Comma |
| . | 	Period, dot, full stop |
| <> | 	Angle brackets, less than/greater than signs |
| / | 	Forward slash, slash, solidus |
| ? | 	Question mark |