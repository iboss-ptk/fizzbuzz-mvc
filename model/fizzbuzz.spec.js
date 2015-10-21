var expect = chai.expect;

describe("FizzBuzzModel", function() {
  describe("constructor", function() {
    it("should have a default lastNumber which is 1", function() {
      var fizzbuzz = new FizzBuzzModel();
      expect(fizzbuzz.lastNumber).to.equal(1);
    });

    it("should set lastNumber as provided in constructor", function() {
      var fizzbuzz = new FizzBuzzModel(16);
      expect(fizzbuzz.lastNumber).to.equal(16);
    });
  });

  describe("#listAllNumber", function() {
    it("should return array of number 1 to lastNumber", function() {
      var fizzbuzz = new FizzBuzzModel(5);
      expect(fizzbuzz.listAllNumber()).to.eql([1,2,3,4,5]);
    });
  });

  describe("#listAllNumberWithFizzBuzz", function() {
    it("should return array of number 1 to lastNumber with dividable by 3 become 'fizz'", function() {
      var fizzbuzz = new FizzBuzzModel(10);
      var sixthElement = fizzbuzz.listAllNumberWithFizzBuzz()[6-1];
      expect(sixthElement).to.equal('fizz');
    });

    it("should return array of number 1 to lastNumber with dividable by 5 become 'buzz'", function() {
      var fizzbuzz = new FizzBuzzModel(10);
      var tenthElement = fizzbuzz.listAllNumberWithFizzBuzz()[10-1];
      expect(tenthElement).to.equal('buzz');
    });

    it("should return array of number 1 to lastNumber with dividable by 3 and 5 become 'fizzbuzz'", function() {
      var fizzbuzz = new FizzBuzzModel(15);
      var fifteenthElement = fizzbuzz.listAllNumberWithFizzBuzz()[15-1];
      expect(fifteenthElement).to.equal('fizzbuzz');
    });

    it("should return array of number 1 to lastNumber with non fizzbuzz is a number", function() {
      var fizzbuzz = new FizzBuzzModel(15);
      var thirteenthElement = fizzbuzz.listAllNumberWithFizzBuzz()[13-1];
      expect(thirteenthElement).to.equal(13);
    });
  });
});