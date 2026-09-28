console.log("date object!");

//! Date object 
//* Date object is a inbuilt object in js 
//* date is used to handle and manipulate the data in js

//? syntax :
let todayDate = new Date();
console.log(todayDate);


//* Date Methods():
//? 1.getFullyear()
console.log(todayDate.getFullYear()); // 2026

//? 2.getDay():
console.log(todayDate.getDay());

//?3. getHours
console.log(todayDate.getHours());

//?4.getDate
console.log(todayDate.getDate());

//?5 getSeconds
console.log(todayDate.getSeconds());

//?6 getMonth
console.log(todayDate.getMonth());

//? 7.getMilliseconds
console.log(todayDate.getMilliseconds());

//! Formating The Date 

let currentDate = new Date();
console.log(currentDate);

let date = currentDate.getDate();
let month = String(currentDate.getMonth()+1).padStart(2,"0");
let year = currentDate.getFullYear();

let formattedDate = `${date}-${month}-${year}`;
console.log(formattedDate);


//! Date Set Method

let myDate = new Date();

myDate.setFullYear("2027");
myDate.setDate("9");
myDate.setMonth("3");

console.log(myDate);

//! Shortcut

let demoDate = new Date("2027","5","12","32","24","789");
console.log(demoDate);




