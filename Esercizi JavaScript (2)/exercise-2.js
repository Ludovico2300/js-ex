function canPlay() {
  const personName = 'Paul';
  // cambiato da let a const, in modo che diventi una variabile non modificabile

  if (true) {
    personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();