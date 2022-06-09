function calculate() {
  let afterNum = 0;
  
  function add (numAdd) {
    afterNum= $this.afterNum + numAdd;
  }
  function multiply(numMul) {
    afterNum= $this.afterNum * numMul;
  }
  function sub(numSub) {
    afterNum= $this.afterNum - numSub;
  }
  function divide(numDiv) {
    afterNum= $this.afterNum / numDiv;
  }
  function printResult() {
    console.log($this.afterNum);
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7