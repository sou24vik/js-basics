let myArray = ['java', 'c++', 'python', 'ruby']

let myObj = {

    name: 'Uttam Kumar',
    job: 'Actor',
    knownAs: 'Mahanayak',
}

Array.prototype.superstar = function() {
    console.log(`Hi`);
}


Object.prototype.vik = function() {
    console.log(`vik can be the next mahanayak`);
}

myObj.vik();
myArray.vik();
myArray.superstar();


//......... Inheritance ..........

const Student = {
    name: "Atanu",
    Age: "25"
}

const Teacher = {
    name: "Radhagovinda",
    Age: "48",
    __proto__: Student 
}

const Principal = {
    name: 'Monmohon',
    Age: '57'
}
Principal.__proto__ = Student

//modern syntax

Object.setPrototypeOf(Teacher, Principal)


let string1 = 'virat kohli     '

String.prototype.trueLength = function() {
    console.log(`True Length is ${this.trim().length}`);
}

string1.trueLength();
'ledapoka'.trueLength();
'bindu masi'.trueLength();