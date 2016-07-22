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
                    series: []
                });
                scope.$watch('funcValues', function(newValue) {
                    deleteMissingSeries(chart, newValue);
                    addNewSeries(chart, newValue);
                    updateExistingSeries(chart, newValue);
                    console.log('vgFuncChart updated');
                }, true);
            }
        };
        return directive;
    }
    
    function deleteMissingSeries(chart, newSeriesList) {
        chart.series.forEach(function(currentOrig) {
            var newSeries = newSeriesList.find(function(currentNew) { return currentOrig.name === currentNew.name });
            if (newSeries === undefined) {
                currentOrig.remove();
            }
        });
    }
    
    function addNewSeries(chart, newSeriesList) {
        newSeriesList.forEach(function(currentNew) {
            var existingSeries = chart.series.find(function(currentOrig) { return currentOrig.name === currentNew.name });
            if (existingSeries === undefined) {
                chart.addSeries(currentNew);
            }
        });
    }
    
    function updateExistingSeries(chart, newSeriesList) {
        chart.series.forEach(function(currentOrig) {
            var newSeries = newSeriesList.find(function(currentNew) { return currentOrig.name === currentNew.name });
            if (newSeries === undefined) {
                throw 'Series not found';
            }
            currentOrig.setData(newSeries.data);
        });
    }
    
})();
