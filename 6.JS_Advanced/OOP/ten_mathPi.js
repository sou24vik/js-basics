const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

// let ex = Math.PI = 5;
// console.log(ex);

const User = {
    name: 'atanu',
    email: 'atanu@gmail.com',
    count: 10,
    isAvailable: true,

    courceBuy: function() {
        console.log(`${this.name} buy the cource`);
    }
}

//console.log(User.courceBuy());
console.log(Object.getOwnPropertyDescriptor(User, 'name'));

Object.defineProperty(User, 'name',{
    //writable: false,
    //configurable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(User, 'name'));



for (const [key, value] of Object.entries(User)) {

    if (typeof value !== 'function') {

        console.log(`${key} :- ${value}`);
    }
    
}