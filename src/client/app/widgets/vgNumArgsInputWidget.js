(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgNumArgsInputWidget', vgNumArgsInputWidget);
        
    function vgNumArgsInputWidget() {
        var directive = {
            restrict: 'E',
            scope: {
                keyValuePairs: "="
            },
            controller: ['$scope', function($scope) {
                console.log('keyValuePairs: ' + $scope.keyValuePairs);
            }],
            templateUrl: 'app/widgets/vgNumArgsInputWidget.html'
        };
        
        return directive;
    }
    
})();