(function(exports) {
  function it(string, callback) {
    addToSpecList(string, 'example')
    callback()
  }
  exports.it = it
})(this)
