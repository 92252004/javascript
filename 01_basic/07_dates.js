// Dates

let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 1,23)
//let myCreatedDate = new Date(2025,1,23,5,3)
let myCreatedDate = new Date("01-14-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(myCreatedDate.getTime() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : 'long',
})