'use strict';
const person = {
  firstName: 'amir',
  lastName: 'homayoun mehr',
  Introduction: function () {
    console.log(`hello ${this.firstName}`);
  },
};
console.log(person.firstName);
person.Introduction();
