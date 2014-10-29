'use strict';

// Load configuration file
var config = require( 'config' );

// Load third party modules
var fs        = require( 'fs' );
var path      = require( 'path' );
var Sequelize = require( 'sequelize' );
var Hoek      = require( 'hoek' );

var db = { };

var sequelize = new Sequelize( config.db.database, config.db.username, config.db.password, {
	'dialect' : config.db.dialect,
	'port'    : config.db.port
} );

// Add all models in directory to the db object
fs.readdirSync( __dirname ).filter( function ( file ) {
	return ( file.indexOf( '.' ) !== 0 ) && ( file !== 'index.js' );
} ).forEach( function ( file ) {
	var model        = sequelize.import( path.join( __dirname, file ) );
	db[ model.name ] = model;
} );

// Create associations
Object.keys( db ).forEach( function ( modelName ) {
	if ( 'associate' in db[ modelName ] ) {
		db[ modelName ].associate( db );
	}
} );

Hoek.merge( db, { 'sequelize' : sequelize }, { 'Sequelize' : Sequelize } );

module.exports = db;
