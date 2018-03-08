jspec(function() {
	describe("#toEqual", function() {
		it("green when actual and expected values match", function() {
			expect(1).toEqual(1)
		})

		it("red when actual and expected values do not match", function() {
			expect(1).toEqual(2)
		})
	})

	describe("#toBeTrue", function() {
		it('green when the actual answer is true', function() {
			expect(true).toBeTrue()
		})

		it('red when the actual answer is false', function() {
			expect(false).toBeTrue()
		})
	})

	describe('#toBeFalse', function() {
		it('green when the actual value is false', function() {
			expect(false).toBeFalse()
		})

		it('red when the actual value is true', function() {
			expect(true).toBeFalse()
		})
	})

	describe('#toContain', function() {
		it('green when the item is present', function() {
			expect([1,2,3]).toContain(1)
		})

		it('red when the item is not present', function() {
			expect([1,2,3]).toContain(4)
		})
	})
})
