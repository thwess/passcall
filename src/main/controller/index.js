/**
* Controllers
*/
exports.init = function( app ) {

	app.get( '/', function( req, res ) {

		res.render( 'index', { title: 'Home page' } );

	} );

};