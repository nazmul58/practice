//constructor function for person object

function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.changeName = function (name) {
    this.lastName = name;

  }
}

//creat a person object 
const myFather = new person('John', 'Doe', 45, 'Blue');
const myMOther = new person('Sally', "Rally", 48, 'green');

myFather.nationality = 'English';

myFather.name = function () {
  return this.firstName + " " + this.lastName;
}

myFather.changeName('reita');