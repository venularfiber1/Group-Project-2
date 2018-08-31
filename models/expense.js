module.exports = function (sequelize, DataTypes) {
    var expense = sequelize.define("expense", {
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

    expense.associate = function (models) {
        expense.hasMany(models.expense, {
            onDelete: "cascade"
        });
    };

    return expense;
};