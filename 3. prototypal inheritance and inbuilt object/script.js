
const Person = function (firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

  // if(firstName == 'Gorakh'){
  //   console.log('hi');
  // }
  // console.log('This is regular funciton call');
  // this.calcage = function () {
  //   console.log('Age calculated');
  // }
  // prototype

}


const achiever = new Person('Achiever', 'Groups');
// const achieverNew = new Person('Santosh', 'Nepal');

// console.log(Person.prototype)
// console.log(achiever)

Person.prototype.calcage = function () {
  console.log(2021 - 1991);
}

// console.log(typeof Person.prototype);
// achiever.calcage();

console.log(achiever.hasOwnProperty('calcage'));

// console.log(achiever.__proto__.__proto__.__proto__)

const arr = [3, 4, 4, 3, 6, 6];
// const arr = new Array(3, 4);
// console.log(arr);

Array.prototype.unique = function() {
  return [...new Set(this)]
}

console.log(arr.unique());

