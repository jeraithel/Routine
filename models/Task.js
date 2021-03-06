
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: [1, 140]
      }
    },
    description: {
      type: DataTypes.TEXT,
      notNull: true,
      validate: {
        len: [1, 140]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  });

  // Associate to User
  Task.associate = function(models) {
    Task.belongsTo(models.User);
  };
  
  return Task;
};
