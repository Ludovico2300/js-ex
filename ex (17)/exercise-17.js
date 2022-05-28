function calculate() {
  let afterNum = 0;
  function add (numAdd) {
    return $this.afterNum + numAdd;
  }
  function multiply(numMul) {
    return $this.afterNum + numMul;
  }
  function add(numSub) {
    return $this.afterNum + numSub;
  }
  function add(numDiv) {
    return $this.afterNum + numDiv;
  }
  function printResult() {
    console.log($this.afterNum);
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7