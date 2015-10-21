(function(exports) {
  "use strict";

  function FizzBuzzModel(lastNumber) {
    this.lastNumber = lastNumber || 1;
  }
  exports.FizzBuzzModel = FizzBuzzModel;

  FizzBuzzModel.prototype.listAllNumber = function() {
    var numList = [];
    for(var i = 1; i <= this.lastNumber; i++) {
      numList.push(i);
    }
    return numList;
  }

  FizzBuzzModel.prototype.listAllNumberWithFizzBuzz = function() {
    var numList = this.listAllNumber();
    var newNumList = [];

    numList.forEach(function(num) {
      if(num % 3 == 0 && num % 5 == 0) return newNumList.push('fizzbuzz');
      newNumList.push(num);
    });

    return newNumList;
  }

})(this);