describe("zAuto Next : directive test", function () {
    beforeEach(angular.mock.module('zAutoNext'));
    beforeEach(inject(['$compile', '$rootScope', '$document', function ($compile, $rootScope, $document) {
        this.$compile = $compile;
        this.$rootScope = $rootScope;
        this.$scope = this.$rootScope.$new();
        this.$document = $document;
    }]));

    beforeEach(function () {
        this.triggerKeyPress = function (key) {
            /**
             * Create KeyboardEvent
             */

            var e = new window.KeyboardEvent('keypress', {
                bubbles: true,
                cancelable: true,
                shiftKey: true
            });
            /**
             * Assing 27 as keyCode
             */
            delete e.keyCode;
            Object.defineProperty(e, 'keyCode', {'value': key.charCodeAt(0)});
            this.$document[0].dispatchEvent(e);
        }
    });

    beforeEach(function () {
        this.form = '' +
        '<form name="form">' +
        '  <input type="text" ng-model="foo" maxlength="2" name="foo">' +
        '  <input type="text" ng-model="foo1" name="foo">' +
        '</form>';
    });

    it("should test it later :)", function () {
        expect(true).toBe(true); // Problem ?
    });
});