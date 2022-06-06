const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
} //usiamo il metodo push per aggiungere l'elemento in array
//anche se è una costante, possiamo aggiungere elementi in coda, 
//perchè non stiamo riassegnando i valori

addStudent('Marco');
console.log(students);