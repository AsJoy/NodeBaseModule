/**
 * Created by Administrator on 2016/3/13.
 */
module.exports = function(grunt) {
    //console.log(grunt)
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'es6',
                    src: ['**/*.js', "*.js"],
                    dest: './es5/'
                }]
            }
        },
        watch: {
            buildJs:{
                files: ['es6/*.js',"Gruntfile.js"],
                tasks: ['babel'],
                options: {
                    spawn: false
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ["babel","watch"]);
};