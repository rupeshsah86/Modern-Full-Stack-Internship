// console.log(a);  // undefined

// var a = 10; // JS engine is able to find the definition of variable a
// // so not throwing Reference Error

// sayHello();

// let b = 50;

// function sayHello(){
//     console.log("Hello World");
// }

// console.log(b);  // undefined
// console.log("Hey there!"); // Hey there
// let b = 10;
// console.log("B",b);
// window.b
// this b variable is not stored in global scope
// it is stored in some other scope -- script

// Are variables declared with let and const hoisted?
// Yes, they are hoisted but in separate scope -- script
// Why are we not able to access them like var?
// They are in TDZ - Temporal Dead Zone

/*
Temporal Dead Zone is the time until the variables declared with 
let and const gets their value assigned
*/

// variables declared with var keyword gets memory in global scope
// they are automatically bind with window keyword
// window object - automatically created by JS Engine in browsers
// It contains multiples variables and functions which we can use
