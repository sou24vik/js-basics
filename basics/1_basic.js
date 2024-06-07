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
// string => " "
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
   

// array
// function
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
console.log(undefined === 0);


// ............. String .............

let viewer = "Raj";
let age = 25;

console.log(`viewer ${viewer} and his age ${age} years old`);

const subscriber = new String('Aditi');

const url = "https://souvik24.com/vik%20star";

console.log(url.replace('%20','-'));

// ................... Math ......................

console.log((Math.random()*10));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);

console.log(Math.ceil(14.922242));

// ............... Dates ...................

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time `);


// console.log(newDate.toLocaleString(' default',{
//     weekday:"long",

// }))