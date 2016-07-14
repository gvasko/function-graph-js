(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['$scope'];
    
    function Shell($scope) {
        
        $scope.removeFruit = function(id) {
            console.log('Remove fruit: ' + id);
        }
        
        $scope.removeAllFruits = function() {
            console.log('Remove all fruits');
        }
        
        $scope.buyNewFruit = function() {
            console.log('Buy new fruit');
        }
        
    }
    
})();