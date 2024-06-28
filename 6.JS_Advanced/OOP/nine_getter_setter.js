class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }
}

const user1 = new User('user1@gmail.com','abc')
console.log(user1.email);


// ......... properties ...........

function User2(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return `098${this._password.toUpperCase()}123`
        },
        set: function(value) {
            this._password = value
        }
    })
}

const user2 = new User2('user2@gmail.com', 'def')
console.log(user2.email);
console.log(user2.password);


// ........... object ..........

const myObj = {
    _email: '12@gmail.com',
    _password: '123abc',

    get password() {
        return this._password.length;
    },
    set password(value) {
        this._password = value
    }
}

const myObj1 = Object.create(myObj)
console.log(myObj1.password);