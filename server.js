// server.js

// SET UP CALLING THE PACKAGES
// ===============================================================================================================================
var express				= require('express'); 							// express for a better node
var app					= express();  									// create our express app
var router				= express.Router();  							// an instance of the express Router
var mongoose 			= require('mongoose');  						// mongoose for mongodb
var database 			= require('./config/db');  						// load the remote database config
var bodyParser 			= require('body-parser');  						// configure app to use bodyParser()
var expressHandlebars 	= require('express3-handlebars');  				// Hbs for our templating engine
var request  			= require('request');  							// require for external links
var utils 				= require('util');

var handlebars 			= expressHandlebars.create({
											defaultLayout: 'main'});  	// set the primary layout

var port 				= Number(process.env.PORT || 4200);  			// set the port


// CORSheaders
// ===============================================================================================================================
var allowCrossDomain 	= function(req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();

};


// MIDDLEWARE
// ===============================================================================================================================
app.use( '/public', express.static('public') );  						// set the static files location to /public
app.use( bodyParser() );  												// this will let us pull POST data from our HTTP request
app.use( allowCrossDomain );  											// see http://stackoverflow.com/a/7069902/137784
// app.use( express.urlencoded()) ;
app.engine( 'handlebars', handlebars.engine );  						// set Hbs as an engine
app.set( 'view engine', 'handlebars' );    								// set our view engine to Hbs
app.set( 'view cache', false);											// preventing from memory, force disk

router.use(function(req, res, next) {

	console.log('Magic is in the making');								// logging on every API call

	next();																// ..to the next routes from here

});


// DATABASE CONFIGURATIONS
// ===============================================================================================================================
mongoose.connect( database.url ); 										// connect to the mongoDB database
var Story 			= require('./app/models/story');					// load the mongoose model


// CORS
// ===============================================================================================================================
app.options('*', function(req, res){

  res.send(200);														// allow CORS pre-flight requests

});


// ROUTES FOR THE API
// ===============================================================================================================================

// on routes for /stories
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
router.route('/stories')

	// create a story (accessed at POST http://localhost:4200/api/v1/stories)
	.post(function(req, res) {
		
		var story = new Story();										// create a new instance of the Story model
		story.title = req.body.title;									// set the story name (comes from the request)

		// save the story, and check for errors
		story.save(function(err) {

			if (err)
				res.send(err);

			res.json({ message: 'Story "' + story.title + '" Created' });

		});
		
	})

	// get all the stories (accessed at GET http://localhost:4200/api/v1/stories)
	.get(function(req, res) {

		Story.find(function(err, stories) {

			if (err)
				res.send(err);

			res.json(stories);

		});

	});


// on routes for /stories/:story_id
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
router.route('/stories/:story_id')

	// get the story with this id (accessed at GET http://localhost:4200/api/v1/stories/:story_id)
	.get(function(req, res) {

		Story.findById(req.params.story_id, function(err, story) {

			if (err)
				res.send(err);

			res.json(story);

		});

	})

	// update the story with this id (accessed at PUT http://localhost:4200/api/v1/stories/:story_id)
	.put(function(req, res) {

		Story.findById(req.params.story_id, function(err, story) {

			if (err)
				res.send(err);

			story.title = req.body.title;								// update the Story's title

			// save the story, and check for errors
			story.save(function(err) {

				if (err)
					res.send(err);

			res.json({ message: 'Story "' + req.params.story_id + '" Updated' });

			});

		});

	})

	// delete the story with this id (accessed at PUT http://localhost:4200/api/v1/stories/:story_id)
	.delete(function(req, res) {

		Story.remove({
			_id: req.params.story_id
		},

		function(err, story) {

			if (err)
				res.send(err);

			res.json({ message: 'Story "' + req.params.story_id + '" Deleted' });

		});

	});


// REGISTER THE ROUTES
// ===============================================================================================================================
app.use( '/api/v1', router );  											// all of the routes are prefixed with /api (version /v1)

app.get('/', function(req, res){
	res.render('index')
});


// LISTEN (start app with: nodemon server)
// ===============================================================================================================================
app.listen(port);
console.log("Magic happens on port " + port);