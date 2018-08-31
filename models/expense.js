module.exports = function (sequelize, DataTypes) {
  var Expense = sequelize.define("Expense", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   validate: {
    //     len: [1]
    //   }
    // },

    source: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    category: {
      type: DataTypes.STRING,
      defaultValue: "House"
    },

    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });

  Expense.associate = function (models) {
    Expense.hasMany(models.Expense, {
      onDelete: "cascade"
    });
  };

  return Expense;
};