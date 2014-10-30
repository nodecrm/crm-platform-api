'use strict';

var User = require( '../models' ).User;

module.exports = [
	{
		'method' : 'GET',
		'path'   : '/users',
		'config' : {
			'handler' : function ( request, reply ) {
				var options = {
					'limit'      : 20,
					'attributes' : [ 'id', 'name' ]
				};

				User.findAll( options ).success( function ( users ) {
					reply( users );
				} ).error( function ( err ) {
					reply( err );
				} );
			}
		}
	}
];
