const name = "heet"
const repoCount = 100

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("heet-chain-com")
 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("c"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "    heet    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.heet.com/heet%20mardiya"
console.log(url.replace("%20", "$"));
console.log(url.includes("heet"));

console.log(gameName.split("-"));
