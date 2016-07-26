module.exports = function(config) {
    config.set({
        
        basepath: '',
        
        frameworks: ['jasmine'],
        
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-resource/angular-resource.js',
            //'src/client/app/document/*.js',
            'src/client/app/document/document.module.js',
            'src/client/app/document/MathFunc.js',
            'src/client/tests/*.test.js'
        ],
        
        exclude: [
        ],
        
        preprocessors: {
        },
        
        
        reporters: ['progress'],
        
        port: 9876,
        
        colors: true,
        
        logLevel: config.LOG_INFO,
        
        autoWatch: true,
        
//        browsers: ['Chrome'],
        browsers: ['PhantomJS'],
        hostname: process.env.IP,
        port: process.env.PORT,
        runnerPort: 0,
        
        singleRun: false
    })
}
