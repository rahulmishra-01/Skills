// console.log("Hello World")
// console.log(2+4*6/2-2)
// console.log("24" + 2)
// console.log("24" - 2)



// 1
// console.log("10" + 5);
// its answer is 105 in string because + operator works 2 types in js first one is addition and second one is string concatinatin if both are numbers so its add both of them and in this case if both are numbers so its answer would be 10 but in this case 10 is string so + operator works like second method which is string concatination in this way 10 is same as string but + operator convert 5 as a string and concatinate both of them thats why its return 105

// 2
// console.log("10" - "5");
//its answer is 5 because - operator work only in one way which is substraction so its minus 10 to 5 which is 5

// 3
// console.log("10" * "2");
//its answer is 20 because * operator also work only with numbers so js try to convert into a number like when we try to intract between string and numbers using -*/%** these operators so js try to convert string value into numbers like "10" * "2" so js try to convert into in numbers like Number("10") * Number("2") thats why the answer is 20

// 4
// console.log("10" / "2");
//its answer is 5

// 5
// console.log("10" % "3");
//its answer is 1

// 6
// console.log("10" + true);
//its answer is 10true in string


// 7
// console.log("10" - true);
//its answer is 9 because - operator only works with numbers so - operator try to convert its operands in numbers so Number("10") is 10 and Number(true) value is 1 because in computer science true represents as a 1 and false represents as a 0 in binary so javascript also follow this convention thats why when we convert true value into Number(true) its value is 1 that why answer is 9 


// 8
// console.log("10" + false);
//its answer is 10false in string

// 9
// console.log("10" - false);
//its answer is 10

// 10
// console.log("5" + null);
//its answer is 5null in string


// 11
// console.log("5" - null);
//its answer is 5 because when we convert into a number "5" is 5 and null is 0 so 5 - 0 is 5 thats the answer

// 12
// console.log("5" + undefined);
//its answer is 5undefined in string

// 13
// console.log("5" - undefined);
//its answer is NaN because when we convert in a number "5" value is 5 and then undefined value is NaN after converting into a Number so 5 - NaN = NaN thats the answer

// 14
// console.log("2" + NaN);
//its answer is 2NaN

// 15
// console.log("2" - NaN);
//its answer is NaN

// 16
// console.log(null + undefined);
//its answer is NaN

// 17
// console.log(true + true);
//its answer is 2 because true is not a string thats why its simply add because javascript know true value is 1 so thats why it simply add 1 + 1 thats why answer is 2

// 18
// console.log(true + false);
//its answer is 1

// 19
// console.log(false - true);
//its answer is -1 

// 20
// console.log([] + []);
//its answer is "" empty string because + operator works only in two way eather a string concatinations or addition so if value is "" js internally try to convert into a Number but in this case value is non-primitive so firstly js try to convert into primitive value using .toString which convert [] array to "" string so both [] arrays converted into "" empty string so "" + "" = "" thats the answer

// 21
// console.log([] + {});
//its answer is "[object Object]" because when + operator try to convert in into a primitive using .toString its return "[object Object]" because when we try to convert {} empty object like {}.toString its return "[object Object]" only that much i understand for now so that why answer is "[object Object]"

// 22
// console.log({} + []);
//its answer is "[object Object]"

// 23
// console.log("5" * []);
//its answer is 0 because any number multiply by 0 the answer is 0

// 24
// console.log("5" * {});
//its answer is NaN because when js try to convert "[object Object]" into a Number its return NaN


// 25
// console.log("2" ** "3"); // exponentiation
//its answer is 8 because ** exponentiation also convert these strings into numbers and 2 ** 3 = 8  ex. 2 * 2 * 2  
                 //   4 * 2 = 8