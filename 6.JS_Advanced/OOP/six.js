class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCource() {
        console.log(`cource added by ${this.username}`);
    }
}

const user1 = new Teacher('guru', 'guru@gmail.com', 'abc')
user1.logMe();
user1.addCource();

const user2 = new User("user2")
user2.logMe();