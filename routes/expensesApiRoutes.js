var db = require("../models");

module.exports = function (app) {
  app.get("/api/expenses/detail/:userID", function (req, res) {
    // ------------to find all(All the expenses with the same user)--------
    db.Expenses.findAll({
      where: {
        userID: req.params.userID
      }
    }).then(function (dbExpenses) {
      res.json(dbExpenses);
      console.log(dbExpenses);
    });
  });

  // ------------to find all(All the expenses with the same user)--------
  app.get("/api/expenses", function (req, res) {
    db.Expenses.findAll({}).then(function (dbExpenses) {
      res.json(dbExpenses);
      console.log(dbExpenses);
    });
  });

  //------API route for all userID total expenses----------
  app.get("/api/expenses/total/:userID", function (req, res) {
    db.Expenses.findAll({
        attributes: [[db.sequelize.fn('SUM', db.sequelize.col('amount')), 'tot_amt']],
        where: {
          userID: req.params.userID
        }
      }).then(function (sum) {
        res.json(sum);
        console.log(sum);
    });
  });

  // -----API route for the Categorywise expenses-------
  app.get("/api/expenses/summary/:userID", function (req, res) {
      db.Expenses.findAll({
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
};
