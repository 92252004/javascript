// singleton

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name : "Heet",
    "full name": "Heet Maradiya",
    [mySym] : "mykey1",
    age : 18,
    location : "Surat",
    email : "heet@google.com",
    isLoggedIn : false,
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym); String
//console.log(JsUser[mySym]);

JsUser.email = "heet@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "heet@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

