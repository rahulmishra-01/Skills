# String methods in javascript
JavaScript provides a rich set of built-in methods for manipulating strings. These methods are accessed through the String.prototype object, meaning they can be called directly on any string value. All string methods in JavaScript are non-mutating; they return a new string without altering the original.

Here are some commonly used string methods in JavaScript:

## Extracting Substrings
- slice(startIndex, endIndex): Extracts a part of a string from startIndex up to (but not including) endIndex.
```js
let value = "Hello World";

console.log(value.slice(0,8))
```

- substring(startIndex, endIndex): Similar to slice(), but handles negative indices differently (treats them as 0).

```js
let value = "Hello World";

console.log(value.substring(0,8))
```

- substr(startIndex, length): Extracts a specified number of characters (length) from a starting position (startIndex). (Note: substr() is considered a legacy feature and slice() or substring() are generally preferred.)

```js
let value = "Hello World";

console.log(value.substr(0,8))
```

## Searching and Checking
- indexOf(searchValue, fromIndex): Returns the index of the first occurrence of searchValue within the string, or -1 if not found.

```js
let value = "Hello World";

console.log(value.indexOf("e"))
```

- lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of searchValue.

```js
let value = "Hello World";

console.log(value.lastIndexOf("e"))
```

- includes(searchValue, fromIndex): Checks if a string contains a specified value and returns true or false.

```js
let value = "Hello World";

console.log(value.includes("World"))
```

- startsWith(searchValue, startPosition): Checks if a string starts with a specified value.

```js
let value = "Hello World";

console.log(value.startsWith("W"))
```

- endsWith(searchValue, endPosition): Checks if a string ends with a specified value.

```js
let value = "Hello World";

console.log(value.endsWith("d"))
```

## Modifying Case and Whitespace
- toUpperCase(): Converts a string to uppercase.

```js
let value = "Hello World";

console.log(value.toUpperCase())
```
- toLowerCase(): Converts a string to lowercase.

```js
let value = "Hello World";

console.log(value.toLowerCase())
```

- trim(): Removes whitespace from both ends of a string.

```js
let value = "Hello World";

console.log(value.trim())
```

- trimStart(): Removes whitespace from the beginning of a string.

```js
let value = "Hello World";

console.log(value.trimStart())
```

- trimEnd(): Removes whitespace from the end of a string.

```js
let value = "Hello World";

console.log(value.trimEnd())
```

## Other Useful Methods
- charAt(index): Returns the character at a specified index.

```js
let value = "Hello World";

console.log(value.charAt(6))
```

- concat(string1, string2, ...): Joins two or more strings. The + operator is often used for concatenation as well.

```js
let value = "Hello World";

console.log(value.concat(string1, string2, ...))
```

- split(separator): Divides a string into an ordered list of substrings and returns them in an array.

```js
let value = "Hello World";

console.log(value.split(","))
```

- replace(searchValue, newValue): Replaces the first occurrence of a specified value with another value.

```js
let value = "Hello World";

console.log(value.replace("Hello", "Hi"))
```

- replaceAll(searchValue, newValue): Replaces all occurrences of a specified value with another value.

```js
let value = "Hello World";

console.log(value.replaceAll("Hello", "Hi"))
```

- repeat(count): Returns a new string with a specified number of copies of the original string.

```js
let value = "Hello World";

console.log(value.repeat(5))
```

- length: A property (not a method) that returns the length of the string.

```js
let value = "Hello World";

console.log(value.length)
```

### padStart
- padStart(targetLength, padString)
```js
const str1 = "5";
console.log(str1.padStart(2, "0")); // Output: "05"

const str2 = "Hello";
console.log(str2.padStart(10, "*")); // Output: "*****Hello"

const str3 = "Short";
console.log(str3.padStart(3)); // Output: "Short" (original length is >= targetLength)
```

### padEnd
- padEnd(targetLength, padString)
```js
const str4 = "abc";
console.log(str4.padEnd(5, "-")); // Output: "abc--"

const str5 = "Data";
console.log(str5.padEnd(8)); // Output: "Data    " (padded with spaces)

const str6 = "LongString";
console.log(str6.padEnd(5, "X")); // Output: "LongString" (original length is >= targetLength)
```

## String Property and Methods

| Property | Methods Without Argument | Methods With Arguments |
|----------|--------------------------|------------------------|
| length   | toUpperCase() | charAt(index) |
|          | toLowerCase() | concat(string1,string2,...) |
|          | trim() | split(separator) |
|          | trimStart() | replace( searchValue, newValue ) |
|          | trimEnd() | replaceAll( searchValue, newValue ) |
|          |  | repeat(count) |
|          |  | padStart(targetLength, padString) |
|          |  | padEnd(targetLength, padString) |