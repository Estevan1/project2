var path = require('path');

module.exports = function (app) {

    app.get('/sitters', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/sitter.html"));
    });

    app.get('/clients', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/clients.html"));
    });

    app.get('/newclients', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/new_client.html"));
    });
}