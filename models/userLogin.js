module.exports = function (sequelize, DataTypes) {
  // ------for userlogin table----
  var userLogin = sequelize.define("userLogin", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });


  userLogin.associate = function (models) {
    userLogin.belongsTo(models.income, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return userLogin;
};
