'use strict';

// Set the stage environment variable to 'development' by default
var env = process.env.NODE_ENV || 'development';

var configs = {

	'development' : {
		'hashRounds' : 1,
		'salt'       : 'ZE18QHA2dE1aKYGWfxIJTlfqxqo0CXBZrWVoYWj6o9UBN3fQ4yQcdhxDIJkaQzy',

		'api' : {
			'protocol' : 'http',
			'host'     : 'localhost',
			'port'     : 3000
		},

		'db' : {
			'host'     : 'localhost',
			'port'     : 5432,
			'dialect'  : 'postgres',
			'database' : 'platform',
			'username' : 'postgres',
			'password' : 'password'
		}
	}

};

module.exports = configs[ env ];