var expect = chai.expect;

describe("FizzBuzzView", function() {
  describe("constructor", function() {
    it("should set default fizzBuzzListView to empty string", function() {
      var view = new FizzBuzzView();
      expect(view.fizzBuzzListView).to.equal('');
    });

    it("should set default fizzBuzzLastNumber to 0", function() {
      var view = new FizzBuzzView();
      expect(view.fizzBuzzLastNumber).to.equal(0);
    });
  });

  describe("#updateView", function() {
    it("should update fizzBuzzListView to respect the array provided", function() {
      var view = new FizzBuzzView();
      view.updateView([1,2,'fizz',4,'buzz']);
      expect(view.fizzBuzzListView).to.equal('1 2 fizz 4 buzz');
    });
  });

  describe("#setLastNumber", function() {
    it("should set LastNumber to what it is provided", function() {
      var view = new FizzBuzzView();
      view.setLastNumber(5);
      expect(view.fizzBuzzLastNumber).to.equal(5);
    });
  });
});