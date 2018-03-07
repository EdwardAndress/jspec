(function(exports) {

  function Expectation(actual) {
    this.actual = actual
  }

  Expectation.prototype.toEqual = function(expected) {
    outcome = (this.actual == expected)
    styleExample(outcome)
  }

  function expect(actual) {
    return new Expectation(actual)
  }

  exports.expect = expect
})(this)
