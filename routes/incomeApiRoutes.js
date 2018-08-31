var db =require("../models");

module.exports = function(app) {
  app.get("/api/income", function(req, res) {
    db.Income.findAll({}).then(function(dbIncome){
      res.json(dbIncome);
    });
  });
  app.get("/app/income/:category", function(req, res){
    db.Income.hasMany({
      where:{
        category: req.params.category
      },
    }).then(function(dbIncome){
      res.json(dbIncome);
    });
  });
};

