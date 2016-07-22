module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		concat: {
			options: {
				separator: '; \n /* ------------------------ */'
			},
			dist: {
				src: [
					'js/search.js', 
					'js/artists/controllerArtists.js', 
					'js/artists/serviceArtists.js',
					'js/albums/controllerAlbums.js', 
					'js/albums/serviceAlbums.js',
					'js/tracks/controllerTracks.js', 
					'js/tracks/serviceTracks.js',
				],
				dest: 'dist/build.js',
			},
		},
		uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        'dist/build.min.js': 'dist/build.js'
		      }
		    }
		  }
	})

	grunt.registerTask('default', ['concat', 'uglify'])
};