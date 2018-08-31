var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {});
  });

  // Load example page and pass in an example by id
  app.get("/budget/:id", function (req, res) {
    db.Customer.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("budget", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
