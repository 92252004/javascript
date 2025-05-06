// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

(function aurcode(name){
    console.log(`DB CONNECTED TWO ${name}`);
    
})('heet')