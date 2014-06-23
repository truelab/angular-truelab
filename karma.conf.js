module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/*.js'
        ],

        frameworks: ['jasmine'],

        browsers : ['Chrome']
    });
};