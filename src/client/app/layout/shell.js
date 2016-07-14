(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['$scope'];
    
    function Shell($scope) {
        $scope.nextFruitId = 0;
        
        $scope.fruitList = [];
        
        $scope.prototypes = ['Apple', 'Banana', 'Appricot', 'Plum', 'Strawberry'];
        
        $scope.removeFruit = function(id) {
            console.log('Remove fruit: ' + id);
            //var  = $.grep($scope.fruitList, 
            var index = findFirstIndex($scope.fruitList, function(item) {
                return item.id == id;
            });
            $scope.fruitList.splice(index, 1);
        };
        
        function findFirstIndex(array, func) {
            for (var i = 0; i < array.length; i++) {
                if (func(array[i])) {
                    return i;
                }
            }
            return -1;
        }

        $scope.removeAllFruits = function() {
            console.log('Remove all fruits');
            $scope.fruitList = [];
        };
        
        $scope.buyNewFruit = function() {
            console.log('Buy new fruit');
            var protoIndex = Math.floor(Math.random() * $scope.prototypes.length);
            $scope.fruitList.push({id: $scope.nextFruitId, name: $scope.prototypes[protoIndex] + $scope.nextFruitId});
            $scope.nextFruitId++;
        };
        
    }
    
})();