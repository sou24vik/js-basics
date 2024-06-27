function multiplyByFive(num) {

    return num*5;
}

//multiplyByFive.power = 2;

//console.log(multiplyByFive(5));
console.log(multiplyByFive.prototype);
//console.log(multiplyByFive.power);


function createUser(username, password, loggedInTime) {
    this.username = username,
    this.password = password,
    this.loggedInTime = loggedInTime
}

createUser.prototype.seePassword = function() {
    console.log(`Password ${this.password}`);
}

createUser.prototype.greeting = function() {
    console.log(`Welcome ${this.username}`);
}

createUser.prototype.increment = function() {
    this.loggedInTime++
}

createUser.prototype.TrueLength = function() {
    console.log(this.username.trim().length)
}

const userOne = new createUser('dona','1234', 12)
const userTwo = new createUser('lona','0987', 25)
const userThree = new createUser('kona', '5610', 37)

userTwo.seePassword()
userOne.greeting()
userThree.TrueLength()