function calculate() {
  let afterNum = 0;

  let add = function (numAdd) {
    this.afterNum= this.afterNum + numAdd;
  }

  let multiply = function(numMul) {
    afterNum= $this.afterNum * numMul;
  }
  
  let sub = function (numSub) {
    afterNum= $this.afterNum - numSub;
  }

  let divide = function (numDiv) {
    afterNum= $this.afterNum / numDiv;
  }

  let printResult = function () {
    console.log($this.afterNum);
  }
}

const calculator = calculate();
console.log(calculator(2));
// .multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7