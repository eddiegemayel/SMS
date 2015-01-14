module.exports = function(grunt){

	grunt.initConfig({
		connect:{
			server:{
				options:{
					port:5080,
					base:"app",
					keepalive: true
				}
			}
		},
		wiredep:{
			task: {
				src: ['app/index.html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-wiredep');

	grunt.registerTask('serve', ['wiredep', 'connect']);
}