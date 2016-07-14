(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('vgListItem', vgListItem);
        
    function vgListItem() {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {
                itemId: '@',
                status: '=',
                clickRemoveItem: "&",
                removeItemText: "@"
            },
            controller: ['$scope', function($scope) {
                if (angular.isUndefined($scope.removeItemText)) {
                    $scope.removeItemText = 'Remove Item';
                }
            }],
            templateUrl: 'app/widgets/vgListItem.html'
        };

        return directive;
    }


})();
