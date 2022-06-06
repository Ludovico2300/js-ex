const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), 
// modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
// const person2 = Object.assign({}, person1);

const person2 = JSON.parse(JSON.stringify(person1));
//il metodo stingify prende l'oggetto passato come paramentro
// e lo riduce a stringa, mentre il metodo parse fa il procedimento
// inverso. Entrambi sono metodi json, utili in casi come questi dove
// copiamo oggetti con all'interno altri oggetti

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);