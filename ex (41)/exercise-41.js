class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      console.warn("Valore negativo non valido!");
    } else {
      this.#amount += amount;
    }
    // throw an exception if amount is negative
    
  }

  withdraw(amount) {
    if (amount>this.#amount) {
      console.warn("Saldo non disponibile!");
    } else {
      this.#amount -= amount;
    }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();