'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sponsors', [
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sponsors', null, {});
  }
};