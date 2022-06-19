function calculate() {
  let afterNum = 0;
  return {
    add: function (numAdd) {
      afterNum= afterNum + numAdd;
      return this;
    },
    multiply: function(numMul) {
      afterNum= afterNum * numMul;
      return this;
    },
    sub: function (numSub) {
      afterNum= afterNum - numSub;
      return this;
    },
    divide: function (numDiv) {
      afterNum= afterNum / numDiv;
      return this;
    },
    printResult: function () {
      console.log(afterNum);
      return this;
    }
  };

}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult();
//  // Il risultato sarà: 7