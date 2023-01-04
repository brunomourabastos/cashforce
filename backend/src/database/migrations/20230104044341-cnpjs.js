'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cnpjs', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      companyType: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cnpjs');

  }
};
