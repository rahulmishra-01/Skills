# Object and its methods
In JavaScript, an object is a collection of related properties, and a method is a property of an object whose value is a function. Objects are fundamental to JavaScript and are used to represent entities, organize data, and encapsulate behavior.

## Objects
An object is a standalone entity that can store multiple values as key-value pairs.
- Property: A key-value pair where the key is a string (or Symbol) and the value can be any JavaScript data type, including another object or a function.
- Creation: The most common way to create an object is with object literal syntax using curly braces {}.

### Example of an object:
```js
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 2020,
  isElectric: false
};

```

### Accessing properties
You can access an object's properties using dot notation or bracket notation. 
```js
// Dot notation
console.log(car.make); // Output: Honda

// Bracket notation
console.log(car['model']); // Output: Civic

```

## Object methods
A method is a function stored as a property of an object. Methods define the actions an object can perform.

### Example of an object with a method:
```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    // 'this' refers to the current object (person)
    return this.firstName + ' ' + this.lastName;
  }
};

```

### Invoking an object's method:
You call a method using dot notation followed by parentheses ().
```js
const name = person.fullName();
console.log(name); // Output: John Doe

```

### The "this" keyword
Inside a method, the this keyword refers to the object that "owns" the method.
In the person.fullName() method above, this refers to the person object. This allows the method to access the object's other properties, like firstName and lastName.

## Built-in Object methods
In addition to defining your own methods, JavaScript's global Object has several built-in static methods that can be called directly on the Object constructor to perform operations on objects. 

| Method | Description | Example |
|--------|-------------|---------|
|```Object.keys(obj)```|Returns an array of a given object's own enumerable property names.|``` Object.keys(car) //Returns:["make","model","year","isElectric"]```|
|```Object.values(obj)```|Returns an array of a given object's own enumerable property values.|```Object.values(car)//Returns: ["Honda", "Civic", 2020, false]```|
|```Object.entries(ob)```|Returns an array of a given object's own enumerable string-keyed property ```[key, value]``` pairs.|```Object.entries(car)// Returns: [["make", "Honda"], ["model", "Civic"], ...]```|
|```Object.assign(target,source)```|Copies all enumerable own properties from one or more source objects to a target object and returns the target object.|```const details = { color: 'red' };Object.assign(car, details);```|
|```Object.create(proto)```|Creates a new object with the specified prototype object and properties.|```const newCar = Object.create(car);```|
|```Object.freeze(obj)```|Freezes an object, preventing new properties from being added, existing properties from being removed, or the enumerability, configurability, or writability of existing properties from being changed.|```Object.freeze(car);```|
|```Object.seal(obj)```|Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.|```Object.seal(car)```|

