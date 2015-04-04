export default ngModule => {
	describe('zai-hello', () => {

		beforeEach(window.module(ngModule.name));

		it('should test properly', () => {
			expect(true).to.be.true;
		});

		it('should fail', () => {
			expect(false).to.be.false;
		});
	});
}