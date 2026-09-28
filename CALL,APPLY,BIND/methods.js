
//! Basically call ,apply and bind method call , apply , bind method borrow the logic in javascript 

const { use } = require("react")

//! Call():
//* The call method which is used to borrow the logic and pass dynamic object 

//? syntax : methodname.call(thisArg)
//? Here thisArg Which is used to provide the actual object 

// let person1 = {
//     username : "Satish"
// }

// let person2 = {
//     username : "janvi"
// }

// function printobj() {
//     console.log(`hellow ,${this.username}`)
// }

// printobj.call(person1)


//! Apply ()
//* The apply method same like call but we accept the multiple arguments 

//? syntax : methodname.apply(thisArg,[arg1,arg2......argN])

// let user1 = {
//     name : "chintu"
// }

// let user2 = {
//     name : "montu"
// }

// function printobj(city,pincode){
//     console.log(`User Details : ${this.name} , ${city},${pincode}`)
// }
// printobj.apply(user1,["una","362565"])


//! Bind()
//* the bind method which is used to creat a new fution with this argument are also known as bind method we can't call automatic require to the fution call 

//? let newFunc = functionName.bind(thisArg,arg1,arg2....)

let user1 = {
    name : "satish"
}

function printDeatils(city,pincode) {
    console.log(`User : ${this.name},${city},${pincode}`);
}
let userFunc = printDeatils.bind(user1,"Una","362565")

userFunc()