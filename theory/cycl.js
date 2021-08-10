// let money = {
//     rent: -100,
//     salary: 500,
//     dividends: 100,
//     subscriptions: -11
// }

// let sum = 0;
// for (let prop in money) {
//     sum += money[prop]
//     console.log(sum);
// }

let iterable = [10, 20, 30]; 
for (let value of iterable) { 
value += 1;  
  console.log(value); 
} 

var obj = {a:1, b:2, c:3}; 
for (var prop in obj) { 
console.log("obj." + prop + " = " + obj[prop]); 
} 