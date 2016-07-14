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
            templateUrl: 'app/widgets/vgNumArgsInputWidget.html'
        };
        
        return directive;
    }
    
})();