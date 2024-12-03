/**** Value and variables in JavaScript  ****/
// var myName = 'Ratan Pandey';
// var myAge = 26;
// console.log(myAge);

// Naming practice
// var _myName = "Ratan"; // Valid
// var 1myName = "Pandey"; // Not Valid
// var _1my__Name = "Developer"; // Valid
// var $myName = "Ratan Pandey"; // Valid
// var _myName% = "Ratan Pandey Developer"; // Not Valid


/**** Data Type in JavaScript  ****/
//var myName = "Ratan Pandey";

//var myAge = 31;

// var iAmRatan = true;

// console.log(iAmRatan);

// typeof operator
// console.log(typeof (iAmRatan));


// DataType Practice
// console.log(10 + "20"); // 1020
// console.log(9 - "4"); // 5, 1st JavaScript  Bug
// console.log("Java " + "Script"); // Java Script
// console.log(" " + " "); //
// console.log(" " + 0); // 0
// console.log("Ratan" + "Pandey"); // output = NaN (Not a number)
// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(false + true); // 1
// console.log(false - true); // -1

// Difference between null vs undefined?

// var iAmUseLess = null;
// console.log(iAmUseLess);
// console.log(typeof (iAmUseLess));
// 2nd JavaScript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof (iAmStandBy));


// What is NaN?
// var myPhoneNumber = 9876543210;
// var myName = "Ratan Pandey";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// NaN practice

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// Assignment operators
// An assignment operator assigns a value to its left operand
// Based on the value of its right operand.
// The simple assignment operator is equal (=).

// var x = 5;
// var y = 5;

// console.log("Is both x and y are equal or not" + x === y);
// console.log(x === y);
// //or
// console.log(`Is both x and y are equal or not : ${x === y}`);

// Arithmetic operators
// An arithmetic operator takes numerical values
// (either literals or variables) as their operands and returns a single numerical value.

// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);

// console.log("Reminder operator " + 81 % 8);

// The modulus operator (%) returns the division remainder

// 😄Increament and Decrement operator
// Operator: x++ or x-- or --x
// If used postfix, with operator after operand (for example, x++)
// The increment operator increaments and returns the value before increamenting.

// var num = 15;
// var newNum = num++ + 5;
// console.log(num);
// console.log(newNum);

// If used prefix, with operator before operand (for example, ++x),
// The increment operator increaments and returns the value after increamenting.

// var num = 15;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

// 3️⃣ Comparison operators
// A comparison operator compares its operands and
// Return a logical value based on whether the comparison is true.

var a = 30;
var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal(!=)
// console.log(a != b);

// Greater than (>)
// console.log(a > b);

// Greater than or equal (>=)
// console.log(a >= b);

// Less than (<)
// console.log(a < b);

// Less than or equal (<=)
// console.log(a <= b);

// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values;
// When they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of
// operands is true if and only if all of its operands are true.

// console.log(a > b && b > 0);

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true.

// console.log(a > b || b > 0);

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation)
// takes true to falsity and vice versa.

// console.log(!false);

// 5️⃣ String Concatenation(Operators)
// The Concatenation operators (+) concatenates two string values together, returning another string that is the union of the two operand strings

//console.log("Ratan" + " Pandey");


// What will be the output of 3**3(Exponentiation operator)?
// console.log(3 ** 3); // 3*3*3
// console.log(10 ** -1); // 1/10

// What will be the output, when we add a number and a string?
// console.log(5 + "Ratan");
// console.log(5 - "Ratan");

// Write a program to swap two numbers?
// var a = 5;
// var b = 10;

// var c = b // c=10
// b = a // b=5
// a = c;

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

// Write a program to swap two numbers without using third variable?
// var a = 5;
// var b = 10;

// // Output b = 5; a = 10;

// a = a + b; // a = 15;
// b = a - b // b = 5;
// a = a - b; // a = 10;

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);


// 🙋‍♂️👨‍🎓 Interview Question 4 🙋‍♂️👨‍🎓
// What is the difference between == and === ?
//Sol:
// var num1 = 5;
// var num2 = '5';

// console.log(typeof (num1));
// console.log(typeof (num2));
// console.log(num1 == num2);
// console.log(num1 === num2);


/*** Section 6👍 Cpntrol Statement ***/
// 1️⃣ IF ... else
// The if statment executes a statement if a specified condition is truthy
// If the condition is falsy, another statment can be executed

// var tomr = 'rain';

// if (tomr == 'rain') {
//     console.log("Take a raincoat");
// } else {
//     console.log("No need to take raincoat");
// }


// 🙋‍♂️👨‍🎓 Question 🙋‍♂️👨‍🎓
// Write a program that works out whether if a given year is a leap year or not?

// var year = 2020;
// debugger;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400) {
//             console.log("The Year " + year + " is a leap year");
//         } else {
//             console.log("The Year " + year + " is not a leap year");
//         }
//     } else {
//         console.log("The Year " + year + " is a leap year");
//     }
// } else {
//     console.log("The Year " + year + " is not a leap year");
// }

// 🙋‍♂️👨‍🎓 Question 🙋‍♂️👨‍🎓
// What is truthy and falsy values in JavaScript?

// We have total 5 falsy values in javaScript
// ✋ 0,"", undefined,null,NaN, flase** is false anyway

if (score = 0) {
    console.log("Yay, We won the game 😅");
} else {
    console.log("Yay, We loss the game 😟");
}