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
                clickRemoveItem: "&"
            },
            templateUrl: 'app/widgets/vgListItem.html'
        };

        return directive;
    }


})();
