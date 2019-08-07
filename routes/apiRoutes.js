var db = require("../models");

module.exports = function (app) {
    app.post('/api/new-sitter', function (req, res) {
        console.log('new-sitter', req.body);
        db.sitter.create({
            name: 'Ryan',
            phone: 4564546,
            email: 'rdkelley@gmail.com',
            address: '434',
        })
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function (req, res) {
        db.Sitter.findAll({
            where: {
                category: req.params.category
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function (req, res) {
        db.Sitter.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // POST route for saving a new post
    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Sitter.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
        db.Sitter.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // PUT route for updating posts
    app.put("/api/posts", function (req, res) {
        db.Sitter.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });


    });
}
