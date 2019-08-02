module.exports = function (app) {
    app.post('/api/new-sitter', function (req, res) {
        console.log(req.body);
    });
}