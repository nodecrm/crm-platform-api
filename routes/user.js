'use strict';

module.exports = [
	{
		'method' : 'GET',
		'path' : '/users',
		'config' : {
			'handler' : function ( request, reply ) {
				reply( 'hello world!' );
			}
		}
	}
];