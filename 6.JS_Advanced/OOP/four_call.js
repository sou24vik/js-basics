function setUserName(username) {

    this.username = username
    //console.log('Welcome');
}

function createUser(username, email, password) {

    setUserName.call(this, username)

    this.email = email;
    this.password = password;
}

const user1 = new createUser('user1','user1@gmail.com', '123')
console.log(user1);