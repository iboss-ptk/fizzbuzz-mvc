(function(exports) {
  "use strict";

  function FizzBuzzView() {
    this.fizzBuzzListView = '';
    this.fizzBuzzController = new FizzBuzzController();
  }
  exports.FizzBuzzView = FizzBuzzView;

  FizzBuzzView.prototype.updateView = function(fizzBuzzList) {
    this.fizzBuzzListView = '';

    fizzBuzzList.forEach(function(element) {
      this.fizzBuzzListView = this.fizzBuzzListView + ' ' + element;
    }.bind(this));

    this.fizzBuzzListView = this.fizzBuzzListView.trim();
  }

  FizzBuzzView.prototype.newFizzBuzzList = function(number) {
    this.fizzBuzzController.newFizzBuzz(number);
    return this.fizzBuzzController.getFizzBuzzList();
  }

})(this);