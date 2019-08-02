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






