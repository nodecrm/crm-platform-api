'use strict';

// Load third party modules
var path = require( 'path' );
var fs   = require( 'fs' );
var Hoek = require( 'hoek' );

var mod = { };

fs.readdirSync( __dirname ).filter( function ( file ) {
	return ( file.indexOf( '.' ) !== 0 ) && ( file !== 'index.js' );
} ).forEach( function ( file ) {
	mod[ path.basename( file, '.js' ) ] = require( path.join( __dirname, file ) );
} );

Hoek.merge( module.exports, mod );
