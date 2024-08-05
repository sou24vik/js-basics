/*

1. It takes two number as input from user.
2. It perform wrong operatins as follows :

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong opration 10% of the times.

*/

let random = Math.random();
console.log(random);
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    c = obj[c]
    alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
}