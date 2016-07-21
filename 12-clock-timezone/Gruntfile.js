module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					compass: true,
					style: 'compressed',
				},
				files: { 
					'dist/styles.css': 'scss/styles.scss',
				}
			}
		},
		postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        },
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'postcss:dist']
			},
			js: {
			    files: 'js/scripts.js',
			    tasks: ['uglify']
			}
		},
		uglify: {
		    my_target: {
			    files: {
			        'dist/scripts.min.js': [
			        	'node_modules/moment/min/moment.min.js',
			        	'node_modules/moment-timezone/builds/moment-timezone-with-data-2010-2020.min.js',
			        	'node_modules/bootstrap-select/js/bootstrap-select.js',
			        	'node_modules/jstimezonedetect/dist/jstz.min.js',
			        	'js/scripts.js'
			        ]
			    }
		    }
		}
	})

	grunt.registerTask('default', ['watch'])
};