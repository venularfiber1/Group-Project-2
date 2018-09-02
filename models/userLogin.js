module.exports = function (sequelize, DataTypes) {
  // ------for userlogins table----
  var UserLogins = sequelize.define("UserLogin", {
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


  // UserLogins.associate = function (models) {
  //   UserLogins.belongsTo(models.UserLogins, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return UserLogins;
};
