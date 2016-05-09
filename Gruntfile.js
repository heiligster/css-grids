module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-jade')
  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-sass')

  grunt.initConfig({
    jade: {
      html: {
        files: {
          'dist/': ['src/*.jade', 'src/pages/**/*.jade']
        },
        options: {
          basePath: 'src/',
          client: false,
          pretty: true
        }
      }
    },
    browserSync: {
      bsFiles: {
        src: [
          __dirname + '/dist/css/*.css',
          __dirname + '/dist/**/*.html'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: __dirname + '/dist/'
        }
      }
    },
    watch: {
      sass: {
        files: 'src/sass/**/*.sass',
        tasks: ['sass']
      },
      jade: {
        files: 'src/**/*.jade',
        tasks: ['jade']
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/index.css': 'src/sass/index.sass'
        }
      }
    }
  })

  grunt.registerTask('default', ['jade', 'sass', 'browserSync', 'watch'])
}
