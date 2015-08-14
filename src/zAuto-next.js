(function (angular) {
	'use strict';
	angular.module('zAutoNext', [])
		.directive('autoNext', function () {
			function link(scope, element, attrs, ngModel) {
				var maxLength = parseInt(attrs.maxlength);

				scope.$watch(attrs.ngModel, function (newValue) {
					if (newValue && newValue.length > maxLength - 1 && ngModel.$valid) {
						var inputs = angular.element('input');
						inputs.eq(inputs.index(element) + 1).focus();
					}
				});
			}

			return {
				restrict: 'A',
				require: 'ngModel',
				link: link
			};
		});
})(angular);