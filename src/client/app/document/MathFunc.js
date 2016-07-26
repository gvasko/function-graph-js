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
    
    function createMathFuncImpl(name, params, func) {
        var impl = {
            name: name,
            params: params,
            func: func
        };
        
        return impl;
    }
    
    function createMathFuncObj(funcImpl, args) {
        
        checkSignature(funcImpl.params, args);
        
        var funcObj = {
            
            args: args,
            signature: {
                name: funcImpl.name,
                params: funcImpl.params
            },
            
            getSignature: function() {
                return this.signature;
            },
            
            getValueAt: function(x) {
                return funcImpl.func(this.args, x);
            },
            
            getArgument: function(name) {
                checkParameterName(this.args, name);
                return this.args[name];
            },
            
            setArgument: function(name, value) {
                checkParameterName(this.args, name);
                this.args[name] = value;
            },
            
            getArgsObj: function() {
                return this.args;
            }
        };
        
        return funcObj;
    }
    
    function checkSignature(params, args) {
        if (params.length !== Object.keys(args).length) {
            throw 'The number of actual parameters is incorrect';
        }
        params.forEach(function(param) {
            checkParameterName(args, param);
        });
    }
    
    function checkParameterName(args, name) {
        if (!(name in args)) {
            throw 'No such parameter: ' + name;
        }
    }
    
})();
