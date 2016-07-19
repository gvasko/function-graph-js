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
        };
    }

    function ViewDocumentObject(MathFuncList) {
        this.mathFuncList = MathFuncList.createMathFuncList();
        
        this.calculateValues = calculateValues;
    }
    
    function calculateValues(domainValues) {
        var calculatedValues = [];
        
        this.mathFuncList.getAll().forEach(function(mathFunc) {
            if (mathFunc.status) {
                var values = [];
                domainValues.forEach(function(x) {
                    values.push(mathFunc.func.getValueAt(x));
                });
                calculatedValues.push({
                    name: mathFunc.func.getSignature().name,
                    values: values
                });
            }
        });
        
        return calculatedValues;
    }
    
})();