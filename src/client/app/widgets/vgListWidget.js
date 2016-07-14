(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('vgListWidget', vgListWidget);
        
    function vgListWidget() {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {
                clickCreateItem: '&',
                clickRemoveAllItems: '&',
                createItemText: '@',
                removeAllText: '@'
            },
            controller: ['$scope', function($scope) {
                if (angular.isUndefined($scope.createItemText)) {
                    $scope.createItemText = 'Create';
                }
                if (angular.isUndefined($scope.removeAllText)) {
                    $scope.removeAllText = 'Remove All';
                }
            }],
            templateUrl: 'app/widgets/vgListWidget.html'
        };

        return directive;
    }


})();
