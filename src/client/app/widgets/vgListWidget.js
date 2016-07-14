(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgListWidget', vgListWidget);
        
    function vgListWidget() {
        var directive = {
            restrict: 'E',
            scope: {
                itemList: '=',
                clickCreateItem: '&',
                clickRemoveItem: "&",
                clickRemoveAllItems: '&',
                createItemText: '@',
                removeItemText: "@",
                removeAllText: '@'
            },
            templateUrl: 'app/widgets/vgListWidget.html'
        };
        
        return directive;
    }
    
})();