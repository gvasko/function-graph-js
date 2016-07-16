(function() {
    'use strict';
    
    angular
        .module('app.document')
        .factory('ViewDocument', ViewDocument);
        
    ViewDocument.$inject = ['MathFuncList'];
        
    function ViewDocument(MathFuncList) {
        return new ViewDocumentServiceObject(MathFuncList);
    }

    function ViewDocumentServiceObject(MathFuncList) {
        this.createDocument = function() {
            return new ViewDocumentObject(MathFuncList);
        }
    }

    function ViewDocumentObject(MathFuncList) {
        this.mathFuncList = MathFuncList.createMathFuncList();
    }
    
})();