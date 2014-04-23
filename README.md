About:

	This is The Sourced Starter Kit, for catalyzing app creation.


Knowledge:

	There are a number of ways to build an app..
	This outlines the Mustache MEN approach:
	Handlebars + Node.js + MongoDB

	The full stack consists of:
	(CSS3 + HTML5 + Handlebars) + (Javascript) + (Express + Node.js) + (Mongoose + MongoDB)
	which accounts for the frontent (view) and the backend (model & client).

	MVC, for Model+View+Client, is essentially another description for 'frontend' & 'backend'.
	The 'Model' is the data in the database, the 'View' is what the user sees,
	and the 'Client' is the means of connection between the data & the user.

	The data is essentially made available to the user through a combination of get & post,
	where data is either pulled ('get') by the 'Client' from the db 'Model' to the user 'View',
	or pushed ('post') from the user 'View' to the db 'Model' by the 'Client'.

	The Sourced Starter Kit is structured with modularity,
	whereby the 'View' is independent from the 'Client',
	which is also independent from the 'Model'.
	
	Modularity allows for a number of best practices:
		+ Dependency Injection // whereby code can be tested more easily through its independence
		+ Knowledge Transfer // whereby other engineers can more quickly understand a project's code
		+ Evolved Expansion // whereby the code can be more readily built upon for additional features


Organizing:

	There are a number of ways to organize an app,
	while this outlines a way for separating the MVC:

	Model:
		MongoDB // NoSQL database of javascriptObject documents
		Mongoose // ORM (object-role modeling) for communicating with MongoDB

	View:
		Handlebars // templatingAgent for populating HTML with data from the db
		HTML5 // for contructing the elements that the user interacts with
		CSS3 // for styling the HTML elements (making every website/app unique)

	Client:
		Node.js // serverSide javascript, configuring the CRUD API for the Model & View
		Express // Node.js framework for taking care of the node/server basics


	- app <!-- node API elements -->
	----- models <!-- mongoose schemas/models -->
	---------- story.js
	----- routes.js
	----- api.js
	- config <!-- db connections -->
    ----- db.js
    ----- data <!-- test data -->
    ---------- itemData.js
	- node_modules <!-- created by npm install -->
	- public <!-- all the frontendView magic -->
	----- css
	---------- styles.css
	---------- bootstrap.css
	---------- boostrap.min.css
	----- fonts
	----- img  <!-- for static images -->
	----- js
	---------- jquery.js
	---------- boostrap.js
	---------- holder.js
	---------- bootstrap-tour.js
	---------- jquery.cookie.js
	----- ico <!-- for static icons -->
	----- views <!-- for handlebars pages -->
	---------- layouts <!-- for handlebars template layout -->
	--------------- main.handlebars
	---------- index.handlebars
	- package.json <!-- tells npm which packages we need -->
	- server.js <!-- sets up our node application -->
	- README.md <!-- this document -->


server.js

	SET UP by calling all of the packages (saved through npm, and noted in package.json).
	Define the app with express, set the primary frontend layout for handlebars, and set the port.

	The Database configurations in db.js are made for testing in a local environment or for running online.
	CORS refers to CrossOriginResourceSharing, which enables API access to/from services.

	For Middleware, the location for staticFiles is set, and so is the Routes root URL.
	Handelbars is also set as the default templating engine, CORS is enabled for use,
	and bodyParser for pulling data from HTTP requests (Get/Post/Put/Delete).

	We start the Server, by typing into the Terminal App: nodemon server


Magic:

	From here, build up your View by creating more .handlebars pages..
	Connect External APIs to integrate data from more services..
	Perform algorithmic operations with your data using Javascript..

	The Possiblities Are Up To Your Imagination!