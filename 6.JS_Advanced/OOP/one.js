const user = {
    username: "virus",
    email: "virua@gmail.com",
    password: "abc",

    getUserDetails: function() {
        console.log(this);
    }
}

//console.log(user.getUserDetails());


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const User1 = new User("sona", "sona@gmail.com", "abc")
const User2 = new User ("mona", "mona@gmail.com", "def")

//console.log(User1);
console.log(User2.constructor);