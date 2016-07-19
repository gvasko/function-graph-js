(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['$scope', 'MathFunc', 'ViewDocument'];
    
    function Shell($scope, MathFunc, ViewDocument) {
        $scope.vm = ViewDocument.createDocument();
        $scope.tmpDomain = [-2, -1, 0, 1, 2];
        $scope.funcValues = [
                        { name: 'Linear1', data: [-2, -1, 0, 1, 2] },
                        { name: 'Quadratic2', data: [4, 1, 0, 1, 4] }
                    ];
        $scope.calculatedValues = [];
        
        $scope.funcImpls = [
            MathFunc.createFuncImpl('Linear', ['a', 'b'], function(params, x) { return params['a'] * x + params['b']; }),
            MathFunc.createFuncImpl('Quadratic', ['a', 'b', 'c'], function(params, x) { return params['a'] * x * x + params['b'] * x + params['c']; }),
            MathFunc.createFuncImpl('Cubic', ['a', 'b', 'c', 'd'], function(params, x) { return params['a'] * x * x * x + params['b'] * x * x + params['c'] * x + params['d']; })
        ];
        
        $scope.removeMathFunc = function(id) {
            $scope.vm.mathFuncList.remove(id);
        };
        
        $scope.removeAllMathFunc = function() {
            $scope.vm.mathFuncList.removeAll();
        };
        
        $scope.createNewMathFunc = function() {
            var implIndex = Math.floor(Math.random() * $scope.funcImpls.length);
            var funcImpl = $scope.funcImpls[implIndex];
            var funcObj = MathFunc.createFuncObj(funcImpl, getDefaultParams(funcImpl.args));
            var id = $scope.vm.mathFuncList.add(funcObj);
            funcObj.signature.name += id;
        };
        
        function getDefaultParams(args) {
            var params = {};
            for (var i = 0; i < args.length; i++) {
                var val = (i == 0) ? 1 : 0;
                params[args[i]] = val;
            }
            return params;
        }
        
        $scope.$watch('vm', function(newValue) {
            console.log('Document changed');
            var tmpValues = $scope.vm.calculateValues($scope.tmpDomain);
            $scope.calculatedValues.length = 0;
            tmpValues.forEach(function(values) {
                $scope.calculatedValues.push(values);
            });
            console.log($scope.calculatedValues.length);
        }, true);

        $scope.$watch('calculatedValues', function(newValue) {
            console.log('Calculation changed');
            //$scope.$applyAsync();
        }, true);
    }
    
})();