(function(angular) {
    'use strict';

    angular
        .module('app.widgets')
        .directive('vgListWidget', vgListWidget)
        .directive('vgListItem', vgListItem);
        
    function vgListWidget() {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {
                clickCreateItem: '&',
                clickRemoveAllItems: '&'
            },
            templateUrl: 'app/widgets/vgListWidget.html'
        };

        return directive;
    }

    function vgListItem() {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {
                itemId: '@',
                clickRemoveItem: "&"
            },
            templateUrl: 'app/widgets/vgListItem.html'
        };

        return directive;
    }


})(window.angular);
