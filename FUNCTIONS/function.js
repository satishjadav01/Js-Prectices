//! What is Function ??
//* Function are nothing but block of code which is used to performing the specific task

// There are some types of Functions Like

//1 Named Funtion
//2 Anonymouse Funtion
//3 Function as expression
//4 IIFE
// callback
// Arrow Function
// HOF
// Generator Function

//! 1 Named Function
//* Give the name of funtion also known as named funtion

// function NamedF(){
//     console.log("This is Named Functions ")
// }
// NamedF();

//! 2 Function As Expression :
//* The Funtion as Expression which is store in variable also known as Function as Expression

// let Func = function(){
//     console.log("This is a Function as Expression ")
// }
// Func()

//! 3 IFFE Function ;
//* The IFFE Stand for Immidiatly Invoke Funtion as Expression
//* We can Automatically Call are also known as IFFE Funtion

// (function(){
//     console.log("This is a IFFE Funtion")
// }())

//! 4 Anonymouse Function
///* The Anonymouse Funtion That Don't have a any name also known as Anonymouse Funtion

// (function(){
//     console.log("This is a Anonymouse Funtion ")
// })();

//! 5 Arrow Funtion :
//* The Arrow Funtions short hand syntaxt to create an funtion

// let sum = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(sum(10,20))

//! 6 HOF
//* HOF Stand for Higher Order Funtion
//* The HOF Funtion Which is used to accept another function and it will return another function also known as HOF

// function calc(operation , num1 , num2){
//     return operation (num1 , num2)
// }

// function sum (num1 , num2) {
//     return num1 + num2
// }

// function sub (num1 , num2) {
//     return num1 - num2
// }

// console.log(calc(sub , 10 , 20));
// console.log(calc(sum , 10 , 20));

//! 7 Callback Funtion
//* The callback function which is pass another function as an expression also known as Callback function

// function orderItem(items, callback) {
//   console.log(`Ordering ${items}...`);

//   setTimeout(() => {
//     console.log(`${items} is ready..... `);
//     callback();
//   }, 5000);
// }
// function eatingFood() {
//   setTimeout(() => {
//     console.log("Eating Order.....");
//   }, 2000);
// }
// orderItem("pizaa", eatingFood);


