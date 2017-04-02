'use strict';

module.exports = function(grunt) { //can be an anonymous fn
    grunt.initConfig({
        //
        // clean: ['build/'],
        // copy: {
        //     copyhtml: {
        //         files: [{
        //             cwd: 'src', //start from 'src'
        //             src: ['*.html'],
        //             dest: 'build/',
        //             expand: true
        //         }]
        //
        //     }
        // },
        //
        // sass: {
        //     all: {
        //         files: {
        //             //destination file       //source file
        //             'build/style.css': 'src/sass/main.scss'
        //
        //         }
        //     }
        // },
        //
        // jshint: {
        //     source: {
        //         options: {
        //             jshintrc: '.jshintrc'
        //         },
        //         files: {
        //             src: ['src/**/*.js'] //this src is option for the plug
        //         }
        //     }
        // },

        karma: {
            all: {
                options: {
                    frameworks: ['mocha', 'chai'],
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
                        'src/js/**/*.js': ['coverage']
                    },
                    reporters: ['dots', 'coverage'], //for coverage
                    coverageReporter: {
                        type: 'text-summary'
                    }
                }
            }
        }

    });

    // we can run this ONE task to autoload all the others
    // require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-karma'); //don't forget to add other things after testing
    // grunt.loadNpmTasks('grunt-babel');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    //do I use loadNpmTasks for grunt watch or just 'grun watch'
    grunt.registerTask('build', ['jshint', 'karma', 'clean', 'copy', 'sass', 'karma']);
};
