function canPlay() {
  let personName = "Ludo";
  if (true) {
    personName = "Paul";
  }

  // per risolvere il quesito posso dichiarare personName all'esterno del blocco di if e 
  // assegnare il valore al suo interno per evitare shadowing oppure eliminare direttamente
  // il blocco if

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();