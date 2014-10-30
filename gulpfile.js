var gulp   = require( 'gulp' );
var jshint = require( 'gulp-jshint' );
var lab    = require( 'gulp-lab' );

gulp.task( 'test', function () {
	return gulp.src( './test/**/*.js' )
		.pipe( lab( {
			'args' : '-v -C -L',
			'opts' : {
				'emitLabError' : true
			}
		} ) )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'default' ) );
} );

gulp.task( 'default', [ 'test' ] );
