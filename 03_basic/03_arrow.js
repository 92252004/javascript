const user = {
    username : "heet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "jeni"
// user.welcomeMessage()
//  console.log(this);

// function chai(){
//     let username = "heet"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "heet"
//     console.log(this.username);
    
// }
// const chai = () =>{
//     let username = "heet"
//     console.log(this);
    
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  num1+num2
const addTwo = (num1,num2) => ({username:"heet"})

console.log(addTwo(3,4));

// const myArray = [2,4,5,7,8]

// myArray.forEach(function ())