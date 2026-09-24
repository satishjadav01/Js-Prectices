//! What is String ?? 
//* String is Collection of characters is also known as string 
//* String is inmuttable in nature 

//! How many ways to 
//* there are three ways to create an string 

//* By Using Single qoutes  ('')
//* By Using double qoutes (" ")
//* By using String Template (``)

//! How to create a string with help of string ()

let strObject = new String("")
console.log(strObject);
console.log(typeof strObject)


//! String Properties 
// * 1) Length
//* The Length properties which is used to count the characters Present inside the given string 

//? return Type Number 

let str1 = "Satish Jadav "
console.log(str1.length) 

//! String Methods 

//! charAt()
//* The charAt method which is used to return the specific index 

//? Syntaxt: str.charAt() 
//? return type : character 

let st2 = "java"
console.log(st2.charAt())

//! idexOf()
//* which is used return the index of substring 

//! include ()
//* The include method which is used to check value is present or not

//? Syntax : var.include
//? Return type : boolean

console.log(st2.includes("ja"))


//! IndexOf ()
//* The indexof Method which is used to return the value or charactor index 

//? syntax : var.indexOf( substring, startindex )
//? return type string,number 

console.log(st2.indexOf("a"))


//! split()
//* The split method which is used to saperate the element to an Array 

//? syntax : string.split()
//? return type:  Array 

console.log(st2.split(""))

//! toUppercase 
//* convert the character to lowercase to uppercase

//? Synatx : var.toUppercase 
//? Return type : string 

console.log(st2.toUpperCase());


//! toLowercase 
//* toLowercase oppisite toUppercase which is used conver small charector capital to 

//? Syntax :  var.toLowercase
//? Return Type : String 

console.log(st2.toLowerCase())


//! trim ()
//* The Trim method is used to remove the whitespca to  perticular character 
//? Syntaxt : string.trim()
//? return type : string.trim()

console.log(st2.trim())



// toUppercase , toLowercase , indexOf , trim() , include() , split()