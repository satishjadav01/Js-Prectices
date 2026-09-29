//! What is Event in JS ? 
//* Event is object in javascript 

function notify() {
    alert("button is clicked")
}

//! what is addEventListener()
//* The addEventListener() which is used to add and attech the event in javascript

//? syntax : addEventListener(Event_type,callbackfuntion){
//? }

//? Mouse Event : click,dbclick,mouseleave,etc 

// let btn = document.getElementById('btn1');
// console.log(btn);

//! What is e ? 
//* e stand for Event  in javascript 

let btn = document.querySelectorAll(".btn");
console.log(btn)

btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target);
        
    })
});

//! e.preventDefault():
//* The e.preventDefault method which is used to prevent the default behaviour of an html element such as reloading pages , scroling page , realoding page etc.

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username = document.getElementById("username")
    console.log(username.value);
});

let username = document.getElementById("username");
let country = document.getElementById("country")




console.log("Remainning Events");

//! 2 from event 1) focus 2)blur

let username = document.querySelector("input[type='text']");
console.log(username);

username.addEventListener("focus",()=>{
    username.style.outline = "none"
    username.style.border = "2px solid green";
});

username.addEventListener("blur",()=>{
    username.style.outline = "none"
    username.style.border = "2px solid red";
});


//!3. keybord Events
document.getElementById("myText").addEventListener("keypress",(e)=>{
    console.log(e.key);
});

document.getElementById("coding").addEventListener("keydown",(e)=>{
    if (e.ctrlKey && e.key == "c"){
        e.preventDefault();
        alert("ctrl+c is disabled ")
    }
});

//! 4. keybord event
//? copy,past,cut

let editor = document.getElementById("editor");

editor.addEventListener("copy",(e)=>{
    console.log("text copied to clipboard ");
    e.clipboardData.setData("text/plain","copy nahi hoga bhai");
    e.preventDefault();
});

editor.addEventListener("cut",(e)=>{
    console.log('text is cut');
});

editor.addEventListener("paste",(e)=>{
    console.log('text is paste');
});

document.addEventListener('copy',(event)=>{
    const selection = document.getSelection().toString();
    console.log('user copied',selection);
});


// Exmple: Modify the data before it enters the clipboard
event.clipboardData.setData('text/plain', selection.toUpperCase());
event.preventDefault(); // Required to override default behavior





