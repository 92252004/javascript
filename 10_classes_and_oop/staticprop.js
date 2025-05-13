class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const heet = new User("Heet")
// console.log(heet.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("iphone","i@phone.com")
console.log(Iphone.createId());

