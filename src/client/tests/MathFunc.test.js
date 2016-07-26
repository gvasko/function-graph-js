describe('MathFuncTest', function() {
   
    var mathFunc = undefined;
    
    beforeEach(function() {
        module('app.document');
        
        inject(function($injector) {
            mathFunc = $injector.get('MathFunc');
        });
    });

    it("should be initialised", function() {
        expect(mathFunc).toBeDefined();
    });
    
    describe('Create math-func implementation', function() {

        it("should return an object with members", function() {
            var name = 'abc';
            var params = ['a', 'b', 'c'];
            var func = function() {};
            var funcImpl = mathFunc.createFuncImpl(name, params, func);
            expect(funcImpl.name).toBe(name);
            expect(funcImpl.args).toBe(params);
            expect(funcImpl.func).toBe(func);
        });

    });
    
    describe('Create math-func object', function() {
        
    });

});
