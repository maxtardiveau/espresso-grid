module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				stripBanners: false,
			},
			build: {
				files: {
					'espresso-grid.min.js' : ['node_modules/espresso-transit/transit.min.js', 'src/espresso-frame.min.js'],
					'espresso-grid.js' : ['node_modules/espresso-transit/transit.js', 'src/espresso-frame.js']
				}
			}
		},
		uglify: {
			all: {
				files: {
					"src/espresso-frame.min.js": ["src/espresso-frame.js"]
				},
				options: {
					preserveComments: false,
					sourceMap: false,
					report: "min",
					banner: '/*! Espresso Grid v<%= pkg.version %> | ' + //library & version
						'Espresso Logic | ' + //copyright/company
						'http://espressologic.com */\n', //more/register link
					beautify: {
						"ascii_only": true
					},
				}
			}
		}
	});

	grunt.registerTask('default', ['uglify:all', 'concat:build']);
	grunt.registerTask('minify', ['uglify:all']);
	grunt.registerTask('combine', ['concat:build']);
};