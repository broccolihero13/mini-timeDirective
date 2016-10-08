// INITILIZE DIRECTIVE
// ============================================================
angular.module("timeApp").directive('showTime', function() {
    return {
        restrict: 'EA',
        templateUrl: './js/directives/timeDirectiveTmpl.html',
        link: function(scope, elements, attributes) {
            var currentTime = new Date();
            scope.time = currentTime.toString();
        }
    };
});
