'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courier: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      driverName: {
        type: Sequelize.STRING
      },
      driverComment: {
        type: Sequelize.STRING
      },
      fromLocation: {
        type: Sequelize.STRING
      },
      toLocation: {
        type: Sequelize.STRING
      },
      deliveryDate: {
        type: Sequelize.STRING
      },
      startedAt: {
        type: Sequelize.STRING
      },
      finishedAt: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};