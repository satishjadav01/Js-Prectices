
console.log("BOM IN JAVASCRIPT ");

//! BOM 
//* BOM stand for Bom Object Model
//* BOM it is used to intrcet with the browser screen / window

//? What is window ? 
//* window is a globle object provided by each and every browser
//* window will provide some set of properties and methods in js

console.log(window); // globle object 

//! properties of object
//? 1.document
//? 2.screen
//? 3.navigator
//? 4.history
//? 5.console
//? 6.location

//? syntax : window.propertyName or properttyName

//! 1.document

console.log(window.document);

//! 2. screen:

console.log(window.screen);
console.log(screen);
console.log(screen.orientation);
console.log(screen.availHeight);

//! 3.navigator

console.log(navigator);

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(`Latitude : ${position.coords.latitude.toFixed(4)}`);
    console.log(`longitutde: ${position.coords.longitude}`);
});

let statusText = document.getElementById("statusText");
if (navigator.onLine){
    statusText.innerHTML = "You Are Online ";
    statusText.style.color = "green";
}else{
    statusText.innerHTML = "you are offline ";
    statusText.style.color = "red"
}

//! console 
//* console is a object provided by the window which is used to print the output  in the console of the browser (BDT)

console.log(console);
console.warn("This is warning ");
console.error("This is error ")

let arr = [1,2,3,4,5]
console.log(arr);
console.table(arr);

console.dir(document);

//! location :
//* location will give you  the information about the url.
console.log(location);
console.log(location.port);

document.getElementById('btn').addEventListener('click',()=>{
    location.reload();
    // location.href="https://www.google.com"
    location.assign("https://www.google.com");
});

// Methods 
//? 1.alert()
console.alert("hello");

//? 2. confirm():
// let userInput = confirm("are you sure want to delete your account")
// console.log(userInput);

//? 3 prompt():
let userInput = Number(prompt("Enter Your age : "))
console.log(userInput);
console.log(typeof userInput);

//? 4.open():
open('https://www.google.com')







