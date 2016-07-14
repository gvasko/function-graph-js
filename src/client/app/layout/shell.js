(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['$scope'];
    
    function Shell($scope) {
        $scope.nextFuncId = 0;
        
        $scope.functionList = [];
        
        $scope.prototypes = [
            {
                functionType: 'a*x+b',
                args: ['a', 'b']
            },
            {
                functionType: 'a*x^2+b*x+c',
                args: ['a', 'b', 'c']
            }
        ];
        
        $scope.removeFunction = function(id) {
            var index = findFirstIndex($scope.functionList, function(item) {
                return item.id == id;
            });
            $scope.functionList.splice(index, 1);
        };
        
        function findFirstIndex(array, func) {
            for (var i = 0; i < array.length; i++) {
                if (func(array[i])) {
                    return i;
                }
            }
            return -1;
        }

        $scope.removeAllFunctions = function() {
            $scope.functionList = [];
        };
        
        $scope.createNewFunction = function() {
            var protoIndex = Math.floor(Math.random() * $scope.prototypes.length);
            addFunction(
                $scope.nextFuncId, 
                $scope.prototypes[protoIndex]
            );
            $scope.nextFuncId++;
        };
        
        function addFunction(id, proto) {
            var attrs = {};
            for (var i = 0; i < proto.args.length; i++) {
                var val = (i == 0) ? 1 : 0;
                attrs[proto.args[i]] = val;
            }
            $scope.functionList.push({id: id, text: proto.functionType, attrs: attrs, status: true } );
        }
        
    }
    
})();