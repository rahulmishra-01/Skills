//========================================================================================
// here i learn about variables, declarations, initializations, hoisting, temporal dead zone

// <---- TDZ starts here
// console.log(a)
// var a = "Hello World";
// console.log(a)
// let b = "Hello World 1";  //<---- TDZ ends here
// console.log(b)
// const c = "Hello World 2"; //<---- TDZ ends here
// console.log(c)

//========================================================================================
// here i learn about scopes like function scope, block scope

// if(true){
//     var a = 4; //<---- var is a function scope
//     let b = 5; // <---- let is a block scope
//     const c = 6; //<---- const is a block scope
// }

// console.log(a) //<---- print a value
// console.log(b) //<---- ReferenceError: b is not defined
// console.log(c) //<---- ReferenceError: c is not defined

// function x(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
// }

// console.log(a) //<---- ReferenceError: a is not defined
// console.log(b) //<---- ReferenceError: b is not defined
// console.log(c) //<---- ReferenceError: c is not defined

// function x(){
//     var a = 4;
//     {var a = 8}
//     console.log(a)
// }

// function x(){
//     var a = 3;
//     function y(){
//         var b = 6;
//         console.log(b)
//     }
//     console.log(a)
//     y()
// }

// x();

//========================================================================================
// here i learn redeclaration and reassignment rules

// var a; //<---- working
// var a = 2; //<---- working
// var a = 5; //<---- working

// let b; //<---- working
// b = 5; //<---- working

// let c = 5; //<---- working
// c = 8; //<---- working

// let c = 28; //<---- not working

// const d; //<---- not working
// const d = 5; //<---- working
// d = 8; //<---- not working

//========================================================================================
// here i learn about closure

// for(var i = 0; i<4; i++){
//     console.log(i)
// }

// for (var i = 0; i < 3;i++) {
//   setTimeout(() => console.log(i), 10);
// }
// prints: 3 3 3  (because one function-scoped `i` ends up as 3 after loop)

//========================================================================================
// here i learn about type conversion and type coercion

// String(58); // "58"
// Number("false"); // 0
// Boolean(0); // false
// Boolean(1); // true
// Boolean(""); // false
// Number(true); // 1
// Number(false); // 0
// String(true); // "true"
// String(false); // "false"

// "5" + 8; // "58"
// true - 5; // 4
// false * 5; // 0
// undefined + "5"; // "5"
// undefined + 5; // NaN

//=======================================================================================
// here i learn about template literals

// const name = "rahul";
// const role = "admin";

// console.log(`username is ${name} and role is ${role === "admin" ? "admin" : "user"}`)

//=======================================================================================
// here i  learn control flow like if, else, switch, for, while, do-while

// const user = "rahul"
// const age = 16

// if(age >= 18){
//     console.log(`username is ${user} and his/her age is ${age} and he is eligible for voting`)
// }else{
//     console.log(`username is ${user} and his/her age is ${age} and he is not eligible for voting`)
// }

// const day = 6;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// for(let i = 1; i<=5; i++){
//     console.log(i)
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// while (i <=5) {
//     console.log(i)
//     i++;
// }

//=======================================================================================
//here i learn about functions,arrow functions parameters and arguments,default values, Rest Operators,Return values,global scope, hoisting


// function myFun(name,role || "user") {  //<---- function declaration with parameters and default values
//     console.log(`username is ${name} and his role is ${role}`)
// }

// myFun("rahul","admin")

// const myFun2 = function(name,role) { //<---- function expression (anonymous function with parameters)
//     console.log(`username is ${name} and his role is ${role}`)
// }

// const myFun3 = function myFun(name,role || "user"){ //<---- function expression (named function with parameters and default values)
//     console.log(`username is ${name} and his role is ${role}`)
// }

// const myFun4 = (name,role) => { //<---- arrow function with parameters
//     console.log(`username is ${name} and his role is ${role}`)
// }

// myFun2("rahul","admin") //<---- function call with arguments
// myFun3("rahul") //<---- function call with no arguments default value will be used
// myFun4("rahul","admin") //<---- function call with arguments

// const addNumbers = (...arguments) => {
//     total = 0;
//     for( let num of arguments){
//         total += num;
//     }
//     return total
// };

// console.log(addNumbers(5,8,82,42,56,1,6,3,2,4,2,12))

// const fun1 = (para1,para2,...args) => {
//     console.log(para1)
//     console.log(para2)
//     console.log(args)
// }

// fun1(2,5,53,62,"gs","ga")

// const fun2 = (a, b) => {
//     console.log("hello")
//     const total = a + b;
//     return total
//     console.log("bye")
// };

// const total = fun2(2, 5);
// console.log(total)

// hoistingFun();

// function hoistingFun(){
//     console.log("Hoisting is working")
// }

// fun1()

// const fun1 = function hoistingFun(){
//     console.log("Hoisting is not working")
// }


//=======================================================================================
//here i learn about objects like object literal,properties,methods,This,call(),appply(),bind(),Destructuring, spread and rest operator,Object.assign(), Object.keys(), Object.values(), Object.entries(),JSON.Stringify(),JSON.parse()

// const obj1 = {} //<---- object literal
// const obj2 = new Object() //<---- object constructor
// const obj3 = {name:"Mark", address:"New York"} //<---- object literal with properties

// const obj = {name:"mark", address:"New York"}
// console.log(obj)

// const obj = {
//     name:"mark",
//     address:"New York",
//     details: function () {  //<---- This is a method
//         console.log(`user ${this.name} is from ${this.address}`)
//     }
// }

// const obj2 = {
//     name:"Mohan",
//     address:"Mumbai",
// }

// obj2.details = obj.details;

// obj2.details();


// function testThis(){
//     console.log(this)
// }

// testThis()


// const login = {
//     name:"Rahul",
//     loginLater(){
//         setTimeout(function(){
//             console.log(this.name)
//         },1000)

//         setTimeout(() => {
//             console.log(this.name)
//         },2000)
//     }
// }


// login.loginLater()


// const user = {
//     name:"Mark"
// }

// const user2 = {
//     name:"Rahul"
// }


// function demo(){
//     console.log(this.name)
// }

// demo.call(user,user2);
// demo.apply([user,user2]);

// const obj = {
//     name:"Mark",
//     address:"New York",
//     details: function () {  //<---- This is a method
//         console.log(`user ${this.name} is from ${this.address}`)
//     }
// }

// const {name:userName,address:userAddress,details:userDetails} = obj

// console.log(userName)
// console.log(userAddress)
// userDetails.call(obj)

// const student = {
//     name:"Karan",
//     std:"10th",
//     roll:"17",
//     address:{
//         city:"Delhi",
//         state:"Delhi",
//         pincode:110001
//     }
// }

// const {name,std,roll,address:{city,state,pincode}} = student;

// console.log(`student name is ${name} and he is studying in ${std} and his roll number is ${roll} and he is from ${city} and state is ${state} and pincode is ${pincode}`)


// const {roll,...details} = student
// const {...studentDetails} = student

// console.log(roll)
// console.log(details)
// console.log(studentDetails)


// const obj = {name:"Jhon", age:28}
// const copyObj = {...obj}
// console.log(obj)
// console.log(copyObj)

// const obj1 = {name:"Jhon", age:28}
// const obj2 = {name:"Karan", address:"Delhi"}

// const obj3 = {...obj1,...obj2}
// console.log(obj3)


// const obj = {name:"Jhon", age:23}
// const copyObj = {...obj}
// // const copyObj2 = obj
// const copyObj3 = Object.assign({},obj)

// copyObj.name = "Rahul"
// // copyObj2.name = "Karan"
// copyObj3.name = "Karan"

// console.log(obj)
// console.log(copyObj)
// console.log(copyObj3)

// const obj = {
//     name:"Mark",
//     age:32,
//     address:{
//         city:"Delhi",
//         state:"Delhi",
//         pincode:110001
//     }
// }

// const keys = Object.keys(obj)
// console.log(keys) 

// const values = Object.values(obj)
// console.log(values)

// const entries = Object.entries(obj)
// console.log(entries)



//=======================================================================================
// here i learn about arrays like array literal, array constructor,create and access elements, forEach, map, filter, reduce, find, findIndex, includes, spread operator, destructuring arrays

// const arr = [] //<--- This is an array literal
// const arr2 = new Array() //<--- This is an array constructor
// const arr3 = [1,2,3] //<--- This is an array literal


// const arr = [3,4,8,1,3,5,6,7]
// const arr2 = ["one","two","three"]

// const addOnLast = arr.push(8,3)
// const removeOnLast = arr.pop()
// const removeFromFirst = arr.shift()
// const addOnFirst = arr.unshift(1,5)
// const sliceArr = arr.slice(0,5)
// const spliceArr = arr.splice(0,4)
// console.log(arr)
// console.log(sliceArr)


// const arr3 = arr.concat(arr2)
// const arr4 = [...arr,...arr2]
// console.log(arr3)
// console.log(arr4)

// console.log(arr3 === arr4)

// const joinArr = arr3.join(",")
// const sortArr = arr3.sort()
// console.log(joinArr)
// console.log(sortArr)

// const reverseArr = arr3.reverse()
// console.log(reverseArr)

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const arr2 = arr.forEach((num) => {
//     console.log(num * 2)
// })

// const arrMap = arr.map((num) => {
//     return num * 2
// })

// const arrFilter = arr.filter((num) => {
//     return num % 2 === 0
// })

// const arrReduce = arr.reduce((acc,num) => {
//     return acc + num
// })

// console.log(arrReduce)



// const arr = [{id:1,name:"Arush",age:11},{id:2,name:"Karan",age:12},{id:3,name:"Rahul",age:13}]

// const arrFind = arr.find((user) => user.id === 2)
// const arrFindIndex = arr.findIndex((user) => user.id === 2)
// const arrIncludes = arr.includes({id:2,name:"Karan",age:12})

// console.log(arrFind)
// console.log(arrFindIndex)
// console.log(arrIncludes)
//=======================================================================================
// here i learn about strings common methods like slice, substring, split, trim, replace, replaceAll, includes, startsWith, endsWith, toUpperCase, toLowerCase

// const str = "Hello World"

// const strSlice = str.slice(0,3)
// const strSubstrings = str.substring(0,3)
// const strSplit = str.split(" ")
// const strTrim = str.trim()
// const strReplace = str.replace("World","Rahul")
// const strReplaceAll = str.replaceAll("l","r")
// const strIncludes = str.includes("World")
// const strStartsWith = str.startsWith("H")
// const strEndsWith = str.endsWith("d")
// const strToUpperCase = str.toUpperCase()
// const strLowerCase = str.toLowerCase()

// console.log(strLowerCase)


//=======================================================================================
//here i learn about numbers common methods like parseInt, parseFloat, isNaN, toFixed and Math objects like floor, ceil, round, random, max, min, pow

// const num = "123"
// const num2 = "2.42"
// const num3 = 124.5233244
// const numParseInt = parseInt(num)
// const numParseFloat = parseFloat(num2)
// const numIsNumber = isNaN(num)
// const numToFixed = num3.toFixed(2)


// console.log(numToFixed)

// const num = 23.50
// const numArr = [32,4,52,23,65,43,55]

// const numFloor = Math.floor(num)
// const numCeil = Math.ceil(num)
// const numRound = Math.round(num)
// const numRandom = Math.random()
// const numMax = Math.max(...numArr)
// const numMin = Math.min(...numArr)
// const numPower = Math.pow(3,3)
// const numSqrt = Math.sqrt(9)

// console.log(`${numFloor} and ${numCeil} and ${numRound}`)
// console.log(Math.floor(numRandom * 10))
// console.log(numSqrt)

//=======================================================================================
// here i learn about dates 

// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// const date = new Date();
// const date2 = new Date(2000,9,6,8,12,0,0);


// console.log(date)
// console.log(date2.toDateString())

// date.setFullYear(2000);
// date.setMonth(9);
// date.setDate(6);

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getDay())


//=======================================================================================
// here i learn about lexical scoping, closure, scope chaining

// function fun1(name){
//     function innerFun(){
//         console.log(`Hello ${name}`)
//     }
//     return innerFun;
// }

// const fun2 = fun1()
// fun2()


// function fun1(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// const fun2 = fun1()
// fun2()
// fun2()
// fun2()


//=======================================================================================


