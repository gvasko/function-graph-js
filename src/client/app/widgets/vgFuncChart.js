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
                
                scope.$watch('funcValues', function(updatedSeriesList) {
                    scope.deleteSeriesNotExistAnymoreIn(updatedSeriesList);
                    scope.addSeriesNewIn(updatedSeriesList);
                    scope.updateExistingSeriesFrom(updatedSeriesList);
                    console.log('vgFuncChart updated');
                }, true);

                scope.deleteSeriesNotExistAnymoreIn = function(newSeriesList) {
                    chart.series.forEach(function(chartSeries) {
                        var seriesPeer = findSeriesByNameIn(newSeriesList, chartSeries.name);
                        var peerExists = (seriesPeer !== undefined);
                        if (!peerExists) {
                            chartSeries.remove();
                        }
                    });
                };
                
                scope.addSeriesNewIn = function(newSeriesList) {
                    newSeriesList.forEach(function(newSeries) {
                        var chartSeries = findSeriesByNameIn(chart.series, newSeries.name);
                        var chartSeriesDoesNotExist = (chartSeries === undefined);
                        if (chartSeriesDoesNotExist) {
                            chart.addSeries(newSeries);
                        }
                    });
                };
                
                scope.updateExistingSeriesFrom = function(newSeriesList) {
                    chart.series.forEach(function(chartSeries) {
                        var seriesPeer = findSeriesByNameIn(newSeriesList, chartSeries.name);
                        var peerDoesNotExist = (seriesPeer === undefined);
                        if (peerDoesNotExist) {
                            throw 'Series not found';
                        }
                        chartSeries.setData(seriesPeer.data);
                    });
                };
                
            }
        };
        return directive;
    }

    function findSeriesByNameIn(array, name) {
        return array.find(function(item) { return name === item.name });
    }
    
})();
