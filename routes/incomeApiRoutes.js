var db = require("../models");

module.exports = function (app) {
  app.get("/api/incomes/detail/:userID", function (req, res) {
    // ------------to find all(All the incomes with the same user)--------
    db.Incomes.findAll({
      where: {
        userID: req.params.userID
      }
    }).then(function (dbIncomes) {
      res.json(dbIncomes);
      console.log(dbIncomes);
    });
  });


  // ------------to find all(All the incomes with the same user)--------
  app.get("/api/incomes", function (req, res) {
    db.Incomes.findAll({}).then(function (dbIncomes) {
      res.json(dbIncomes);
      console.log(dbIncomes);
    });
  });

  // -----API route for the Categorywise incomes-------
  app.get("/api/incomes/summary/:userID", function (req, res) {
    db.Incomes.findAll({
      attributes: ['category', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'tot_amt']],
      where: {
        userID: req.params.userID
      },
      group: 'category'
    }).then(function (sum) {
      res.json(sum);
      console.log(sum);
    });

  });



  // -----POST route for new income source the same user-----


  app.post("/api/create", function (req, res) {
    console.log(req.body);
    db.Incomes.create({
      source: req.body.source,
      category: req.body.category,
      amount: req.body.amount,
      userID: req.body.userID
    }).then(function (dbIncomes) {
      res.json(dbIncomes);
    });
  });

  // --------DELETE route to Delete an income item by id
  app.delete("/api/incomes/:id", function (req, res) {
    console.log(req.params.id);
    db.Incomes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbIncomes) {
      res.json(dbIncomes);
    });
  });

  app.post("/api/incomes/", function (req, res) {
    db.Incomes.create({
      source: req.body.source,
      category: req.body.category,
      amount: req.body.amount,
      email: req.body.email
    }).then(function (dbIncomes) {
      res.json(dbIncomes);
    });
  });

  app.get("/api/incomes/:id", function (req, res) {
    db.Incomes.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbIncome) {
      res.json(dbIncome);
    });
  });

  app.get("/api/incomes/total/:email", function (req, res) {
    db.Incomes.findAll({
      attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'tot_amt']],
      where: {
        email: req.params.email
      }
    }).then(function (sum) {
      res.json(sum);
      console.log(sum);
    });
  });

};

