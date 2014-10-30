'use strict';

if ( !module.parent ) {
	throw new Error( 'Do not run this file directly, instead run index.js' );
}

// Load config file
var config = require( 'config' );

// Load models
var models = require( 'models' );

// Load routes
var routes = require( 'routes' );

// Load third party modules
var Hapi = require( 'hapi' );

// Create a Hapi server instance
var server = new Hapi.Server( config.api.host, config.api.port, {
	'cors' : true
} );

// Add all the routes within the routes folder
for ( var route in routes ) {
	server.route( routes[ route ] );
}

// Start the server
var start = function ( done ) {
	models.sequelize.sync().complete( function ( err ) {
		if ( err ) {
			throw err[ 0 ];
		}

		// Start the server
		server.start( function () {
			console.log( 'Server running at: ' + server.info.uri );

			if ( typeof done === 'function'  ) {
				done();
			}
		} );
	} );
};

module.exports.start = start;
