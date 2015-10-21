(function(exports) {
  "use strict";

  console.log('this is a pull request !!!');

  function FizzBuzzController() {
    this.fizzBuzzModel = new FizzBuzzModel();
  }
  exports.FizzBuzzController = FizzBuzzController;

  FizzBuzzController.prototype.newFizzBuzz = function(lastNumber) {
    this.fizzBuzzModel = new FizzBuzzModel(5);
  }

  FizzBuzzController.prototype.getFizzBuzzList = function() {
    return this.fizzBuzzModel.listAllNumberWithFizzBuzz();
  }
})(this);
