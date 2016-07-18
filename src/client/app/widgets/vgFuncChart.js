(function() {
    'use strict';
    
    angular
        .module('app.widgets')
        .directive('vgFuncChart', vgFuncChart);

    function vgFuncChart() {
        var directive = {
            restrict: 'E',
            // FIXME: TODO: should be parameterizable
            template: '<div id="abcd"></div>',
            scope: {
                title: '@',
                // TODO: avoid categories, use ticks
                categories: '=',
                funcValues: '='
//                domain: '=',
//                values: '='
            },
            link: function(scope, element, attrs) {
                //var subDiv = element[0].childNodes[0];
                var chartId = 'abcd';
                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: /*scope.*/chartId
                    },
                    title: {
                        text: scope.title
                    },
                    xAxis: {
                        categories: scope.categories
                    },
                    series: scope.funcValues
                });
                scope.$watch('funcValues', function(newValue) {
                    //chart.series.push(newValue[0]);
                    //chart.series.push(newValue[1]);
                    //chart.redraw();
                    console.log('vgFuncChart updated');
                }, true);
            }
        };
        return directive;
    }
    
})();
