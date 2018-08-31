module.exports = function (sequelize, DataTypes) {
  // ------for userlogin table----
  var UserLogin = sequelize.define("UserLogin", {
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
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });


  UserLogin.associate = function (models) {
    UserLogin.belongsTo(models.UserLogin, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return UserLogin;
};
