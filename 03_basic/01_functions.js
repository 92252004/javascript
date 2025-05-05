

function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("E");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,4)

//console.log("Result:", result);

function loginUserMessage(userName = "Heet"){
    if(userName === undefined){
        console.log("Please enter a valid username");
        return
    }
    return `${userName} just logged in`
}

//console.log(loginUserMessage("Hassan"));
//console.log(loginUserMessage("Jeni"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(100,200,300,400));

const user = {
    username:"heet",
    price: 100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)

const myNewArray = [1,2,3,4,5,6,7,8,9,10]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,4,3,4,5,6,7,8,9,10]));

