(function() {
    'use strict';
    
    angular
        .module('app.document')
        .factory('ViewSettings', ViewSettings);
        
    ViewSettings.$inject = [];
    
    function ViewSettings() {
        return new ViewSettingsObject();

        function isMathFuncEnabled(id) {
            
        }
        
        function getMathFuncColor(id) {
            
        }
        
        function getMathFuncPattern(id) {
            
        }
        
        function getDomainX() {
            
        }
        
        function getDomainY() {
            
        }


        function ViewSettingsObject() {
            this.isMathFuncEnabled = isMathFuncEnabled;
            this.getMathFuncColor = getMathFuncColor;
            this.getMathFuncPattern = getMathFuncPattern;
            this.getDomainX = getDomainX;
            this.getDomainY = getDomainY;
        }
    
    }
    
})();