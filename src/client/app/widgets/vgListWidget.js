(function(angular) {
    'use strict';

    angular
        .module('app.widgets')
        .directive('vgListWidget', vgListWidget)
        .directive('vgListItem', vgListItem);
        
    function vgListWidget() {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: listWidgetController,
            templateUrl: 'app/widgets/vgListWidget.html'
        };

        return directive;
    }

    listWidgetController.$inject = ['$scope'];
    
    function listWidgetController($scope) {
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
        
        $scope.createItem = createItem;
        $scope.removeAllItems = removeAllItems;
        
        function createItem() {
            console.log('Create Item ...');
        }
        
        function removeAllItems() {
            console.log('Remove All Items ...');
        }
    }

    function vgListItem() {
        var directive = {
            require: '^^vgListWidget',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, widgetCtrl) {
                widgetCtrl.addListItem(scope);
            },
            controller: listItemController,
            templateUrl: 'app/widgets/vgListItem.html'
        };

        return directive;
    }

    listItemController.$inject = ['$scope'];
    
    function listItemController($scope) {
        $scope.removeItem = function() {
            console.log('Remove Item ...');
            //vgListWidget.removeListItem($scope);
        }
    }
    
})(window.angular);
