(function(angular) {
    'use strict';
    angular.module('zAutoNext', [])
        .directive('autoNext', function() {
            function link (scope, element, attrs, ngModel) {
                var maxLength = parseInt(attrs.ngMaxlength);
                element.on('keypress', function(e) {
                    if (element.val().length >= maxLength-1 && ngModel.$valid) {
                        var nextinput = element.next('input');
                        if (nextinput.length > 0) {
                            nextinput[0].focus();
                        }
                    }
                });
            }
            return {
                restrict:'A',
                require: 'ngModel',
                link:link
            }
    });
})(angular);