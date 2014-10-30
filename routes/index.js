'use strict';

// Local local modules
var mixins = require( 'utils/mixins' );

// Load third party modules
var glob = require( 'glob' );
var path = require( 'path' );
var Hoek = require( 'hoek' );

var cwd = process.cwd();
var mod = { };

// Get all routes
var files = glob.sync( path.join( cwd, 'routes' ) + '/*-definition.js' );

files.forEach( function ( file ) {
	var capitalized = mixins.capitalize( path.basename( file, '-definition.js' ) );

	mod[ capitalized ] = require( file );
} );

Hoek.merge( module.exports, mod );
