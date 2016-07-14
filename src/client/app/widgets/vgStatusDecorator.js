(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgStatusDecorator', vgStatusDecorator);
        
    function vgStatusDecorator() {
        var decorator = {
            restrict: 'A',
            scope: {
                status: '='
            },
            templateUrl: 'app/widgets/vgStatusDecorator.html'
        };
        
        return decorator;
    }
    
})();