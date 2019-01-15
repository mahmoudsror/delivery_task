'use strict';
module.exports = (sequelize, DataTypes) => {
  var tasks = sequelize.define('tasks', {
    courier: DataTypes.STRING,
    description: DataTypes.STRING,
    driverName: DataTypes.STRING,
    driverComment: DataTypes.STRING,
    fromLocation: DataTypes.STRING,
    toLocation: DataTypes.STRING,
    deliveryDate: DataTypes.STRING,
    startedAt: DataTypes.STRING,
    finishedAt: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};