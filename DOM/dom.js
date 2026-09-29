console.log("Dom in js ");

//! DOM -> dom stand for Document object model

//! What is DOM?
//* Dom is application programing interface (API) which will allows us to access the html element inside the JS to provide functionalities
//* The Hierarchical representation of a HTML structure in the from nodes.
//? OR
//* The inverted tree-like structure of a HTML documnet is called as DOM 

//! Why do we need DOM ? 
//? 1. DOM is a bridge between the HTML documnet and JS logic
//? 2. Without DOM we can not manipulate (create,modify,or remove ) the HTML structure 

//! how to create a DOM ? 
//* When a browser load HTML document :
//* 1.it read a HTML structure.
//* 2. It will convert the html element into the tree-like structure
//* 3.This tree is called as DOM 
//* That means javascript can't talk to the html structure instead of it will talk to the DOM

//! type of DOM ? 
//? 1.Core DOM -> All type of documents
//? 2.HTML DOM -> only for HTML document
//? 3.XML DOM -> only for XML document
//? 4.React DOM -> virtual DOM

//! What is Node ? 
//* A node is basic building block in js 
//? OR
//* a node is a piece of item in js which will represent different types of items is called as Node 

//? Types of node 
//* 1. documnet node - > top-most node 
//* 2. element node -> h1,p,div,img,ul,etc --> All html 
//* 3. attribute node -> id,class,src,hreg,etc..
//* 4. commnet node -> comment inside the html
//* 5. leaf node - > the node present at the end of the hierachy is called as leaf node
//* 6. text node -> Text node represent the content or text inside the html element
//* 7. DocumentFragement node 

//! What is document ? 
//* The document is a globle object provided by the browser
//* here document is resprent the html structure .

//? document properties : (direct access properties)
//* Syntax : document.propertyName

//? document.titl
console.log(document.title);
document.title = "Update My Document";

//? document.body
console.log(document.body);
//? document.head
console.log(document.head);

//? document.url
console.log(document.url);

//? document.all
console.log(document.all); // HTML collections 

//! Indirect Access Of HTML element 
//* Indirect access means acacessing the html element by taking referance of an other element .

let list = document.getElementById("list");
console.log(list); // 1st li 

//! 1.parentElement :
console.log(list.parentElement); // ul
console.log(list.parentNode); // ul
console.log(list.parentElement.parentElement); 

//! 2. nextElementSibling :
console.log(list.nextElementSibling);

//! 3. childNode :
//* The childNode return all types of nodes (HTML element,text,comment,whitespace,consider as text node etc.)
let box = document.getElementById(box.childNodes)

//! 4. children : 
//* The childNode return only html nodes (HTML element only )
//* it ignore the text , attribute , and comment node 
console.log(box.children);



console.log("DOM Method in js");

//! DOM Direct Access Properties : 

//? 1 document.images
console.log(document.images);

//? 2 document.forms
console.log(document.forms);

//? 3 document.linaks
console.log(document.links);

//? 4 document.stylsheet
console.log(document.styleSheets);

//? 5 document.script
console.log(document.scripts);
console.log("DOM methods ");

//? 1 document.getElementById
//* The document.getElementById() methods is used to access the html element by their specific id.
//! Syntax : document.getElementById("id");
//! Return Type : HTML element or null
let heading = document.getElementById("head");
console.log(heading);

//! style attribute : 
heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';

//? 2. document.getElementByClassName():
//* The Document .getElementByClassName() Method is used to access the multiple HTML element by their by their specific class name .
//! Syntax : document.getElementByClassName("class-name");
//! Return Type: HTMLCollection

//! HTML Collection 
//* The HTML Collection or group of HTML element only is called is called as HTML Collection.
//* It will look like an array but it is not an actual or true array

let paras = document.getElementsByClassName("para")
console.log(paras);

//! converting to html Collection into the array : 
//! 1. array.form():

let convertedHTMLCollection = Array.from(paras)
console.log(convertedHTMLCollection);
console.log(Array.isArray(convertedHTMLCollection)); //true
convertedHTMLCollection.forEach((para,index)=>{
    // if(index == 1){
    //     para.style.border = "2px solid blue"
    // }
    para.style.border = "2px solid blue";
});

//! By Using Spread Operator ...varName
let htmlToArrayBySpread = [...paras];
console.log(htmlToArrayBySpread);

htmlToArrayBySpread.forEach((paras)=>{
   paras.style.color = 'teal';
});

//? 3. document.getElementByTagName() : 
//* The documen .getElementByTagName() methods is used to access multiple html element by their name specific tag name 
//? Syntax : document.getElementByTagName('tagame');
//* Return Type:HTMLCollection 
let allpara = document.getElementsByTagName('p');
console.log(allpara);

document.getElementsByName

//? 4.document.getElementsByName
//* The Document.getElementsByName() methods is used to access the all matching element by their specific css selectors.
//! Syntax : document.getElementsByName("name-value")
//! Return Type : NodeList[]

//! What is NodeList ? 
//* The NodeList is a Collection different Types of node such as text node , element node , attribute node ,comment node , getElementByClassName
//* By Document NodeList support the forEach() methods but does'nt support the map() method.

let genders = document.getElementsByName('gender')
console.log(genders);
console.log(Array.isArray(genders)); //False

genders.forEach((gender,index)=>{
    if (index == 0){
        gender.checked = true;
    }
});

// genders.map(() = > {
// })

//? 5. document.querySelector ():
//* The  document.querySelector () method is used to access the first matching element by their by their specific css selectors
//! Syntax : document.querySelector("css-selectors")
//! Return Type : First matching css -element

let classPara = document.querySelector(".para");
console.log(classPara);

//? 6 document.querySelectorAll():
//* The document.querySelectorAll () Method is used to accesss the all matching element by their specific css selectors.
//! Syntax : document.querySelectorAll('css-selector')
//! Return Type : NodeList[]

let allParaEle = document.querySelectorAll(".para");
console.log(allParaEle);

//* Final Summary : 
//? 1. HTML Collection -> getElementByClassName() & getElementByTagName()
//? 2. Node List - > getElementsByName() & querySelectorAll()












