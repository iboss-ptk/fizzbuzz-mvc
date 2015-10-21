(function(exports) {
  "use strict";

  function FizzBuzzView() {
    this.fizzBuzzListView = '';
    this.fizzBuzzLastNumber = 0;
  }
  exports.FizzBuzzView = FizzBuzzView;

  FizzBuzzView.prototype.updateView = function(fizzBuzzList) {
    this.fizzBuzzListView = '';

    fizzBuzzList.forEach(function(element) {
      this.fizzBuzzListView = this.fizzBuzzListView + ' ' + element;
    }.bind(this));

    this.fizzBuzzListView = this.fizzBuzzListView.trim();
  }

  FizzBuzzView.prototype.setLastNumber = function(number) {
    this.fizzBuzzLastNumber = number;
  }

})(this);