'use strict'

module.exports = function(grunt){
    grunt.initConfig({

  karma: {
    all:{
      options:{
        frameworks:['mocha', 'chai'],
        browsers: ['Chrome'],
        files: [
          'node_modules/angular/angular.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'src/js/shop.module.js',
          'src/js/**/*.js',
          'test/**/*.spec.js'
        ],
        singleRun: true,
          preprocessors: {
            'src/js/**/*.js':['coverage'] 
          },
          reporters: ['dots', 'coverage'],
          coverageReporter: {
            type: 'text-summary'
          }
      }
    }
  }

  });

    grunt.loadNpmTasks('grunt-karma');//don't forget to add other things after testing
    grunt.registerTask('build', ['karma']);
};
