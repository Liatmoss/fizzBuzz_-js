var Fizzbuzz = function(){};

Fizzbuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function (number) {
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function (number) {
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype.isDivisibleByThreeAndFive = function (number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if(this.isDivisibleByThreeAndFive(number)) {
    return "fizzbuzz";
  }
  if(this.isDivisibleByThree(number)) {
    return "fizz";
  }
  if(this.isDivisibleByFive(number)) {
    return "buzz";
  }
  return number
};
