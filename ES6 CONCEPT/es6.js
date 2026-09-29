//! ES6 Concept : 
//* ES stand for ECMA SCRIPT which was releadsed in this 2015
//* ES6 is was majar update in javascript history

//? give ne updated of e6 concept

//? 1. let and const variavble 
//? 2. Arrow Funcution 
//? 3. Symbol - Primitive Datatype
//? 4. Funtion with default parameter
//? 6. module
//? 7. arrow funtion
//? 8. backstic 
//? 9. class
//? 10. asyc and await 
//? 11. promice
//? 12. Destructering

//?! Funtion with argument 
//* the parameter which is passed inside the funtion defination with default values is called a function with default parameter 

// function geet(name = "satish") {
//     console.log(`hwllo ${name} , how are you`)
// }
// greet()


//! REST PARAMETER : 
//* which is used to collectio reaming the values 

//? sytax : ...varName

//! Spread Operator With Array :
let arr1 = [10,20,30];
let arr2 = [40,50];

let newArray1 = [...arr1,...arr2];
console.log(newArray1);

//! Spread Operator with function:
function getNumber(...nums) { 
    console.log(...nums);
    
}
let numbers = [10,20,30,40,50];
getNumber(...numbers);


//! object
let obj1 = {name:"Dhruv"};
let obj2 = {...obj1,age:23};
console.log(obj2);

//! 6.Spread Operator:
//* It is used to Spread or unpack the values .
//? syntax : ...varName
let arr11 = [10,20,30,40];
let arr22 = [50,60];
let newArray = [...arr1,...arr2];
console.log(newArray);

//! 5. Destructuring 
//* Destructuring means divide or breaking down big-structure into small values (variable) for easy use or access. we can perform Destructuring for Array and object

//? 1.Array Destructuring
let mixArray = [10,
    "john",
    true,
    null,
    undefined,
    function(){
        console.log("This is funtion");
    },
    [30,40,50],
];
//! Traditional way to access the array element:
console.log(mixArray[0]);

//! Destructuring of an array:
let [a,b,c,d,e,f,g] = mixArray;
console.log(a);
console.log(b);
console.log(g);

//! Again we are Destructuring : 
let [x,y,z] = g;
console.log(x);