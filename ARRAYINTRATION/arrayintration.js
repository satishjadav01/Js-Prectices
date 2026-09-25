//! Array Iteration Methods : 

//* The Array Iteration method are also known as advance method for modern JS as well as React js 


//? There are three type of static method 

//! 1) MAP()
//* The map() method which is used to interate one array and tranform each and every element presenet inside the array 

//? Syntax : arr.map((cValue,cIndex,cArray)=>{})
//? Return Type : New Array 

// let fruit = ["banan","apple","mango"]

// fruit.map((fruit,index)=>{
//     console.log(index,fruit)
// });



//! Filter 
//* The filter method which is used to filterout the element matching conditions 

//? syntax : filter(cValue,cIndex,cArray)

//? Return type : new array

// let evenNumber = [10,20,30,40,50,60,70,85]

// let evenNumbers = randomNumbers.filter((num)=>{
//     return num % 2 == 0;
// });
// console.log(evenNumbers);


    //? Real Time Example : 
    let products = [
    {
        name: "Himalaya Herbals Purifying Neem Face Wash",
        price: 180.0,
        category: "Personal Care",
    },
    {
        name: "Mamaearth Onion Hair Oil",
        price: 399.0,
        category: "Personal Care",
    },
    {
        name: "Saffola Gold Blended Edible Oil (5L)",
        price: 680.0,
        category: "Groceries",
    },
    {
        name: "Amul Butter (500g)",
        price: 260.0,
        category: "Groceries",
    },
    {
        name: "Prestige Svachh Pressure Cooker (3L)",
        price: 1350.0,
        category: "Home Appliances",
    },
    {
        name: "Bajaj Pulsar 150 Motorcycle",
        price: 110000.0,
        category: "Vehicles",
    },
    {
        name: "Tata Salt (1kg)",
        price: 30.0,
        category: "Groceries",
    },
    {
        name: "Fastrack Analogue Watch (Men's)",
        price: 2500.0,
        category: "Accessories",
    },
    {
        name: "Mi Super Bass Wireless Headphones",
        price: 1799.0,
        category: "Electronics",
    },
    {
        name: "Patanjali Dant Kanti Toothpaste",
        price: 90.0,
        category: "Personal Care",
    },
    ];

    // let personalCare = products.filter((products)=>{
    //     return products.category === "Personal Care"
    // })
    // console.log(personalCare);



    // let price = products.filter((products)=>{
    //     return products.price > 10;
    // });
    // console.log(price);



// ! 3) Reduce
//* The reduce method which is used to collection multiple array store in single value  

//? sytax : arr.reduce((acc,cuurent)=>{
//?     return acc + current     
//? },initialval)

//? return type : final value

// let number = [10,20,506,65,682,2456]

// let total = number.reduce((sum , num)=>{
//     return sum + num ;
// },0)

// console.log(total);

//! 4 forEach()
//* forEach method which is used to execute a function onece for every element 

//? syntax : arr.forEach(cValue,cIndex,cArray)

//? returntype : not new array 

let fruits = ["mango","banana","apple"]

fruits.forEach((fruits)=>{
    console.log(fruits);
});

// real 

// products.forEach((products)=>{
//     console.log(products.name)
//     console.log(products.price)
// })