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
                clickRemoveAllItems: '&'
            },
            templateUrl: 'app/widgets/vgListWidget.html'
        };

        return directive;
    }


})();
