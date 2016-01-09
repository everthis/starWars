// Generated on 2015-02-03 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'src',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: './',
          dest: '<%= config.dist %>',
          src: [
            '*.{eot,svg,ttf,woff,woff2}'
          ]
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: false,
          collapseWhitespace: false,
          conservativeCollapse: false,
          removeAttributeQuotes: false,
          removeCommentsFromCDATA: false,
          removeEmptyAttributes: false,
          removeOptionalTags: false,
          removeRedundantAttributes: false,
          useShortDoctype: false
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      },
      starwars: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          minifyCSS:true,
          minifyJS:true
        },
        files: [{
          expand: true,
          cwd: './',
          src: 'index.html',
          dest: '<%= config.dist %>'
        }]
      }
    }

  });




  grunt.registerTask('starwars', [
    'htmlmin:starwars',
    'copy:dist'
  ]);

};
