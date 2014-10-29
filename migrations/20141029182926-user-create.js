'use strict';

module.exports = {

	'up' : function ( migration, DataTypes, done ) {
		migration
			.createTable( 'Users', {
				'id' : {
					'type'       : DataTypes.UUID,
					'primaryKey' : true
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
			} )
			.complete( done );
	},

	'down' : function ( migration, DataTypes, done ) {
		migration
			.dropTable( 'Users' )
			.complete( done );
	}

};
