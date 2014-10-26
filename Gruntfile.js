module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['src/js/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js' : 'src/js/*.js'
        }
      },
      dev: {
        options: {
          compress: false,
          beautify: true,
          mangle: false
        },
        files: {
          'js/<%= pkg.name %>.min.js' : 'src/js/*.js'
        }
      }
    },
    sass: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/styles.min.css' : 'src/css/styles.scss'
        }
      },
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/styles.min.css' : 'src/css/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['src/css/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev']
      }
    },
    clean : ['css', 'js']
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify:dev', 'sass:dev', 'jshint']);
  grunt.registerTask('dist', ['uglify:dist', 'sass:dist']);
  grunt.registerTask('dev', ['uglify:dev', 'sass:dev']);

};






