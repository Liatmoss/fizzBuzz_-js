describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe ('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
    });

    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisibleByThreeAndFive(13)).toBe(false);
    });
  });

  describe('when playing says', function() {
    it('"fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("fizz");
    });

    it('"buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("buzz");
    });

    it('"fizzbuzz" when a number is divisible by 3 and 5', function() {
      expect(fizzbuzz.says(15)).toEqual("fizzbuzz");
    });

    it('returns number if not divisible by 3 or 5', function() {
      expect(fizzbuzz.says(4)).toEqual(4);
    });
  });

});
