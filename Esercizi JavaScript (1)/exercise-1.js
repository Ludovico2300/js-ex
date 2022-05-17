function canPlay() {
  
  let personName = 'Paul';
  // tolto if poichè let e const sono block scoped, quindi non 
  // accessibili all'esterno del proprio blocco, in questo caso if
  

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();