var Code = require( 'code' );
var Lab  = require( 'lab' );
var lab  = exports.lab = Lab.script();

var describe = lab.describe;
var it       = lab.it;
var before   = lab.before;
var after    = lab.after;
var expect   = Code.expect;

describe( 'User model', function () {

	describe( 'attributes', function () {

		it( 'has an id which is of data type UUID', function ( done ) {
			expect( 1 + 1 ).to.be.equal( 2 );
			done();
		} );

	} );

} );
