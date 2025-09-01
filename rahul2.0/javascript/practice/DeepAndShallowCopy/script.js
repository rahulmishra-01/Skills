// const arr = [1, 2, [3, 4]];
// const shallowCopy = arr.slice();

// shallowCopy[2][0] = 5;

// console.log(shallowCopy)
// console.log(arr)

// const obj = {name:"Rahul", address:{city:"Delhi"}};
// const shallowCopy = {...obj};

// shallowCopy.address.city = "Mumbai";
// console.log(shallowCopy)
// console.log(obj)


// const obj = {a:1, b:{c:2}};
// const shallowCopy = Object.assign({}, obj);

// shallowCopy.b.c = 3;
// console.log(shallowCopy)
// console.log(obj)


const obj = {name:"JS", details:{level:"deep"}};
// const deepCopy = JSON.parse(JSON.stringify(obj));
const deepCopy = structuredClone(obj);

deepCopy.details.level = "shallow";
console.log(deepCopy)
console.log(obj)