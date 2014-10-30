var Code = require( 'code' );
var Lab  = require( 'lab' );
var lab  = exports.lab = Lab.script();

var describe = lab.describe;
var it       = lab.it;
var before   = lab.before;
var after    = lab.after;
var expect   = Code.expect;

var User = require( '../../models' ).User;

describe( 'User model', function () {

	it( 'has attributes', function ( done ) {
		expect( User.attributes ).to.exist();
		done();
	} );

	describe( 'User model attributes', function () {

		it( 'is an object', function ( done ) {
			expect( User.attributes ).to.be.an.object();
			done();
		} );

	} );

} );
