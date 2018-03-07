jspec(function() {
	describe("#toEqual", function() {
		it("shows a green example when passing", function() {
			  expect(1).toEqual(1)
		})
		it("shows a red example when failing", function() {
				expect(1).toEqual(2)
		})
	})
})
