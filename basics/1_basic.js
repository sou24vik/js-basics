"use strict";

// console.log("Souvik");

// .................... Variables .......................

const name = "superstar"
let email = "super.star@google.com"
var password = "12345"  // Prefer not to use var because of issue in block scope and functional scope
let City = "kolkata"
let State;  //undefined

// name="vik"; //not allowed

email="vik@gmail.com"
password="1234567"
City="Burdwan";

console.table([name,email,password,City]);

// ............................ Data Types ............................

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// ................. Conversion Operation .................

let user = "mann"

console.log(typeof user);
// console.log(typeof(user));
let ValueinNumber = Number(user);
console.log(typeof ValueinNumber);

console.log(2+2+'2'); //42
console.log('2'+2+2); //222

console.log(+true); //1
console.log(+""); //0

let score = 100;
++score;
console.log(score);

// ........................ Comparision ......................

console.log("02"> 1); //true

console.log(null>=0);
console.log(undefined === 0)