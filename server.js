// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("./public"));

// Routes
// =============================================================
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);
require('./routes/blog.js')(app);
require('./routes/cms.js')(app);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    console.log(db.sitter);
    

    db.sitter.create({
      name: 'Ryan',
      phone: 2036101909,
      email: "rdkelley@gmail.com",
      address: '1549 Broadview'
    })
  
  });



});