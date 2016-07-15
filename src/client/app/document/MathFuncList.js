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
        this.getAll = getMathFuncList;
        this.add = addMathFunc;
        this.remove = removeMathFunc;
        this.removeAll = removeAllMathFunc;

        //private
        
        var mathFuncList = [];
        var nextId = 0;

        function getMathFuncList() {
            // TODO: defensive copy
            return mathFuncList;
        }
        
        function addMathFunc(mathFunc) {
            var id = getNextId();
            mathFuncList.push({id: id, func: mathFunc});
            return id;
        }
        
        function removeMathFunc(id) {
            var index = findFirstIndex(mathFuncList, function(item) {
                return item.id == id;
            });
            
            if (index == -1) {
                throw 'Internal error: no such mathFunc id.';
            }
            
            mathFuncList.splice(index, 1);
        }
        
        function removeAllMathFunc() {
            mathFuncList = [];
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
