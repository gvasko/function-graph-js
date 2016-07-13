(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('vgListWidget', vgListWidget)
        .directive('vgListItem', vgListItem);
        
    function vgListWidget() {
        var directive = {
            restrict: 'E',
            transclude: true,
            controller: ['$scope', function($scope) {
                var items = $scope.items = [];
                
                $scope.removeListItem = function(item) {
                    var index = items.indexOf(item);
                    
                    if (index > -1) {
                        items.splice(index, 1);
                    }
                }
                
                this.addListItem = function(item) {
                    items.push(item);
                }
                
                this.createItem = function() {
                    
                }
                
                this.removeAllItems() {
                    
                }
            }],
            templateUrl: 'vgListWidget.html'
        };
        
        return directive;
    }
    
    function vgListItem() {
        var directive = {
            require: '^^vgListWidget'
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, widgetCtrl) {
                widgetCtrl.addListItem(scope);
            },
            controller: ['$scope', 'vgListWidget', function($scope, vgListWidget) {
                this.removeItem = function() {
                    vgListWidget.removeListItem($scope);
                }
            }
            templateUrl: 'vgListItem.html'
        };
        
        return directive;
    }
    
})()
