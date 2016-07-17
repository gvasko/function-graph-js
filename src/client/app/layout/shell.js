(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['$scope', 'MathFunc', 'ViewDocument'];
    
    function Shell($scope, MathFunc, ViewDocument) {
        $scope.document = ViewDocument.createDocument();
        $scope.tmpDomain = [-2, -1, 0, 1, 2];
        
        $scope.funcImpls = [
            MathFunc.createFuncImpl('Linear', ['a', 'b'], function(params, x) { return params['a'] * x + params['b']; }),
            MathFunc.createFuncImpl('Quadratic', ['a', 'b', 'c'], function(params, x) { return params['a'] * x * x + params['b'] * x + params['c']; }),
            MathFunc.createFuncImpl('Cubic', ['a', 'b', 'c', 'd'], function(params, x) { return params['a'] * x * x * x + params['b'] * x * x + params['c'] * x + params['d']; })
        ];
        
        $scope.chartOptions = {
            title: {
                text: 'Temperature data'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        };

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
            var id = $scope.document.mathFuncList.add(funcObj);
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
        
    }
    
})();