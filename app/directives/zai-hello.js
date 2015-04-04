export default ngModule => {


	// if (ON_TEST) {
	require('./zai-hello.test')(ngModule);
	// }

	ngModule.directive('zaiHello', () => {
		require('./zai-hello.styl');

		return {
			restrict: 'E',
			scope: {},
			template: require('./zai-hello.html'),
			controllerAs: 'vm',
			controller: function() {
				const vm = this;

				vm.greetings = 'Hello webpack from Zainka-Kotenka!';
			}
		}
	});
}