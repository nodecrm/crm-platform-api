'use strict';

// Load configuration file
var config = require( 'config' );

// Load third party modules
var glob      = require( 'glob' );
var path      = require( 'path' );
var Sequelize = require( 'sequelize' );
var Hoek      = require( 'hoek' );

var cwd = process.cwd();
var db  = { };

var sequelize = new Sequelize( config.db.database, config.db.username, config.db.password, {
	'dialect' : config.db.dialect,
	'port'    : config.db.port
} );

// Get all models
var files = glob.sync( path.join( cwd, 'models' ) + '/*-model.js' );

// Add all models in directory to the db object
files.forEach( function ( file ) {
	var model        = sequelize.import( file );
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
