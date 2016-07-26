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
        // TODO: further view-models
        $scope.chartValues = [];
        $scope.tableValues = [];
        
        $scope.funcImpls = [
            MathFunc.createFuncImpl('Linear', ['a', 'b'], function(args, x) { return args['a'] * x + args['b']; }),
            MathFunc.createFuncImpl('Quadratic', ['a', 'b', 'c'], function(args, x) { return args['a'] * x * x + args['b'] * x + args['c']; }),
            MathFunc.createFuncImpl('Cubic', ['a', 'b', 'c', 'd'], function(args, x) { return args['a'] * x * x * x + args['b'] * x * x + args['c'] * x + args['d']; })
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
            var funcObj = MathFunc.createFuncObj(funcImpl, getDefaultArgs(funcImpl.params));
            var id = $scope.vm.mathFuncList.add(funcObj);
            funcObj.signature.name += id;
        };
        
        function getDefaultArgs(params) {
            var args = {};
            for (var i = 0; i < params.length; i++) {
                var val = (i == 0) ? 1 : 0;
                args[params[i]] = val;
            }
            return args;
        }
        
        $scope.getNumber = function(n) {
            var arr = new Array(n);
            for (var i = 0; i < n; i++) {
                arr.push(i);
            }
            return arr;
        }
        
        $scope.$watch('vm', function(newValue) {
            console.log('Document changed');
            var tmpValues = $scope.vm.calculateValues($scope.tmpDomain);
            updateChartValues(tmpValues);
            updateTableValues(tmpValues);
        }, true);
        
        function updateChartValues(tmpValues) {
            $scope.chartValues.length = 0;
            tmpValues.forEach(function(values) {
                $scope.chartValues.push({
                    name: values.name,
                    data: values.values
                });
            });
        }
        
        function updateTableValues(tmpValues) {
            $scope.tableValues.length = 0;
            // TODO: tmpDomain does not seem to be a good choice
            if (tmpValues.length == 0) {
                return;
            }
            for (var i = 0; i < $scope.tmpDomain.length; i++) {
                var row = [];
                row.push($scope.tmpDomain[i]);
                tmpValues.forEach(function(f) {
                    row.push(f.values[i]);
                });
                $scope.tableValues.push(row);
            }
        }

        $scope.$watch('chartValues', function(newValue) {
            console.log('Chart data changed: ' + $scope.chartValues.length);
            //$scope.$applyAsync();
        }, true);

        $scope.$watch('tableValues', function(newValue) {
            console.log('Table data changed: ' + $scope.tableValues.length);
            //$scope.$applyAsync();
        }, true);
        
    }
    
})();
