//Write a “person” class to hold all the details.
 
class person {
  constructor() {
    this.hands = 2,
    this.foot = 2,
    this.eyes = 2,
    this.face = 1,
    this.fingers = 20,
    this.name = '',
    this.designation = '',
    this.age = ''
  }

  setName(name) {
    this.name = name;
  }

  setDesignation(desig) {
    this.designation = desig;
  }

  setAge(age) {
    this.age = age;
  }
}

const per = new person()
per.setAge('21');
per.setDesignation('student')
per.setName('Mayur')

console.log(per)