'use strict';

// Load config file
var config = require( 'config' );

// Load third party modules
var bcrypt = require( 'bcrypt' );

module.exports = function ( sequelize, DataTypes ) {
	var User = sequelize.define( 'User', {
		'id' : {
			'type'         : DataTypes.UUID,
			'primaryKey'   : true,
			'defaultValue' : DataTypes.UUIDV4
		},

		'name' : {
			'type'      : DataTypes.STRING,
			'allowNull' : false
		},

		'username' : {
			'type'      : DataTypes.STRING,
			'allowNull' : false
		},

		'password' : {
			'type'      : DataTypes.STRING,
			'allowNull' : false
		},

		'email' : {
			'type'      : DataTypes.STRING,
			'allowNull' : false
		},

		'createdAt' : DataTypes.DATE,
		'updatedAt' : DataTypes.DATE,
		'deletedAt' : DataTypes.DATE
	}, {
		'paranoid' : true,

		'hooks' : {
			'beforeCreate' : function ( user, done ) {
				bcrypt.genSalt( config.hashRounds, function ( error, salt ) {
					if ( error ) {
						return done( error );
					}

					bcrypt.hash( ( user.password + config.salt ), salt, function ( error, hash ) {
						if ( error ) {
							return done( error );
						}

						user.password = hash;

						done( null, user );
					} );
				} );
			}
		},

		'instanceMethods' : {
			'verifyPassword' : function ( password, done ) {
				bcrypt.compare( ( password + config.salt ), this.password, function ( error, response ) {
					done( error, response );
				} );
			}
		}
	} );

	return User;
};