var expect = chai.expect;

describe("FizzBuzzController", function() {
  describe("constructor", function() {
    it("should set fizzBuzzModel as a new FizzBuzzModel", function() {
      var controller = new FizzBuzzController();
      expect(controller.fizzBuzzModel).to.eql(new FizzBuzzModel());
    });
  });

  describe("#newFizzBuzz", function() {
    it("should create new fizzbuzz model with provided lastNumber", function() {
      var controller = new FizzBuzzController();
      controller.newFizzBuzz(5);
      expect(controller.fizzBuzzModel).to.eql(new FizzBuzzModel(5));
    });
  });

  describe("#getFizzBuzzList", function() {
    it("should get fizzbuzz list from fizzbuzz model", function() {
      var controller = new FizzBuzzController();
      controller.newFizzBuzz(5);
      expect(controller.getFizzBuzzList()).to.eql([1,2 ,'fizz',4,'buzz']);
    });
  });
});