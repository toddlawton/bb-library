// Module dependencies
var application_root = __dirname,
	express = require('express'), // Express framework
	bodyParser = require('body-parser'), // Parser for reading request body
	path = require('path'), // Utilities for dealing with file paths
	mongoose = require('mongoose'); // MongoDB

var app = express();

// Where to serve static content
app.use( express.static( path.join( application_root, 'site' ) ) );
app.use( bodyParser() );

// Start server
var port = 4711;

app.listen( port, function() {
	console.log( 'Express sever listening on port %d in %s mode', port, app.settings.env);
} );

// Routes
app.get( '/api', function( request, response ) {
	response.send('Library API is running');
});

// Connect to database
mongoose.connect( 'mongodb://localhost/library_database' );

// Schemas
var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date
});

// Models
var BookModel = mongoose.model( 'Book', Book );

// Configure server
app.configure( function() {
	// Parses request body and populates request.body
	app.use( express.bodyParser() );

	// Checks request.body for HTTP method overrides
	app.use( express.methodOverride() );

	// Perform route lookup based on url and HTTP method
	app.use( app.router );

	// Where to serve static content
	app.use( express.static( path.join( application_root, 'site' ) ) );

	// Show all errors in development
	app.use ( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get( '/api/books', function( request, response ) {
	return BookModel.find( function( err, books ) {
		if (!err) {
			return response.send( books );
		} else {
			return console.log( err );
		}
	});
});