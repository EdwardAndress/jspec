(function(exports) {
  function describe(string, callback) {
    addToSpecList(string, 'describe')
    callback()
  }
  exports.describe = describe
})(this)
