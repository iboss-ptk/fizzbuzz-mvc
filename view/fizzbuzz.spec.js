var expect = chai.expect;

describe("FizzBuzzView", function() {
  describe("constructor", function() {
    it("should set default fizzBuzzListView to empty string", function() {
      var view = new FizzBuzzView();
      expect(view.fizzBuzzListView).to.equal('');
    });

    it("should set fizzBuzzController as a new FizzBuzzController", function() {
      var view = new FizzBuzzView();
      expect(view.fizzBuzzController).to.eql(new FizzBuzzController());
    });
  });

  describe("#updateView", function() {
    it("should update fizzBuzzListView to respect the array provided", function() {
      var view = new FizzBuzzView();
      view.updateView([1,2,'fizz',4,'buzz']);
      expect(view.fizzBuzzListView).to.equal('1 2 fizz 4 buzz');
    });
  });

  describe("#newFizzBuzzList", function() {
    it("should create new FizzBuzz list", function() {
      var view = new FizzBuzzView();
      expect(view.newFizzBuzzList(5)).to.eql([1,2,'fizz',4,'buzz']);
    });
  });
});