// ................ Array ....................

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

