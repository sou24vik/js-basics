// ............. Function ...............


function sayMyName() {
    console.log("v");
    console.log("i");
    console.log("k");
    }
    sayMyName()
    
    
    function logInUser(username = "user"){
        if(!username){
            console.log("please enter");
        }
        return `${username} just logged in`
    }
    
    console.log(logInUser("soumu"))
    
    
    function calculateCartPrice(val1, val2, ...num1){
        return num1
    }
    
    console.log(calculateCartPrice(200, 400, 500, 2000))
    
    
    function handleObject(anyobj) {
        console.log(`${anyobj.name} and ${anyobj.age}`);
    }
    
    const objn = handleObject ({
        name : "souvik",
        age : 22
    
    })



  //  .......... Scopes ..........

  function one() {
    const name = "Monalisha"

    function two() {
        const age = "20"
        console.log(name);

    }

    two()

}
one()


if (true) {
    const username = "mona"
    if (username === "mona") {
        const website = " google"
        console.log(username + website);
    }
    console.log(username);
}

// console.log(username);

console.log(addone(5))

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(2));


// .......... Arrow ..........

const user = {
    username: "mona",
    password: "999@mona",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);


// const subscriber = function() {
//     let username = "mona"
//     console.log(this.username);
// }



const subscriber = () => {
    let username = "mona"
    console.log(this);
}

subscriber()

// const addTwoNo = (num1, num2) => {
//          return num1 + num2
//      }
    
     //const addTwoNo = (num1, num2) =>  num1 + num2
    
     //const addTwoNo = (num1, num2) => ( num1 + num2 )

     const addTwoNo = (num1, num2) => ({username: "mona"})


    console.log(addTwoNo(5,6))

    // .......... IIFE ............

    // Immediately Invoked Function Expressions (IIFE)


(function customer() {
    console.log(`DB CONNECTED`);
 })();

 ((customer) => {
    console.log(`DB CONNECTED TWO ${customer}`);
 })("souvik")