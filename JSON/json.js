console.log("JSON in Javascript ");

//! JSON
//* JSON Stand for Javascript Object Notation
//* It is a light-weight format for structring the data

//* Whenever you want send the data from browser to server , data must be string formate 

//* Whenever you want send the data from server to browser , data must be js Object format

//! JSON will provide two methods 

//! 1. JSON .parse()
//* The JSON.parse() will convert the JSON string into the JS object.

//^ Syntax : JSON.parse():
//* The JSON.parse() will convert the JSON string into the JS object.

let jsonString = '{"name" : "satish","age":10,"status":true}';
console.log(jsonString);
console.log(JSON.parse(jsonString));

//! 2.JSON.stringify():
//* The JSON.stringify() will convert the JS object into the JSON string

//^ Syntax : JSON.stringify(jsObject)

let emp = {
    eName : "abc",
    eAge : 20,
    eSalary : 3000
};
console.log(JSON.stringify(emp));

//! What is collection ?
//* A collection is a group of multiple document.
//* It is respreset by - []

//! What is document ? 
//* A document is collection of key value pair/field
//* It is respreset by - {}