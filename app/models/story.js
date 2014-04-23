// app/models/story.js

var mongoose		= require('mongoose'); // load mongoose
var Schema			= mongoose.Schema; // define Schema

// create model
var StorySchema		= new Schema({
	title: String
});

// export model & schema
module.exports		= mongoose.model('Story', StorySchema);