const { clean } = require("underscore.string");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                options: {
                    browserifyOptions: {
                        debug: false // for production build, set to true for development
                    },
                    transform: [["babelify", { presets: ["@babel/preset-env"] }]]
                },
                src: 'src/main.js',
                dest: 'scripts/app.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/app.min.js': ['scripts/app.js']
                }
            },
        },
        copy: {
            main: {
                files: [
                    // copy HTML files
                    { expand: true, src: ['index.html'], dest: 'build/', flatten: true},
                    // copy assets
                    { expand: true, src: ['assets/**'], dest: 'build/' }   
                ]
            }
        },
       
        clean: {
            build: ['build/']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('build', [ 'clean', 'browserify', 'uglify', 'copy']);
};
