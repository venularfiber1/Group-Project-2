module.exports = function (sequelize, DataTypes) {
    var income = sequelize.define("income", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate: {
                len: [1]
            }
        },
        source: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
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

    income.associate = function (models) {
        income.hasMany(models.income, {
            onDelete: "cascade"
        });
    };

    return income;
};