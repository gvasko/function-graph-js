(function() {
    'use strict';
    
    angular
        .module('app.document')
        .factory('Document', Document);
        
    Document.$inject = ['MathFuncList'];
        
    function Document(MathFuncList) {
        return new DocumentServiceObject(MathFuncList);
    }

    function DocumentServiceObject(MathFuncList) {
        this.createDocument = function() {
            return new DocumentObject(MathFuncList);
        }
    }

    function DocumentObject(MathFuncList) {
        this.mathFuncList = MathFuncList.createMathFuncList();
    }
    
})();