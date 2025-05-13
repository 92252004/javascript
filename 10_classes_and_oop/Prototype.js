// let myName = "heet   "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let HeroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.heet = function(){
    console.log(`heet is present in all objects`);
    
}

Array.prototype.heyHeet = function(){
    console.log(`heet says hello`);
    
}

// HeroPower.heet()
// myHeros.heet()
// myHeros.heyHeet()
// HeroPower.heyHeet()

// inheritance

const user = {
    name:"heet",
    email:"heet@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= user

// modern syntax
Object.getPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiaurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"heet".trueLength()
"hitesh".trueLength()