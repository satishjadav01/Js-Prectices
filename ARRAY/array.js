//! What is Array ?? 
//* Array is an object in javascript 
//* Array mean colletion multiple value store in single variable knwon as 

//? Homegenous Array 
//* The Array which consist of same type of data

// let Arrnum = [10,20,304,50,10]
// let ArrStirng = ["hello","bye","gn"]

// console.log(typeof Arrnum)
// console.log(typeof ArrStirng)

// Hetrogenous Array

// let Mixedarr = [
//     10,20,50,true,
//     null,
//     undefined,
//     "hello",
//     3.16,
//     function ArrF() {
//         console.log("This is an array in side function");
//     },
//     [60,40,20,[50]],
// ]


//! Ways to create an Array 
//? By Using Literal - []
//? By using Array() constuctor 


//! sing Array Literal []

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);


//! Using Array() Constructor

// let fruitss = new Array("Apple", "Banana", "Mango");
// console.log(fruitss);


//? Array Methods 

//! 1. PUSH()
//* The push method which is used add one or more elements form end side .

//? array.push()

// let fruits = ["Apple","Banana"]
// fruits.push("Mango");
// console.log(fruits)

//! 2. POP()
//* The POP method which is used to remove the last items from array also known as POP 

//? array.pop()

// let fruits = ["Apple","Banana","mango"]
// fruits.pop();
// console.log(fruits);


//! unshift()
//* Add one or more element to beginning side (first )

// num.unshift;

// let num = [10,20,30]
// num.unshift(25);
// console.log(num)

//! shift ()

//* remove first elemets from array 

//? syntax : arr.shift(value)

// let num = [10,20,30]
// num.shift(25);
// console.log(num)


//! includes()
//* check array contain a specific value are present or not 

//? syntaxt : array.include (value)
//? return type : boolean

// let num = [10,20,25,260,10]

// console.log(num.includes(10));

//! Indexof()

//* return the specifice index of element 

//? syntax : arr.indexOf(value);

