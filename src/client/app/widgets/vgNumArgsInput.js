(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgNumArgsInputWidget', vgNumArgsInput);
        
    function vgNumArgsInput() {
        var directive = {
            restrict: 'E',
            scope: {
                keyValuePairs: "="
            },
            templateUrl: 'app/widgets/vgNumArgsInput.html'
        };
        
        return directive;
    }
    
})();