var path = require('path');

module.exports = function (app) {

    app.get('/sitters', function(res, req) {
        res.sendFile(path.join (_dirname + "./public/sitters.html"));
    });

    app.get('/clients', function(res, req) {
        res.sendFile(path.join (_dirname + "./public/clients.html"));
    });

    app.get('/newclients', function(res, req) {
        res.sendFile(path.join (_dirname + "./public/new_client.html"));
    });
}