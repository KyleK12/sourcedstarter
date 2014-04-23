// app/routes.js

//POST /* cCREATE */
app.post('/insert', function (req, res) {    
    
    console.log("Added the Go: " + req.body.title);
    console.log("Added the Tag: " + req.body.tags);
    console.log("Added the Description: " + req.body.desc);
    console.log("Added the Time: " + req.body.time);
    console.log("Added the Month: " + req.body.month);
    console.log("Added the Day: " + req.body.day);
    console.log("Added the Year: " + req.body.year);
    console.log("Added the Stamp: " + req.body.stamp);

    db.collection('goTesting').insert(

    	{
    		"go" : req.body.title,
	    	"tags" : req.body.tags,
	    	"desc" : req.body.desc,
	    	"time" : req.body.time,
	    	"month" : req.body.month,
	    	"day" : req.body.day,
	    	"year" : req.body.year,
	    	"stamp" : req.body.stamp
    	},
    	
    		function (err, doc) {
		
				getAll(res);

			});

});


//GET /* rRetrieve */
app.get('/', function (req, res) {

	getAll(res);

});

app.get('*', function (req, res) {

	res.send("Now somewhere.. 404", 404);

});

function getAll(res) {

	db.collection('goTesting').find().sort( { stamp: 1 } ).toArray(function (err, docs) {
		console.log("Got the GOs: " + utils.inspect(docs));
    /*
     * each doc looks like:
     *   { go: 'text', tags: 'text', desc: 'text' }
     */
		res.json({docs: docs});

	});
}


//FINDone by ID
app.post('/find', function (req, res) {    
    
      // construct the obId for .find
    console.log("Got the ID: " + req.body.idFind);
    
    var obId = new require('mongodb').ObjectID(req.body.idFind);
    
    console.log(obId);

	db.collection('goTesting').find({"_id" : obId}).toArray(function (err, doc) {
		console.log("Got the GO: " + utils.inspect(doc));
    /*
     * each doc looks like:
     *   { go: 'text', tags: 'text', desc: 'text' .. }
     */
		res.json({doc: doc});

	});

});


//POST /* mModify */
app.post('/update', function (req, res) {    

    console.log("Got the ID: " + req.body.mId);

    var obIdM = new require('mongodb').ObjectID(req.body.mId);
    
    console.log(obIdM);    

    console.log("Updating the Go: " + req.body.mTitle);
    console.log("Updating the Tag: " + req.body.mTags);
    console.log("Updating the Description: " + req.body.mDesc);
    console.log("Updating the Time: " + req.body.mTime);
    console.log("Updating the Month: " + req.body.mMonth);
    console.log("Updating the Day: " + req.body.mDay);
    console.log("Updating the Year: " + req.body.mYear);
    console.log("Updating the Stamp: " + req.body.mStamp);

	db.collection('goTesting').update(

		{ "_id" : obIdM },
		
		{
			"go" : req.body.mTitle,
			"tags" : req.body.mTags,
			"desc" : req.body.mDesc,
			"time" : req.body.mTime,
			"month" : req.body.mMonth,
			"day" : req.body.mDay,
			"year" : req.body.mYear,
			"stamp" : req.body.mStamp
		},

    		function (err, doc) {

					console.log("Updated the GO: " + utils.inspect(doc));
		
				getAll(res);

			});
});


//POST /* dDelete */
app.post('/delete', function (req, res) {    

    console.log("Got the ID: " + req.body.mId);

    var obIdM = new require('mongodb').ObjectID(req.body.mId);
    
    console.log("Deleting the following doc_ID: " + obIdM);

	db.collection('goTesting').remove(

		{ "_id" : obIdM },
		
    		function (err, doc) {

					console.log("Deleted that GO");
		
				getAll(res);

			});
});