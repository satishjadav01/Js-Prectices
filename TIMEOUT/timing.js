console.log("Timing funcations in js ");

//? Timing Function Types  :

//~ 1.setTimeout()
//~ 2.setInterval()
//~ 3.clearTimeout()
//~ 4.clearInterval()

//! 1. setTimeout() :
//* The setTimeout() Method is used to dealy the task by creation period the time

//^ Syntax : setTimeout(()=>{},timeout(ms))

console.log("Start"); 

// let task = setTimeout(() =>{
//     alert("Pouse")
// },500);

console.log("End");
document.getElementById("btn").addEventListener("click",()=>{
    clearTimeout(task);
});

//! 2. setInterval():
//* The setInterval() Method is used to repeat the task by creation period the time
//* The setInterval() will excude again and again.

let count = 10;
let timer = setInterval(()=>{
    console.log("count : ",count--);
    if (count == 0){
        clearInterval(timer);
        console.log("Bommm ");
    }
},1000);

console.log("Timing funcations in js ");

//? Timing Function Types  :

//~ 1.setTimeout()
//~ 2.setInterval()
//~ 3.clearTimeout()
//~ 4.clearInterval()

//! 1. setTimeout() :
//* The setTimeout() Method is used to dealy the task by creation period the time

//^ Syntax : setTimeout(()=>{},timeout(ms))

console.log("Start"); 

// let task = setTimeout(() =>{
//     alert("Pouse")
// },500);

console.log("End");
document.getElementById("btn").addEventListener("click",()=>{
    clearTimeout(task);
});

//! 2. setInterval():
//* The setInterval() Method is used to repeat the task by creation period the time
//* The setInterval() will excude again and again.

let count = 10;
let timer = setInterval(()=>{
    console.log("count : ",count--);
    if (count == 0){
        clearInterval(timer);
        console.log("Bommm ");
    }
},1000);
    