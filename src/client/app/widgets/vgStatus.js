(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgStatus', vgStatus);
        
    function vgStatus() {
        var decorator = {
            restrict: 'E',
            scope: {
                status: '='
            },
            templateUrl: 'app/widgets/vgStatus.html'
        };
        
        return decorator;
    }
    
})();