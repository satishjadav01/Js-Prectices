//! What is promise ?
//* promise is an object in js
//* A Promise is a eventual compliton or failer or an ansychronous and it result the output

//? pending -> initial
//? resolve -> fullfil
//? rejected ->rejection
//? settled -> resolved

let myPromise = new Promise((res, rej) => {
  let network = Math.floor(Math.random() * 1000);
  console.log(network);

  if (network > 80) {
    resolve("network are coming...");
  } else {
    reject("network may be slow please try agian... ");
  }
});
console.log(myPromise);

// How to handle promise
// There are two way to handle the promises
//? 1. .then 2. catch

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });


// async function printData() {
//   try {
//     let data = await myPromise;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// printData()
