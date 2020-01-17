var db = require("../models");

module.exports = function (app) {

  // Routes for /api/users ---------------------------------------------------------

  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get user by user-id
  app.get("/api/users/:id", function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      })
  });

  // Create a new user
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  // Update a user by id



  // Routes for /api/neighborhoods ---------------------------------------------------------

  // Get all neighborhoods
  app.get("/api/neighborhoods", function (req, res) {
    db.Neighborhood.findAll({}).then(function (dbNeighborhoods) {
      res.json(dbNeighborhoods);
    });
  });

  // Get neighborhood by neighborhood-id
  app.get("/api/neighborhoods/:id", function (req, res) {
    db.Neighborhood.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbNeighborhoods) {
        res.json(dbNeighborhoods);
      });
  });

  // Create a new neighborhood
  app.post("/api/neighbhorhoods", function (req, res) {
    db.Neighborhood.create(req.body).then(function (dbNeighborhoods) {
      res.json(dbNeighborhoods);
    });
  });

  // Delete a neighborhood by neighborhood-id
  app.delete("/api/neighborhoods/:id", function (req, res) {
    db.Neighborhood.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbNeighborhoods) {
        res.json(dbNeighborhoods);
      });
  });

  // Update neighborhood

  // Routes for /api/parks ---------------------------------------------------------

  // Get all parks
  app.get("/api/parks", function (req, res) {
    db.Park.findAll({}).then(function (dbParks) {
      res.json(dbParks);
    });
  });

  // Get park by park-id
  app.get("/api/parks/:id", function (req, res) {
    db.Park.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbParks) {
        res.json(dbParks);
      })
  });

  // Create a new park
  app.post("/api/parks", function (req, res) {
    db.Park.create(req.body).then(function (dbParks) {
      res.json(dbParks);
    });
  });

  // Delete a park by id
  app.delete("/api/parks/:id", function (req, res) {
    db.Park.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbParks) {
        res.json(dbParks);
      });
  });

  // Update a park by id

  // Routes for /api/sports ---------------------------------------------------------

  // Get all sports
  app.get("/api/sports", function (req, res) {
    db.Sport.findAll({}).then(function (dbSports) {
      res.json(dbSports);
    });
  });

  // Get sport by sports-id
  app.get("/api/sports/:id", function (req, res) {
    db.Sport.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbSports) {
        res.json(dbSports);
      })
  });

  // Create a new sport
  app.post("/api/sports", function (req, res) {
    db.Sport.create(req.body).then(function (dbSports) {
      res.json(dbSports);
    });
  });

  // Delete a sport by id
  app.delete("/api/sports/:id", function (req, res) {
    db.Sport.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbSports) {
        res.json(dbSports);
      });
  });

  // Update a sport by id

  // Routes for /api/games ---------------------------------------------------------

  // Get all games
  app.get("/api/games", function (req, res) {
    db.Game.findAll({}).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // Get sport by games-id
  app.get("/api/games/:id", function (req, res) {
    db.Game.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbGames) {
        res.json(dbGames);
      })
  });

  // Create a new game
  app.post("/api/games", function (req, res) {
    db.Game.create(req.body).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // Delete a game by id
  app.delete("/api/games/:id", function (req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbGames) {
        res.json(dbGames);
      });
  });

  // Update a game by id

};
