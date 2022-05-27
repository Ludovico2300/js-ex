const person = {
  get FName (){
    return this.firstName;
  },
  

  set FName (firstName){
    this.firstName = firstName;
  },
  
  get LName (){
    return this.lastName;
  },

  set LName (lastName){
    this.lastName = lastName;
  },
  
  fullName: function(){
    return `${this.firstName} ${this.lastName}`;
  },
  
}

const john = Object.create(person);
john.firstName = 'Jonh';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = "Simon"
simon.lastName = "Collins"

console.log(john.fullName());
console.log(simon.fullName());