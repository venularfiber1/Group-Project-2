module.exports = function (sequelize, DataTypes) {
  var Incomes = sequelize.define("Incomes", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    source: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW'),
      notNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW'),
      notNull: true
    }
  });

  Incomes.associate = function (models) {
    Incomes.hasMany(models.Incomes, {
      onDelete: "cascade"
    });
  };

  return Incomes;
};