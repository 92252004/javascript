// if
// const temperature = 41

// if (temperature>50) {
//     console.log("less than 50");
    
// } else{
// console.log("temperature is greater than 50");
// }
// console.log("execute");

// <,>,<=,>=,==,!=,===,!==

// const score = 200
// if (score >100){
//     const power = "fly"
//     console.log(`User Power:${power}`);
// }
// console.log(`User Power:${power}`);

// const balance = 1000

// if(balance>500) console.log("test");

// if (balance<500) {
//     console.log("less than 500");
    
// }else if(balance<750){
//     console.log("less than 750");
    
// }else if(balance<900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if (userLoggedIn&&debitCard&&2==3) {
    console.log("Allow to buy course");
    
}
if (loggedinFromGoogle || loggedinFromEmail) {
    console.log("user logged in");
}