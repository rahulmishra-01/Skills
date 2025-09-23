# Shallow copy and Deep copy
A shallow copy duplicates an object's top-level properties, but nested objects are still linked by reference. A deep copy, however, duplicates all levels of the object, ensuring that the original and the new object are completely independent.

## Shallow copy
With a shallow copy, the original and copied objects share references to any nested objects. This means if you change a property within a nested object in the copy, the original object will also be affected.

### Example
```js
const original = {
  name: 'Alice',
  contact: {
    email: 'alice@example.com'
  }
};

// Create a shallow copy using the spread operator
const shallowCopy = { ...original };

// Modify a top-level property
shallowCopy.name = 'Betty';
console.log(original.name); // Output: 'Alice' (original is not affected)

// Modify a nested property
shallowCopy.contact.email = 'betty@example.com';
console.log(original.contact.email); // Output: 'betty@example.com' (original IS affected)

```
### Common methods for shallow copies
- Spread Syntax(```{...})```or ```[...]```):The most common and modern way for copying top-level properties of objects and arrays.
- ```**Object.assign()**```: Copies all enumerable own properties from one or more source objects to a target object.
- ```**Array.prototype.slice()``` and ```Array.prototype.concat()```: For arrays, these methods return a new array containing a shallow copy of the original array's elements.

## Deep copy
With a deep copy, every nested object is also duplicated, so there are no shared references. Changes to the deep copy, no matter how deeply nested, will not affect the original object.

### Example
```js
const original = {
  name: 'Alice',
  contact: {
    email: 'alice@example.com'
  }
};

// Create a deep copy using structuredClone()
const deepCopy = structuredClone(original);

// Modify a nested property
deepCopy.contact.email = 'betty@example.com';
console.log(original.contact.email); // Output: 'alice@example.com' (original is NOT affected)

```

### Common methods for deep copies
- ```structuredClone()``` : The modern, standard, and recommended method for deep copying. It is a more robust alternative to the JSON method.
- ```JSON.parse(JSON.stringify())``` : A common, quick way to deep copy simple objects.

    + Limitations: It will fail or lose data on objects containing `functions`, `undefined`, `Symbol` values, `circular references`, or special object types like `Date` and `RegExp`.

- Third-party libraries (e.g., Lodash): The `_.cloneDeep()` method from the Lodash library is a reliable way to perform a deep copy that handles many of the edge cases the JSON method cannot.

## Summary: Shallow vs Deep Copy
|Aspect|Shallow Copy|Deep Copy|
|------|------------|---------|
|**Nested Objects**|References are copied.|New instances are created recursively.|
|**Independence**|Not fully independent; changes to nested objects affect the original.|Fully independent; no changes affect the original object.|
|**Performance**|Faster, as it only copies top-level properties.|Slower, as it must traverse and copy the entire object structure.|
|**Use Case**|Use for flat objects or when sharing references to nested data is acceptable.|Use for complex objects with nested data when you need full independence from the original.|
