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
