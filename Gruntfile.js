module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration will be written here
        bower: {
            install: {
                options: {
                    install: true,
                    copy: false,
                    targetDir: './app/bower_components',
                    cleanTargetDir: true
                }
            }
        }, jshint: {
            all: ['Gruntfile.js', 'app/*.js', 'app/**/*.js']
        }, karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true
            },

            continuous: {
                singleRun: false,
                autoWatch: true
            }
        },
        html2js: {
            dist: {
                src: ['app/**/*.html'],
                dest: 'tmp/templates.js'
            }
        },
        clean: {
            temp: {
                src: ['tmp']
            }
        }, watch: {
            options: {
                livereload: true,
            },
            dev: {
                files: ['Gruntfile.js', 'app/**/*.js','app/*.js', 'app/**/*.html','app/*.html'],
                tasks: ['html2js:dist'],
                options: {
                    atBegin: true,
                }
            },
            min: {
                files: ['Gruntfile.js', 'app/*.js', '*.html'],
                tasks: ['html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
                options: {
                    atBegin: true
                }
            }
        }, connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 4040,
                    open: {
                        target: 'http://localhost:4040/app' // target url to open
                    },
                    debug: true
                }
            }
        }
    });

    // Loading of tasks and registering tasks will be written here
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('dev', ['bower', 'connect:server', 'watch:dev']);
    grunt.registerTask('test', ['bower', 'jshint', 'karma:continuous']);
    grunt.registerTask('minified', ['bower', 'connect:server', 'watch:min']);
    grunt.registerTask('server', ['connect:server', 'watch:dev']);
    grunt.registerTask('package', ['bower', 'jshint', 'karma:unit', 'clean:temp']);
};