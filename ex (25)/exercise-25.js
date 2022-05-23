const person = {
  // firstName : "",
  // lastName : "", 
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

// console.log(john.fullName()); // John Doe
// console.log(simon.fullName()); // Simon Collins

const Ludovico = Object.create (person);

Ludovico.firstName = "Ludovico";
Ludovico.lastName = "Colucci";



console.log(person.fullName());

// const john = Object.create(person);
// john.firstName = 'Jonh';
// john.lastName = 'Doe';


// pppppppppppppp


// const person = {
//   get fName() {
//     return `${this.firstName}`;
//   },

//   set fName(fname) {
//     this.firstName = fname;
//   },
  
//   get lName() {
//     return `${this.lastName}`;
//   },
  
//   set lName(lname) {
//     this.lastName = lname;
//   },

//   fullName: function  () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const john = Object.create(person);
// john.firstName = 'Jonh';
// john.lastName = 'Doe';

// const simon = Object.create(person);
// simon.firstName = "Simon"
// simon.lastName = "Collins"


