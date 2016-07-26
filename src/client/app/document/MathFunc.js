(function () {
    'use strict';
    
    angular
        .module('app.document')
        .factory('MathFunc', MathFunc);
        
    MathFunc.$inject = [];
    
    function MathFunc() {
        return new MathFuncServiceObject();
    }
    
    function MathFuncServiceObject() {
        this.createFuncImpl = createMathFuncImpl;
        this.createFuncObj = createMathFuncObj;
    }
    
    function createMathFuncImpl(name, args, func) {
        var impl = {
            name: name,
            // TODO: rename params
            args: args,
            func: func
        };
        
        return impl;
    }
    
    function createMathFuncObj(funcImpl, parameters) {
        
        checkSignature(funcImpl.args, parameters);
        
        var funcObj = {
            
            parameters: parameters,
            signature: {
                name: funcImpl.name,
                args: funcImpl.args
            },
            
            getSignature: function() {
                return this.signature;
            },
            
            getValueAt: function(x) {
                return funcImpl.func(this.parameters, x);
            },
            
            getParameter: function(name) {
                checkParameterName(this.parameters, name);
                return this.parameters[name];
            },
            
            setParameter: function(name, value) {
                checkParameterName(this.parameters, name);
                this.parameters[name] = value;
            },
            
            getParametersObj: function() {
                return this.parameters;
            }
        };
        
        return funcObj;
    }
    
    function checkSignature(args, params) {
        if (args.length !== Object.keys(params).length) {
            throw 'The number of actual parameters is incorrect';
        }
        args.forEach(function(arg) {
            checkParameterName(params, arg);
        });
    }
    
    function checkParameterName(parameters, name) {
        if (!(name in parameters)) {
            throw 'No such parameter: ' + name;
        }
    }
    
})();
