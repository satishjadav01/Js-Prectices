//! What is object ?? 
//* collection of key value pair are also known as object 

// let student={
//     sName : "satish",
//     sAge : 10,
//     sSkill : ["html","css","js"]
// }
// console.log(student.sSkill[2]);


//! What is Method in Object ?? 
//* in short function stored inside an object known as object 

// let student = {
//     sName : "satish",
//     age:20,

//     greet : function () {
//         console.log(`Hellow , my name is ${this.sName}`)
//     }
// }
// student.greet();


//! object methods 

const student = {
    sName : "satish",
    sId : 1054,
    sAge : 21
}
console.log(student.sAge)

//! 1.key

//* it wil return All keys from an object 

console.log(Object.keys(student))

//! values
//* it will return All value from object 

console.log(Object.values(student))

//! assign 
//* it is used to create an new object is also known as assign

//? syntax : object.assign(targetobj,newobj)

let newalyCreateObj = Object.assign({},{name:"john",age:20});
console.log(newalyCreateObj);
