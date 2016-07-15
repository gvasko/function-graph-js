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
            args: args,
            func: func
        };
        
        return impl;
    }
    
    function createMathFuncObj(funcImpl, parameters) {
        
        checkSignature(funcImpl.args, parameters);
        
        var funcObj = {
            
            getSignature: function() {
                return {
                    name: funcImpl.name,
                    args: funcImpl.args
                };
            },
            
            getValueAt: function(x) {
                return funcImpl.func(parameters, x);
            },
            
            getParameter: function(name) {
                checkParameterName(parameters, name);
                return parameters[name];
            },
            
            setParameter: function(name, value) {
                checkParameterName(parameters, name);
                parameters[name] = value;
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
