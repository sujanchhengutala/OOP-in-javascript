'use strict'
const Person =  function( firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  
    // if(firstName == 'Gorakh'){
  //   console.log('hi');
  // }
  // console.log('This is regular funciton call');
  // this.calcage = function () {
  //   console.log('Age calculated');
  // }
}
const name = new Person('sujan', 'chhengutala');
const newName = new Person('pradip', 'nepal');
console.log(newName);
console.log(name);
