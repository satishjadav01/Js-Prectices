
//! What is Web API's ? 
//* Web API's Provided by the browser enviroment but by the javascript 
//* Here we are going to lern about storage Based API'storage

//! Storage Based API : 

//? 1. Local Storage 
//? 2. session storage
//? 3. cookies 

//! local storage
//* Inside the local storage your data will be stored as permanently untile and unless you will not delete it or remove it manually 

//? SIZE : 5-10 MB

//* The data will be stored in the local storage in the form of string format only 
//* if JS object -> convert it into the string -> stored

//? Localstorage will provie three methods :
//~ 1. Localstorage.setItem("key",value) 
//~ 2. Localstorage.getItem("key") 
//~ 1. Localstorage.removeItem("key") 

//! 1. for storing the data inside the Localstorage

window.localStorage.setItem("accessToken","dsadsadsadfdsfdgs")

//! 2. Reading the data from localStorage:

let accessToken = window.localStorage.getItem("accessToken")
console.log("accessToken");

//! 3 remove the accessToken
document.getElementById("btn").addEventListener("click",()=>{
    window.localStorage.removeItem("accessToken");
});


//! 2. session storage : 
//* The session storage will allows us to store the data only when your session or tab live/open
//? SIZE : 5-10 MB
//* The data will be stored in the session storage in the form if string format only.
//* if JS object --> convert it into the string --> store

let status = document.getElementById("status");
window.sessionStorage.setItem("isLoggeIn",true);

let userLoginStatus = sessionStorage.getItem("isLoggeIn")
console.log(userLoginStatus);

if (userLoginStatus == "true"){
    status.innerHTML = "welcome back User!";
}
document.getElementById("logout").addEventListener("click",()=>{
    sessionStorage.removeItem("isLoggedIn");
    status.innerHTML = "User Is Logout!";
});

//! 3. cookies :
//* cookies are nothing but t he small junks of file or code 

document.cookie = "Username = john"
console.log(document.cookie);