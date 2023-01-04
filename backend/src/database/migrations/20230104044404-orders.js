'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      CTE: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        allowNull: true,
      }
    });
      
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
