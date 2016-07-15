(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['$scope', 'MathFunc', 'Document'];
    
    function Shell($scope, MathFunc, Document) {
        // TODO: temporarily this belongs to the model, not to the viewmodel
        $scope.document = Document.createDocument();
        
        $scope.funcImpls = [
            MathFunc.createFuncImpl('Linear', ['a', 'b'], function(params, x) { return params['a'] * x + params['b']; }),
            MathFunc.createFuncImpl('Quadratic', ['a', 'b', 'c'], function(params, x) { return params['a'] * x * x + params['b'] * x + params['c']; }),
            MathFunc.createFuncImpl('Cubic', ['a', 'b', 'c', 'd'], function(params, x) { return params['a'] * x * x * x + params['b'] * x * x + params['c'] * x + params['d']; })
        ];
        
        $scope.removeMathFunc = function(id) {
            $scope.document.mathFuncList.remove(id);
        };
        
        $scope.removeAllMathFunc = function() {
            $scope.document.mathFuncList.removeAll();
        };
        
        $scope.createNewMathFunc = function() {
            var implIndex = Math.floor(Math.random() * $scope.funcImpls.length);
            var funcImpl = $scope.funcImpls[implIndex];
            var funcObj = MathFunc.createFuncObj(funcImpl, getDefaultParams(funcImpl.args));
            $scope.document.mathFuncList.add(funcObj);
        };
        
        function getDefaultParams(args) {
            var params = {};
            for (var i = 0; i < args.length; i++) {
                var val = (i == 0) ? 1 : 0;
                params[args[i]] = val;
            }
            return params;
        }
        
    }
    
})();