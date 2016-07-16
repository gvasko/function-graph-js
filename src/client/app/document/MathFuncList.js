(function() {
    'use strict';
    
    angular
        .module('app.document')
        .factory('MathFuncList', MathFuncList);
        
    MathFuncList.$inject = [];
    
    function MathFuncList() {
        return new MathFuncListServiceObject();
    }
    
    function MathFuncListServiceObject() {
        this.createMathFuncList = function() {
            return new MathFuncListObject();
        }
    }
    
    function MathFuncListObject() {

        // public
        this.getAll = getCopyOfMathFuncList;
        this.add = addMathFunc;
        this.remove = removeMathFunc;
        this.removeAll = removeAllMathFunc;

        //private
        
        this.mathFuncList = [];
        var nextId = 0;

        function getCopyOfMathFuncList() {
            return this.mathFuncList.slice();
        }
        
        function addMathFunc(mathFunc) {
            var id = getNextId();
            this.mathFuncList.push({id: id, func: mathFunc, status: true});
            return id;
        }
        
        function removeMathFunc(id) {
            var index = findFirstIndex(this.mathFuncList, function(item) {
                return item.id == id;
            });
            
            if (index == -1) {
                throw 'Internal error: no such mathFunc id: ' + id;
            }
            
            this.mathFuncList.splice(index, 1);
        }
        
        function removeAllMathFunc() {
            this.mathFuncList.length = 0;
        }
        
        function getNextId() {
            return nextId++;
        }

        function findFirstIndex(array, func) {
            for (var i = 0; i < array.length; i++) {
                if (func(array[i])) {
                    return i;
                }
            }
            return -1;
        }

    }
    
    
})();
