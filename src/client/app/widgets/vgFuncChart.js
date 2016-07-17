$(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgFuncChart', vgFuncChart);
        
    function vgFuncChart() {
        console.log('ALMALMALMALMALMAMA111111');
        var directive = {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function(scope, element) {
                console.log('ALMALMALMALMALMAMA222222');
                Highcharts.chart(element[0], scope.options);
            }
        };
        console.log('ALMALMALMALMALMAMA333333');
        return directive;
    }
    
});
