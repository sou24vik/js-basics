// 1

const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promise1.then(function() {
    console.log("promise complete");
})

// 2

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "sona", password: "123"})
    }, 1000)
}).then(function(user) {
    console.log(user);
})

// 3

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username: "sonamona", email: "sonamona@emgmail.com"})
        } else {
            reject("ERROR")
        }
    }, 1000)
})
promise3
.then( (user) => {
    return (user.username);
})
.then ( (username) => {
    console.log(username);
})
.catch ( (error) => {
    console.log(error);
})
.finally(() => {console.log("The Promise is Either Resolve or Reject");})

// 4

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "moumi", email: "moumi@gmail.com"})
        } else {
            reject("ERROR")
        }
    }, 1000)

})

async function consumePromiseFour() {
    try {
        const response = await promise4
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour()