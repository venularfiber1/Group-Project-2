var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/expense", function(req, res) {
    db.Expense.findAll({}).then(function(dbExpense) {
      res.json(dbExpense);
      console.log(dbExpense);
    });
  });
  // app.get("/app/expense/:category", function(req, res){
  //   db.Expenses.findOne({
  //     where:{
  //       category: req.params.category
  //     },
  //   }).then(function(dbExpenses){
  //     res.json(dbExpenses);
  //   });
  // });
  // Create a new example
  // app.post("/api/expenses", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
