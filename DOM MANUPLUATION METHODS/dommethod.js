console.log("DOM MANIPULATION METHODS IN JS");

//! DOM Manipulation Methods
//* DOM manipulation method are allows us to create,remove and change or modify the HTML elements inside the JS.
//* Basically we will create the HTML elements dynamically inside the javascript itself instead of writing in HTML document   

//! Types Of DOM Manipulation Methods

//? 1.createElement()
//? 2.appendchild()
//? 3.removechild()

//! Create the HTML element 
let para = document.createElement("p")
console.log(para)

//! How to add attributes to the create element : 
para.className = "para";
para.id = "para1";
console.log(para);

para.innerText = "The Paragraph is created dynamically with the help of createElement()";

document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("container").appendChild(para);
});

document.getElementById('remove-btn').addEventListener("click",()=>{
    document.getElementById("container").removeChild(para);
});




