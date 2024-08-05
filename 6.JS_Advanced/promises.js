// 1

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    }, 5000);
});

promise1.then(function () {
    console.log("promise complete");
});

// 2

new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "sona", password: "123" });
    }, 4000);
}).then(function (user) {
    console.log(user);
});

// 3

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "sonamona", email: "sonamona@emgmail.com" });
        } else {
            reject("ERROR");
        }
    }, 3000);
});
promise3
    .then((user) => {
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The Promise is Either Resolve or Reject");
    });

// 4

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "moumi", email: "moumi@gmail.com" });
        } else {
            reject("ERROR");
        }
    }, 2000);
});

async function consumePromiseFour() {
    try {
        const response = await promise4;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour();

// 5

let promise5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        setTimeout(() => {
            console.log("Number is less than 0.5");
            resolve();
        }, 1000);
    } else {
        setTimeout(() => {
            reject("Sorry");
        });
    }
});

promise5
    .then(() => {
        //console.log();
    })
    .catch((err) => {
        console.log(err);
    });


// 6


Promise.allSettled([promise5, promise1])
    .then(() => {
    })
    .catch((err) => {
        console.log(err);
    });
