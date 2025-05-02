// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 

//const bigNumber = 1234567890n

// reference(non-primitive)
// 3 types : object, function, array

const heros = ["shaktiman","nagraj","doga"]
let myObj = {
     name: "heet",
     age:18,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);
