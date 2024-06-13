// ................ Arrays ....................

const MyTeam = ["Virat","Rohit","Dhoni","Bumrah"]

const Keys = new Array(1,2,3,4)

// MyTeam.push(Keys); // nested array

const MTK = [...MyTeam, ...Keys]
console.log(MTK);

// console.log(MyTeam);
// console.log(MyTeam.splice(1,3));

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(3)
console.log(real_another_array);

// console.log(Array.isArray("souvik"))
console.log(Array.from("vik"))
console.log(Array.from({name: "souvik"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


// ............. Objects ...............


const sum1 = Symbol("key1")

const players = {
    batsman : "Rohit",
    bowler : "Siraj",
    Wicket_Keeper : "Sanju",
    All_Rounder : "JadeJa",
    Reserve : ["Dube","Chahal"],
    [sum1] :"myKey1" 
}
//Object.freeze(players)

console.log(players["bowler"]);
console.log(players[sum1]);
console.log(players.Reserve);

players.greeting = function() {
    console.log(`All the Best ${this.batsman}`);
}
console.log(players.greeting());

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}

console.log(obj3);


const position = {
    Rohit: "Opener",
    Siraj: "10th Talenders",
    AllRestOfThePlayers: "To Be Annouced"
}

const {AllRestOfThePlayers: ARP} = position
console.log(ARP);