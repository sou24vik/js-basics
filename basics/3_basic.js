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