// array

const arr = [1, 2, 3, 4, 5];
const myHeros = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America'];

const arr2 = new Array(1,2,3,4)
//console.log(arr[0]);

// array methods

//arr.push(6)
//arr.pop()

//arr.unshift(8)
//arr.shift()

//console.log(arr.includes(6));
//console.log(arr.indexOf(3));

const newArr = arr.join()
//console.log(arr);
//console.log(newArr);

// slice and splice

console.log("A" ,arr);
const myn1 = arr.slice(1,3)
console.log(myn1);
console.log("B" ,arr);
const myn2 = arr.splice(1,3)
console.log("C" ,arr);
console.log(myn2);


