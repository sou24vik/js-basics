class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("user1")
// console.log(user1.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher1 = new Teacher("iphone", "i@phone.com")
console.log(teacher1.createId());