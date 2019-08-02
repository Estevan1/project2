<<<<<<< Updated upstream
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});






=======
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
>>>>>>> Stashed changes
