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
            addFruit(
                $scope.nextFruitId, 
                $scope.prototypes[protoIndex] + $scope.nextFruitId, 
                { a: 1, b: 3 }
            );
            $scope.nextFruitId++;
        };
        
        function addFruit(id, name, attrs) {
            $scope.fruitList.push({id: id, text: name, attrs: attrs, status: true } );
        }
        
    }
    
})();