var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/splash.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profile.html"));
  });

  app.get("/neighborhood", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/neighborhood.html"));
  });

  app.get("/join-game", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/join-game.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
  });

  app.get("/create-game", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/create-game.html"));
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });
};

/*
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
*/
