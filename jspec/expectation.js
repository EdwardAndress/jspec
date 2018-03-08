(function(exports) {

  function Expectation(actual) {
    this.actual = actual
  }

  Expectation.prototype.toEqual = function(expected) {
    outcome = (this.actual === expected)
    styleExample(outcome)
  }

  Expectation.prototype.toBeTrue = function() {
    outcome = this.actual === true
    styleExample(outcome)
  }

  Expectation.prototype.toBeFalse = function() {
    outcome = this.actual === false
    styleExample(outcome)
  }

  Expectation.prototype.toContain = function(item) {
    outcome = this.actual.includes(item)
    styleExample(outcome)
  }

  function expect(actual) {
    return new Expectation(actual)
  }

  exports.expect = expect
})(this)
