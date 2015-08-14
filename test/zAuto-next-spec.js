describe("zAuto Next : directive test", function () {
	beforeEach(angular.mock.module('zAutoNext'));

	beforeEach(inject(['$compile', '$rootScope', function ($compile, $rootScope) {
		this.$compile = $compile;
		this.$rootScope = $rootScope;

		this.$scope = this.$rootScope.$new();
	}]));

	beforeEach(function () {
		this.form = '' +
			'<form name="form">' +
			'	<input id="input1" type="text" ng-model="foo" maxlength="2" name="foo" ng-pattern="/^\\d+$/" auto-next />' +
			'	<input id="input2" type="text" ng-model="foo2" name="foo2" />' +
			'</form>';
		this.form = this.$compile(this.form)(this.$scope);

		angular.element(document.body).append(this.form);
	});

	beforeEach(function () {
		spyOn($.fn, 'focus').and.callThrough();
	});

	it("should call the focus when the model is valid", function () {
		this.$scope.foo = '00'; // valid input
		this.$scope.$apply();

		expect(this.$scope.form.foo.$valid).toBe(true);
		expect($.fn.focus).toHaveBeenCalled();
	});

	it("should not call the focus when the model is invalid", function () {
		this.$scope.foo = 'aa'; // invalid input
		this.$scope.$apply();

		expect(this.$scope.form.foo.$valid).toBe(false);
		expect($.fn.focus).not.toHaveBeenCalled();
	});

	it("should not call the focus when the model length is lower than input length", function () {
		this.$scope.foo = '1'; // foo.length < input maxlength (2)
		this.$scope.$apply();

		expect(this.$scope.form.foo.$valid).toBe(true);
		expect($.fn.focus).not.toHaveBeenCalled();
	});
});