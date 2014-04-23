// app/crud.js

// load the mongoose models
var Go = require('./models/go');

// expose the routes to our app with module.exports
module.exports = function(app) {

// api ---------------------------------------------------------------------

	// retrieve ---------------------------------------------------------------------

	// get All gos
	app.get('*', function(req, res) {

		// use mongoose to get all go in the database
		Go.find(function(err, gos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			// a doc looks like { go: 'text', tags: ['text', 'text'], desc: 'text', ... }
			res.json({gos: gos}); // return all gos in JSON format
		});
	});

	// get One go
	app.get('/api/gos/:go_id', function(req, res) {

		// use mongoose to get one go in the database
		Go.findById({
			_id : req.params.go_id
		}, function(err, go) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(go); // return one go in JSON format
		});
	});


	// create ---------------------------------------------------------------------

	// create go and send back all gos after creation
	app.post('/api/go', function(req, res) {

		// create a go, information comes from AJAX request from Angular
		Go.create({
			text : req.body.text,
			definition : req.body.definition,
			idThought : [ req.body.idThought ],
			keyword : [ req.body.keyword ],
			message : req.body.message,
			trigger : [ req.body.trigger ],
			release : [ req.body.release ],
			associate : [ req.body.associate ],
			hidden : false
		}, function(err, go) {
			if (err)
				res.send(err);

			// get and return all the gos after you create another
			Go.find(function(err, gos) {
				if (err)
					res.send(err)
				res.json(gos);
			});
		});

	});


	// update ---------------------------------------------------------------------




	// delete ---------------------------------------------------------------------

	// delete a go
	app.delete('/api/gos/:go_id', function(req, res) {
		Go.remove({
			_id : req.params.go_id
		}, function(err, go) {
			if (err)
				res.send(err);

			// get and return all the gos after you create another
			Go.find(function(err, gos) {
				if (err)
					res.send(err)
				res.json(gos);
			});
		});
	});

}; // module.exports